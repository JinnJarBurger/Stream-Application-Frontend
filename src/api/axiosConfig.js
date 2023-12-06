import axios from "axios";

export default axios.create({
    baseURL: 'https://c995-103-213-242-115.ngrok.io',
    headers: {
        "ngrok-skip-browser-warning": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
});