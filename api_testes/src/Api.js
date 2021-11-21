import axios from 'axios'

const Api = axios.create ({
    // baseURL: 'https://api.tvmaze.com/search/shows?q=star%20wars',
    baseURL: 'https://api.tvmaze.com/search/shows?q=witch', 
})

export default Api;
