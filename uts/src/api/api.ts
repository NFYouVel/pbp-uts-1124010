const BASE_URL = '/api'

export async function loginRequest(email: string, password: string) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = await response.json();

    return {
        status: response.status,
        data
    };
}

export async function getUserInfo() {

    const response = await fetch(`${BASE_URL}/auth/me`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    });

    const data = await response.json();

    return data;
}
