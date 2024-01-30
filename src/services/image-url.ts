import noImage from '../assets/no-image-placeholder.webp';

const cropImage = (url:string)=>{
    if(url==null) return noImage;
    const target = "media/"
    const index = url.indexOf(target)+target.length
    return url.slice(0,index)+"crop/600/400/"+url.slice(index)
 
}

export default cropImage;