import { defineStore } from "pinia";
import { insuranceService } from '../modules/insurances/domain/services/InsuranceService';
import { insuranceRepository } from '../modules/insurances/infrastructure/repositories/insuranceRepository';
import { Http } from '../modules/insurances/domain/repositories/Http';
import { httpFetch } from '../modules/insurances/infrastructure/instances/httpFetch';

export const useInsuranceStore = defineStore('insurance', () => {
    const config = useRuntimeConfig()
    const httpClient: Http = httpFetch;
    const repository = insuranceRepository(httpClient);


    const getInsurances = async () => {
        try {
            const insurances = await insuranceService(repository).getInsurances();
            console.log('Respuesta de la API:', insurances);
        } catch (error) {
            console.error('Error al obtener los seguros:', error);
        }
    };

    return {
        getInsurances,
    };
}, { persist: true });
