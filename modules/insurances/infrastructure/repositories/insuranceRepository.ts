// src/infrastructure/repositories/insuranceRepository.ts

import { Insurance } from '../../domain/models/Insurance';
import { InsuranceRepository } from '../../domain/repositories/InsuranceRepository';
import { Http } from '../../domain/repositories/Http';
import { InsuranceDTO } from '../http/dto/InsuranceDTO';

export const insuranceRepository = (client: Http): InsuranceRepository => ({
    getInsurances: async () => {
        try {
            const insurancesDTO = await client.get<InsuranceDTO[]>('https://prod-sales-gateway/insurances');
            const insurances: Insurance[] = insurancesDTO.map((insuranceDto): Insurance => ({
                id: insuranceDto.id,
                title: insuranceDto.title,
                price: insuranceDto.price
            }));
            return insurances;
        } catch (error: any) {
            throw new Error(`Error getting insurances: ${error.message}`);
        }
    },

    getInsurancesById: async (id: string) => {
        try {
            const insuranceDTO = await client.get<InsuranceDTO>(`https://prod-sales-gateway/insurances/${id}`);
            const insurance: Insurance = {
                id: insuranceDTO.id,
                title: insuranceDTO.title,
                price: insuranceDTO.price
            };
            return [insurance];
        } catch (error: any) {
            throw new Error(`Error getting insurance by ID ${id}: ${error.message}`);
        }
    }
});