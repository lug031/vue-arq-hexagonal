import { InsuranceRepository } from '../../domain/repositories/InsuranceRepository';
import { Http } from '../../domain/repositories/Http';
export declare const insuranceRepository: (client: Http) => InsuranceRepository;
