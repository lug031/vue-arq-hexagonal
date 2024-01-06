import { Http } from '../../domain/repositories/Http';

const headers = {
    'Content-Type': 'application/json'
};

const httpFetch: Http = {
    get: async <T>(url: string) => {
        const response = await fetch(url, {
            method: 'GET',
            headers
        });
        return await response.json() as T;
    },
    post: async <T>(url: string, body: any) => {
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(body)
        });
        return await response.json() as T;
    },
    put: async <T>(url: string, body: any) => {
        const response = await fetch(url, {
            method: 'PUT',
            headers,
            body: JSON.stringify(body)
        });
        return await response.json() as T;
    },
    delete: async <T>(url: string) => {
        const response = await fetch(url, {
            method: 'DELETE',
            headers
        });
        return await response.json() as T;
    }
};

export { httpFetch };
