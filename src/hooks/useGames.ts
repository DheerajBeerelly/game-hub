import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Platform{
  id:number
  name:string
  slug:string
}

export interface Game {
    id: number;
    name: string;
    background_image : string
    parent_platforms: {platform:Platform}[]
    metacritic: number
    
  }
  
  interface GameDataResult {
    count: number;
    results: Game[];
  }

const useGames = () => {
    
    
    const [games, setGame] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
      
    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<GameDataResult>("games", {signal:controller.signal})
            .then((res) => {setIsLoading(false); setGame(res.data.results)})
            .catch((err) => {if(err instanceof CanceledError ) return
              setIsLoading(false); setError(err.message)});

            return ()=>controller.abort();
        }, []);

    return {games,error,isLoading}
    
}

export default useGames;