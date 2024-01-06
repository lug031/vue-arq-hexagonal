import {  UserCredential } from 'firebase/auth';
import { User } from '../users/domain/models/User';

export interface AuthModule {
    loginGoogleAuth: () => Promise<UserCredential>;
    logout: () => Promise<void>;
    currentUserPromise: () => Promise<User | null>;
    infoUser: User | null;
}