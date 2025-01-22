import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '121309247f3141f4a94baef00a2b5c9b'
    }
});

