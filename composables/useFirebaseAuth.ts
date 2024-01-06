import { signInWithPopup, GoogleAuthProvider, UserCredential, signOut, onAuthStateChanged } from 'firebase/auth';
import { AuthModule } from '../modules/shared/authTypes';

export const createAuthModule = (): AuthModule => {
    const { $auth } = useNuxtApp();
    const provider = new GoogleAuthProvider();
    let inactivityTimer: string | number | NodeJS.Timeout | null | undefined = null;

    provider.setCustomParameters({
        prompt: 'select_account',
    });

    const loginGoogleAuth = async (): Promise<UserCredential> => {
        try {
            const result = await signInWithPopup($auth, provider);
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const logout = async () => {
        await signOut($auth);
        // await navigateTo('/login'); // Puedes manejar la navegación desde el componente que utiliza este módulo
    };

    const currentUserPromise = () =>
        new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged($auth, (user) => {
                unsubscribe();
                console.log('promesa usuario actual');
                resolve(user);
                console.log(user);
            });
        });

    const infoUser = $auth.currentUser;

    return {
        loginGoogleAuth,
        logout,
        currentUserPromise,
        infoUser,
    };
};