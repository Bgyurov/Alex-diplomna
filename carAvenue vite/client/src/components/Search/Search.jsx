import '../Search/search.css'
import { SearchItem } from './SearchItem/SearchItem.jsx'
import { useForm } from '../../hooks/useForm'
import { useEffect, useState } from 'react'
import { adsServiceFactory } from '../../services/adsService'

export const Search = () =>{
    const [searchAds , setSearchAds] = useState([])

   async function searchFormSubmit(e){
        
        let searchWord = values.search
        console.log(searchWord)
        let convertWord = searchWord.charAt(0).toUpperCase() + searchWord.slice(1);
        if(searchWord == 'bmw' || searchWord == 'Bmw'){
           
            convertWord = 'BMW'
        }
        if(searchWord == 'Mercedes'  || searchWord == 'mercedes'){
           
            convertWord = 'Mercedes-Benz'
        }
        if(convertWord == ''){
        const result = await adsService.getAll()
        setSearchAds(result)
        }else{
            const result = await adsService.searchByName(convertWord)
            setSearchAds(result)

        }
    }
    
    const adsService = adsServiceFactory()
    const {values,changeHandler,onSubmit} = useForm({
        search: ''
    },searchFormSubmit)

    useEffect(() => {
        adsService.getAll()
            .then(result => {
                setSearchAds(result)
            })
    }, [])
   
    return (
        <section id="search-page">
        <h1>Search</h1>
        <h2>Serch by name</h2>
        <form method="GET" onSubmit={onSubmit}>
            <input type="text" className="search" name="search" placeholder="Search..." value={values.search} onChange={changeHandler} />
            <input type="submit" value="Search" />
        </form>


      {searchAds && (
        <>
            {searchAds.map(x => 
    <SearchItem key={x._id} {...x} />
    )}
        </>
    
      )}

        {searchAds.length === 0 && (
            
            <>
            <h3 className="no-articles">Sorry, we couldn't find any results matching your search criteria</h3>
            </>
        )}


    </section>
    )
}