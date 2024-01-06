// src/domain/services/InsuranceService.ts

import { InsuranceRepository } from '../repositories/InsuranceRepository';

export const insuranceService = (repository: InsuranceRepository): InsuranceRepository => ({
    getInsurances: () => {
        return repository.getInsurances();
    },
    getInsurancesById: id => {
        return repository.getInsurancesById(id);
    }
});
