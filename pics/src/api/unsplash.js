import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers:{
        Authorization: 'Client-ID TM2GrZn9FQQ5A5oVjEsGZY-0HNTdfIzRXnM5G0MDr-o'
    }
})