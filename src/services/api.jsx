// const API_BASE_URL = 'http://localhost:3000/api';
const API_BASE_URL = 'https://xc-tools-backend.vercel.app/api';

class ApiService {
    async request(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;

        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        if (config.body && typeof config.body === 'object') {
            config.body = JSON.stringify(config.body);
        }

        const response = await fetch(url, config);

        const data = await response.json();

        if (!response.ok) {
            throw new Error(DataTransfer.error || 'something on wrong bruh')
        }

        return data;

    } catch(error) {
        console.error('API request failed:', error);
        throw error;
    }


    async login(username, password) {
        return this.request('/auth/login', {
            method: 'POST',
            body: { username, password }
        });
    }

    async verifyToken(token) {
        return this.request('/admin/verify', {
            method: 'POST',
            body: { token }
        });
    }

    async fetchTools() {
        return this.request('/tools/list', {
            method: 'GET',
            // body: {}
        });
    }

    async fetchPortfolio() {
        return this.request('/portfolio/my-portfolio', {
            method: 'GET',
        })
    }
}

export default new ApiService();

