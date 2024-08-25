import { createContext, useState,useContext,useEffect } from "react";
import { adsServiceFactory } from "../services/adsService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
const AdsContext = createContext();

export const AdsProvider = ({
    children,
}) => {
    const {token} = useContext(AuthContext)
    const navigate = useNavigate()

    const [ads, setAds] = useState([]);
    const [heroAds , setHeroAds] = useState([])
    const adsService = adsServiceFactory(token)

    useEffect(() => {
        adsService.getAll()
            .then(result => {
                setAds(result)
            })
    }, []);

    useEffect(() => {
        adsService.getLastThree()
            .then(result => {
                setHeroAds(result)
            })
    }, []);

    const onCreateAdSubmit = async (data) =>{
        const newAd = await adsService.create(data)
        //add ad to state
        setAds(state=>[...state,newAd])
        setHeroAds(state=>[...state,newAd])
        //redirect page
        navigate('/catalog')
    }
    const onDeleteAdSubmit = async (adId) => {
        await adsService.remove(adId)
        setAds(state => state.filter(ad => ad._id !== adId))
        setHeroAds(state => state.filter(ad => ad._id !== adId))
        
        
    }
    const onAdEditSubmit = async (values) => {
        const result =  await adsService.edit(values._id,values)
        setAds(state=> state.map(x => x._id === values._id ? result : x))
             navigate(`/catalog/${values._id}`)
     }

    const values = {
        onCreateAdSubmit,
        onDeleteAdSubmit,
        onAdEditSubmit,
        ads: ads,
        heroAds: heroAds,
        
    };

    return (
        <AdsContext.Provider value={values}>
            {children}
        </AdsContext.Provider>
    );
};


export default AdsContext;



