import { CatalogItem } from "./CatalogItem/CatalogItem.jsx"
import '../Catalog/all-ads.css'
import { useContext,useState } from "react"
import AdsContext from "../../contexts/AdsContext.jsx"
import { Stack, Skeleton } from "@mui/material";
export const Catalog = ()=>{
    const {ads} = useContext(AdsContext)
   
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
      setLoading(false);
    }, [2000])
    return (
        <section id="catalog-page">
        <h1>All Offers</h1>
        {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
        
       
    {ads.map(x => 
    <CatalogItem key={x._id} {...x} />
    )}

        {ads.length === 0 && (
            <h3 className="no-articles">No offers yet</h3>

        )}
        </>
      )}
    </section>
    )
}