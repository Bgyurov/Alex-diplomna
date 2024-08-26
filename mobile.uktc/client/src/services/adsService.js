import {requestFactory} from './requester'


const baseUrl = process.env.NODE_ENV === 'development'
? 'http://localhost:3030/data/ads'
: 'http://localhost:3030/data/ads'
const favUrl = 'http://localhost:3030/data/favourites'
export const adsServiceFactory = (token) => {
    const request = requestFactory(token)
    
 const getAll = async () => {
    const result = await request.get(baseUrl)
    const ads  = Object.values(result)
    return ads
}
 const getLastThree = async () => {
    const result = await request.get(baseUrl)
    const ads  = Object.values(result)
    const lastThreeAds = ads.slice(-3)
    return lastThreeAds
}
const getOneDetails = async (adId) => {
    const query = new URLSearchParams({
        where: `_id="${adId}"`,
        load: `favourites=publicationId:favourites`,
    });
    const result = await request.get(`${baseUrl}?${query}`)
    return result
}

 const getOne = async (adId) => {
    const result = await request.get(`${baseUrl}/${adId}`)
   
    return result
}

 const create = async (adData) => {
    const result = await request.post(baseUrl,adData)

    return result
}
 const remove =  (adId) => {
    const result =  request.delete(`${baseUrl}/${adId}`)
    return result
}
const edit = async (adId,adData) => request.put(`${baseUrl}/${adId}`,adData)


  const favorite2 = async (publicationId) => {
    
    
    const existingAd = await request.post(favUrl , {publicationId});
    
    return existingAd
   
 
   
};


const searchByName = async(search)=> request.get(`${baseUrl}?where=car%3D%22${search}%22`)

return{
    getAll,
    getLastThree,
    getOne,
    getOneDetails,
    create,
    remove,
    favorite2,
    edit,
    searchByName,
    
}
}
