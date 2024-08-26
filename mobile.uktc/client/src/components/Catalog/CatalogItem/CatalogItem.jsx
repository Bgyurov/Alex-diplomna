import { useNavigate } from "react-router-dom"
import { currencyConverter } from "../../../services/convertor"
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";
export const CatalogItem = ({
        car ,
        model,
        modification ,
        milleage,
        imageUrl,
        price,
        currency,
        _id
}) => {
    const navigate = useNavigate()
    const onDetailClick = () => {
        navigate(`/catalog/${_id}`)
    }

    return (
        <div className="offer">
        <div className="offer-info">
            <img src={imageUrl} />
            <h6>{car} {model} {modification}</h6>
            <h2>{price} {currencyConverter(currency)}</h2>
            <h6>{milleage}km</h6>

            <Button sx={{marginTop:8}} onClick={onDetailClick} variant="contained" startIcon={<SearchIcon />}>Details</Button>
        </div>
    </div>
    )
}