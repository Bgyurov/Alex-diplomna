import { useParams } from "react-router-dom";
import { adsServiceFactory } from "../../services/adsService";
import { useEffect, useState, useContext } from "react";
import {
  currencyConverter,
  engineTypeConverter,
  transmitionConverter,
  yearConverter,
} from "../../services/convertor.js";
import { useNavigate } from "react-router-dom";
import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";
import "./details.css";
import { authServiceFactory } from "../../services/authService.tsx";
import AdsContext from "../../contexts/AdsContext.jsx";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
export const AdDetails = ({}) => {
  const { onDeleteAdSubmit } = useContext(AdsContext);
  const navigate = useNavigate();
  const { userId, isAuthenticated } = useContext(AuthContext);
  const { adId } = useParams();
  const [ad, setAd] = useState({});
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isFavourite, setIsFavorite] = useState(false);
  const adService = useService(adsServiceFactory);

  useEffect(() => {
    adService.getOneDetails(adId).then((result) => {
      setAd(result[0]);

      if (
        result[0].favourites.find(
          (item) => item.publicationId === adId && item._ownerId === userId
        )
      ) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    });
  }, [adId]);

  const onDelete = async () => {
    onDeleteAdSubmit(adId);
    navigate("/catalog");
  };
  const onEdit = async (adId) => {
    navigate(`/catalog/${adId}/edit`);
  };
  const isOwner = ad._ownerId === userId;
  let photos = [];

  photos.push(ad.imageUrl);
  if (ad.imageUrl2) {
    photos.push(ad.imageUrl2);
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [photos]);

  async function handleFavClick() {
    let favs = await adService.favorite2(adId);

    setAd((prevState) => ({
      ...prevState,
      favourites: { ...prevState.favourites, 1: favs },
    }));
    setIsFavorite(true);
  }

  return (
    <section id="vehicle-details">
      <h1>Vehicle Details</h1>
      <div className="info-section">
        <div className="vehicle-header">
          <img className="vehicle-img" src={photos[currentPhotoIndex]} />
          <h1>
            {ad.car} {ad.model} {ad.modification}
          </h1>
          <span className="specs">
            Тип двигател: {engineTypeConverter(ad.etype)}
          </span>
          <span className="specs">
            Скоростна кутия: {transmitionConverter(ad.transmition)}
          </span>
          <span className="specs">Мощност: {ad.hppower}[к.с]</span>
          <span className="specs">Евростандарт: {ad.ecategory}</span>
          <span className="specs">
            Година на производство(м/г): {yearConverter(ad.manufacturedate)}
          </span>
          <br></br>
          <span className="price">
            Цена: {ad.price} {currencyConverter(ad.currency)}
          </span>
        </div>

        <p className="text">{ad.description}</p>
        <span className="phone">Телефон за връзка: {ad.contactphone}</span>

        {isAuthenticated && (
          <div className="buttons">
            {isOwner && (
              <>
                <Button
                  sx={{ marginRight: 1 }}
                  onClick={() => onEdit(ad._id)}
                  variant="outlined"
                  startIcon={<EditIcon />}
                >
                  Edit
                </Button>

                <Button
                  to={`/catalog`}
                  onClick={onDelete}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </>
            )}

            {!isOwner && (
              <>
                {!isFavourite && (
                  <button
                    href={`/catalog/${ad._id}`}
                    onClick={handleFavClick}
                    className="vote-up"
                  >
                    Favorite
                  </button>
                )}

                {isFavourite && (
                  <p className="thanks-for-vote">
                    You are already watching this offer{" "}
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
