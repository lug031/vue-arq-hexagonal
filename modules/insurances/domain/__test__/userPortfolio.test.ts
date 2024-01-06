// src/tests/userPortfolio.test.ts

import { userPortfolioService } from '../services/userPortfolioService';
import { Insurance } from '../models/Insurance';

const anyInsurance = (id: string, price: number): Insurance => ({
    id,
    title: 'Any title',
    price
});

test('If I add more than five insurances, the sixth will not be added', async () => {
    const cart = userPortfolioService.createPortfolio();

    userPortfolioService.addInsuranceToPortfolio(cart, anyInsurance('1', 0));
    userPortfolioService.addInsuranceToPortfolio(cart, anyInsurance('2', 0));
    userPortfolioService.addInsuranceToPortfolio(cart, anyInsurance('3', 0));
    userPortfolioService.addInsuranceToPortfolio(cart, anyInsurance('4', 0));
    userPortfolioService.addInsuranceToPortfolio(cart, anyInsurance('5', 0));
    userPortfolioService.addInsuranceToPortfolio(cart, anyInsurance('6', 0));
    expect(cart.insurances.length).toEqual(5);
});

test('If I add a insurance and it already exist in the cart, the insurance will not be added', async () => {
    const cart = userPortfolioService.createPortfolio();

    userPortfolioService.addInsuranceToPortfolio(cart, anyInsurance('1', 0));
    userPortfolioService.addInsuranceToPortfolio(cart, anyInsurance('1', 0));
    expect(cart.insurances.length).toEqual(1);
});

test('If I add a insurance and it will exceed 100€, the insurance will not be added', async () => {
    const cart = userPortfolioService.createPortfolio();

    userPortfolioService.addInsuranceToPortfolio(cart, anyInsurance('1', 50));
    userPortfolioService.addInsuranceToPortfolio(cart, anyInsurance('2', 60));
    expect(cart.insurances.length).toEqual(1);
});
