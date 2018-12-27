import fetch from 'isomorphic-fetch';

const api = {
    login: (username, password) => {
        const data = {username, password};
        const opt = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const url = '/api/v1/auth/login';
        return fetch(url, opt)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText || 'Unknow error');
                }
                return res.json();
            });
    },

    logout: (user_id, session_token) => {
        const data = {user_id, session_token};
        const opt = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const url = '/api/v1/auth/logout';
        return fetch(url, opt)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText || 'Unknow error');
                }
                return res.json();
            });

    },

    registrate: (username, password, email) => {
        const data = {username, password, email};
        const opt = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const url = '/api/v1/auth/registrate';
        return fetch(url, opt)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            });
    },

    getUserById: (user_id, session_token) => {
        const opt = {
            method: 'GET',
        };
        const url = `/api/v1/user/${user_id}?session_token=${session_token}`;
        return fetch(url, opt)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText || 'Unknow error');
                }
                return res.json();
            });
    }
};

export default api;