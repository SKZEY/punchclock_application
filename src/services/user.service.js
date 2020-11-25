import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:8081/";

class UserService {

    getEntries() {
        return axios.get(API_URL + 'entries', { headers: authHeader() });
    }

    createEntry(username, startTime, endTime, category, note) {
        return axios
            .post(API_URL + "entries", {
                username,
                startTime,
                endTime,
                category,
                note
            }, { headers: authHeader() })
            .then(response => {
                return response;
            });
    }
}

export default new UserService();
