import axios from "axios";

export const instanceAPI = axios.create({
    baseURL: "http://nyx.vima.ekt.gr:3000"
});
