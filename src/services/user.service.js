import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "http://localhost:8081/";

class UserService {

    // ENTRIES
    getEntries() {
        return axios.get(API_URL + 'entries', { headers: authHeader() }).then(response => {return response});
    }

    createEntry(username, checkIn, checkOut, categoryId, note) {
        return axios
            .post(API_URL + "entries", {
                username,
                checkIn,
                checkOut,
                category: {"id":categoryId},
                note
            }, { headers: authHeader() })
            .then(response => {
                return response;
            });
    }

    deleteEntry(id) {
        return axios
            .delete((API_URL + "entries/" + id.toString()), { headers: authHeader() })
            .then(response => {
                return response;
            });
    }

    // CATEGORIES
    getCategories() {
        return axios.get(API_URL + 'categories', { headers: authHeader() }).then(response => {return response});
    }
}

export default new UserService();
