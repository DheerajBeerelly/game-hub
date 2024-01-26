import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api/",
    params:{
        key: "efee962457fa4880a69d97260131998b"
    }
})