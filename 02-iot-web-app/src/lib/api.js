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
                const promise = res.json();
                return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
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
                const promise = res.json();
                return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
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
                const promise = res.json();
                return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
            });
    },

    getUserById: (user_id, session_token) => {
        const opt = {
            method: 'GET',
        };
        const url = `/api/v1/user/${user_id}?session_token=${session_token}`;
        return fetch(url, opt)
            .then(res => {
                const promise = res.json();
                return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
            });
    },

    getDeviceList: (user_id, session_token) => {
        const opt = {
            method: 'GET',
        };
        const url = `/api/v1/user/${user_id}/device?session_token=${session_token}`;
        return fetch(url, opt)
            .then(res => {
                const promise = res.json();
                return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
            });

    },

    createNewDevice: (user_id, session_token, name) => {
        const data = {name, session_token};
        const opt = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const url = `/api/v1/user/${user_id}/device`;
        return fetch(url, opt)
            .then(res => {
                const promise = res.json();
                return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
            });
    },

    deleteDevice: (user_id, device_id, session_token) => {
        const data = {session_token};
        const opt = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const url = `/api/v1/user/${user_id}/device/${device_id}`;
        return fetch(url, opt)
            .then(res => {
                const promise = res.json();
                return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
            });
    },

    createNewSensor: (user_id, device_id, session_token, name, units) => {
        const data = {session_token, name, units};
        const opt = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const url = `/api/v1/user/${user_id}/device/${device_id}/sensor`;
        return fetch(url, opt)
            .then(res => {
                const promise = res.json();
                return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
            });
    },

    renameDevice: (user_id, device_id, session_token, name) => {
        const data = {session_token, name};
        const opt = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const url = `/api/v1/user/${user_id}/device/${device_id}`;
        return fetch(url, opt)
            .then(res => {
                const promise = res.json();
                return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
            });
    },

    editSensor: (user_id, device_id, sensor_id, session_token, name, units) => {
        const data = {session_token, name, units};
        const opt = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const url = `/api/v1/user/${user_id}/device/${device_id}/sensor/${sensor_id}`;
        return fetch(url, opt)
            .then(res => {
                const promise = res.json();
                return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
            });
    },

    deleteSensor: (user_id, device_id, sensor_id, session_token) => {
        const data = {session_token};
        const opt = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const url = `/api/v1/user/${user_id}/device/${device_id}/sensor/${sensor_id}`;
        return fetch(url, opt)
            .then(res => {
                const promise = res.json();
                return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
            });
    },

    getSensorInfoById: (user_id, device_id, sensor_id, session_token) => {
        const opt = {
            method: 'GET'
        };
        const url = `/api/v1/user/${user_id}/device/${device_id}/sensor/${sensor_id}?session_token=${session_token}`;
        return fetch(url, opt)
            .then(res => {
                const promise = res.json();
                return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
            });
    },

    getDeviceInfoById: (user_id, device_id, session_token) => {
        const opt = {
            method: 'GET'
        };
        const url = `/api/v1/user/${user_id}/device/${device_id}?session_token=${session_token}`;
        return fetch(url, opt)
            .then(res => {
                const promise = res.json();
                return res.ok ? promise : promise.then(err => {throw new Error(err.message)});
            });
    }
};

export default api;