import axios from "axios";

export const processAPI = async(method, url, token, data={} ) => {
    if (method === 'get') {
        return axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }


    return axios.post(url, data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}