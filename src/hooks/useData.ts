import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";





interface DataResult<T>{
    count:number
    results:T[]
}


const useData = <T>(endpoint : string)=>{
    const [data, setdata] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
      
    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<DataResult<T>>(endpoint, {signal:controller.signal})
            .then((res) => {setIsLoading(false); setdata(res.data.results)})
            .catch((err) => {if(err instanceof CanceledError ) return
              setIsLoading(false); setError(err.message)});

            return ()=>controller.abort();
        }, []);

    return {data,error,isLoading}

}

export default useData;