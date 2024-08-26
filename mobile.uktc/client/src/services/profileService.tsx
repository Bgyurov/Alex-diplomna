import {requestFactory} from './requester'

const baseUrl = 'http://localhost:3030/data/ads'
const favUrl = 'http://localhost:3030/data/favourites'

export const profileServiceFactory = (token) => {
    const request = requestFactory(token)
    

const allAdsByUser = async(ownerId)=> request.get(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22`)

const favsByUser = async(ownerId) => {
    const query = new URLSearchParams({
        where: `_ownerId="${ownerId}"`,
        load: `publication=publicationId:ads`,
    });
   return request.get(`${favUrl}?${query}`)
}


return{
    allAdsByUser,
    favsByUser,
}
}
