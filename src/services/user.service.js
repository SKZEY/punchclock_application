import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:8081/";

class UserService {

    getUserBoard() {
        return axios.get(API_URL + 'users', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
}

export default new UserService();
