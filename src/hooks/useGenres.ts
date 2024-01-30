import useData from "./useData";

export interface Genre{
    id:number
    name:string
    image_background:string
}

const Genres = ()=> {return useData<Genre>("genres");}

export default Genres;