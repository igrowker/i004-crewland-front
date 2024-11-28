import auth from './api/users/auth';
const api = {
    auth: {
        login: auth.login,
        register: auth.register
    }
}

export default api;