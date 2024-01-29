import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { Game } from "./useGames";

interface Genre{
    id:number
    name:string
    image_background:string
}

interface GenreDataResult{
    count:number
    results:Genre[]
}

const Genres = ()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
      
    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<GenreDataResult>("genres", {signal:controller.signal})
            .then((res) => {setIsLoading(false); setGenres(res.data.results)})
            .catch((err) => {if(err instanceof CanceledError ) return
              setIsLoading(false); setError(err.message)});

            return ()=>controller.abort();
        }, []);

    return {genres,error,isLoading}

}

export default Genres;