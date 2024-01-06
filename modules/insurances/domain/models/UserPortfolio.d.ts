import { Insurance } from './Insurance';
export interface IUserPortfolio {
    createPortfolio: () => UserPortfolio;
    addInsuranceToPortfolio: (portfolio: UserPortfolio, insurance: Insurance) => UserPortfolio;
    removeInsuranceFromPortfolio: (portfolio: UserPortfolio, insurance: Insurance) => UserPortfolio;
}
export declare type UserPortfolio = {
    id: string;
    insurances: Insurance[];
};
