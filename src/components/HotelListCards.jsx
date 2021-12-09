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
import { TPReview, TPCardText, Tower, HotelCard, LoadMoreButton, LoadMoreButtonDiv, HotelDetailesText, ZuichImage, Zuich, ZuichReviews, PropertyDiv, HotelDetailesDiv, BookingButtons, BookingButton, PriceButton, PriceButtonSpan, Hotel } from '../styled'

const HotelListCards = () => {

    let History = useNavigate();
    const { t } = useTranslation();

    const handleSubmit = (el) => {
        el.preventDefault()
        History('/hoteldetailes')
    }
    //{t('viewAll')}
    return (
        <div className="hotelsList">
            <HotelCard>
                <ZuichImage src="/assets/img/hoteList.jpg" alt="" />
                <Hotel>
                    <Zuich>{t('zuich')}</Zuich>
                    <Tower>
                        <Tower>
                            <img src="/assets/img/star.svg" style={{ marginRight: '12px' }} />
                            <HotelDetailesText>4.8 <ZuichReviews>{t('zuichReviews')}</ZuichReviews> </HotelDetailesText>
                        </Tower>
                        <Tower>
                            <BsFlag style={{ marginRight: '10px', color: '#84878b' }} />
                            <ZuichReviews>{t('zuichTown')}</ZuichReviews>
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
                        <PriceButton type="button">$320 <PriceButtonSpan>{t('forTwo')}</PriceButtonSpan> </PriceButton>
                        <BookingButton onClick={handleSubmit} type="button">{t('bookNow')}</BookingButton>
                    </div>
                    </BookingButtons>
                </Hotel>
            </HotelCard>
            <HotelCard>
                <ZuichImage src="/assets/img/hoteList2.jpg" alt="" />
                <Hotel>
                    <Zuich>{t('zuich')}</Zuich>
                    <Tower>
                        <Tower>
                            <img src="/assets/img/star.svg" style={{ marginRight: '12px' }} />
                            <HotelDetailesText>4.8 <ZuichReviews>{t('zuichReviews')}</ZuichReviews> </HotelDetailesText>
                        </Tower>
                        <Tower>
                            <BsFlag style={{ marginRight: '10px', color: '#84878b' }} />
                            <ZuichReviews>{t('zuichTown')}</ZuichReviews>
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
                        <PriceButton type="button">$320 <PriceButtonSpan>{t('forTwo')}</PriceButtonSpan> </PriceButton>
                        <BookingButton type="button">{t('bookNow')}</BookingButton>
                    </div>
                    </BookingButtons>
                </Hotel>
            </HotelCard>
            <HotelCard>
                <ZuichImage src="/assets/img/hoteList3.jpg" alt="" />
                <Hotel>
                    <Zuich>{t('zuich')}</Zuich>
                    <Tower>
                        <Tower>
                            <img src="/assets/img/star.svg" style={{ marginRight: '12px' }} />
                            <HotelDetailesText>4.8 <ZuichReviews>{t('zuichReviews')}</ZuichReviews> </HotelDetailesText>
                        </Tower>
                        <Tower>
                            <BsFlag style={{ marginRight: '10px', color: '#84878b' }} />
                            <ZuichReviews>{t('zuichTown')}</ZuichReviews>
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
                        <PriceButton type="button">$320 <PriceButtonSpan>{t('forTwo')}</PriceButtonSpan> </PriceButton>
                        <BookingButton type="button">{t('bookNow')}</BookingButton>
                    </div>
                    </BookingButtons>
                </Hotel>
            </HotelCard>
            
            <LoadMoreButtonDiv>
            <LoadMoreButton><BiLoaderCircle style={{marginRight: '15px', width: '18px',height: '18px'}}/>{t('viewAll')}</LoadMoreButton>

            </LoadMoreButtonDiv>
        </div>
    );
};

export default HotelListCards;