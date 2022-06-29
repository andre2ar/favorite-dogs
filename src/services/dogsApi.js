import axios from 'axios';

const dogsApi = axios.create({
    baseURL: 'https://random.dog'
});

export {dogsApi};