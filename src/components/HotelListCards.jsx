import { BsFlag } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsCalendar4Week } from 'react-icons/bs';
import { GiCommercialAirplane } from 'react-icons/gi';
import { HiWifi } from 'react-icons/hi';
import { BsGlobe2 } from 'react-icons/bs';
import { AiOutlineSafety } from 'react-icons/ai'
import { RiParkingBoxLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { BiLoaderCircle } from 'react-icons/bi';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiCalls from '../config/api';
import { TPReview, TPCardText, LinkToDetailes, Tower, HotelCard, LoadMoreButton, LoadMoreButtonDiv, HotelDetailesText, ZuichImage, Zuich, ZuichReviews, PropertyDiv, HotelDetailesDiv, BookingButtons, BookingButton, PriceButton, PriceButtonSpan, Hotel } from '../styled'

const HotelListCards = () => {
    
    let History = useNavigate();
    const { t } = useTranslation();

    const [hotels,setHotels] = useState([]);
    const [error,setError] = useState('');

    useEffect(() => {
        apiCalls.getHotels().then(data => {
            setHotels(data);
        }).catch( error => {
            setError(error.message)
        })
    }, []);


    
    //{t('viewAll')}
    return (
        <div>
            {!error && <div className="hotelsList">
            {hotels.map(e => (
                <HotelCard key={e.id}>
                <ZuichImage style={{width: '420px'}} src={`assets/img/${e.photo}`} alt="" />
                <Hotel>
                    <Zuich>{e.name}</Zuich>
                    <Tower>
                        <Tower>
                            <img src="/assets/img/star.svg" style={{ marginRight: '12px' }} />
                            <HotelDetailesText>{e.rating}<ZuichReviews>({e.reviews} reviews)</ZuichReviews> </HotelDetailesText>
                        </Tower>
                        <Tower>
                            <BsFlag style={{ marginRight: '10px', color: '#84878b' }} />
                            <ZuichReviews>{e.location}</ZuichReviews>
                        </Tower>
                    </Tower>
                    <Tower>
                        <Tower>
                            <HiOutlineLocationMarker style={{ color: '#84878b', width: '20px', height: '20px' }} />
                            <HotelDetailesText>{t('zuichHotel')}</HotelDetailesText>
                        </Tower>
                        <Tower>
                            <BsCalendar4Week style={{ color: '#84878b', width: '20px', height: '20px', marginLeft: '14px' }} />
                            <HotelDetailesText>15.05.2021-16.05.2021</HotelDetailesText>
                        </Tower>
                    </Tower>
                    <PropertyDiv>
                        <GiCommercialAirplane style={{ color: '#84878b', width: '20px', height: '20px' }} />
                        <HotelDetailesText>{t('depature')}</HotelDetailesText>
                    </PropertyDiv>
                    <BookingButtons>
                    <HotelDetailesDiv>
                        <PropertyDiv>
                            <HiWifi style={{ color: '#84878b', width: '20px', height: '20px' }} />
                            <HotelDetailesText>{t('freeWifi')}</HotelDetailesText>
                        </PropertyDiv>
                        <PropertyDiv>
                            <RiParkingBoxLine style={{ color: '#84878b', width: '20px', height: '20px' }} />
                            <HotelDetailesText>{t('freeParking')}</HotelDetailesText>
                        </PropertyDiv>
                        <PropertyDiv>
                            <MdOutlineLocalOffer style={{ color: '#84878b', width: '20px', height: '20px' }} />
                            <HotelDetailesText>{t('specialOffer')}</HotelDetailesText>
                        </PropertyDiv>
                        <PropertyDiv>
                            <BsGlobe2 style={{ color: '#84878b', width: '20px', height: '20px' }} />
                            <HotelDetailesText>{t('visitHotelSite')}</HotelDetailesText>
                        </PropertyDiv>
                        <PropertyDiv className="hotelDetail">
                            <AiOutlineSafety style={{ color: '#84878b', width: '20px', height: '20px' }} />
                            <HotelDetailesText>{t('takingSafety')}</HotelDetailesText>
                        </PropertyDiv>
                    </HotelDetailesDiv>
                    <div className="buttons">
                        <PriceButton type="button">${e.price} <PriceButtonSpan>{t('forTwo')}</PriceButtonSpan> </PriceButton>
                        <LinkToDetailes to={`/hoteldetailes/${e.id}`}>{t('bookNow')}</LinkToDetailes>
                    </div>
                    </BookingButtons>
                </Hotel>
            </HotelCard>
            ))}
            
            <LoadMoreButtonDiv>
            <LoadMoreButton><BiLoaderCircle style={{marginRight: '15px', width: '18px',height: '18px'}}/>{t('viewAll')}</LoadMoreButton>

            </LoadMoreButtonDiv>
        </div>}

        {error && <div>{error}</div>}
        </div>
    );
};

export default HotelListCards;