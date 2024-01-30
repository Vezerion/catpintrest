import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/',
    headers: {
        'x-api-key': 'live_8Z6PbghqMvGWrarCfhqyWgqlj2nxeCDhzRp8nfepqbgUwZTSNXAhbmKMNK1PDeDv'
    }
});


export const catsAPI = {
    getCats(page) {
        return instance.get(`search?limit=30&page=${page}`).then(response => response.data);
    }
}