import { HotelDetailesText, ZuichReviews, AsideReviews, AsideTitle, BedroomPrivateRoom, ReportText, Total, AsideImg, HotelPaymentAsideDiv, CheckIn, Date, CheckInDiv, BookedDetailes, Nigths5, CostForNight, CostForNightDiv } from '../styled';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import apiCalls from '../config/api';
import Loader from './Loader';


const HotelPaymentAside = () => {

    const { t } = useTranslation();
    //{t('reportThis')}

    const [hotelInfo, setHotelInfo] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();
    useEffect(() => {
        setTimeout(() => {
            apiCalls.getHotelDetail(id).then(data => {
                setHotelInfo(data);
                setIsLoading(false);
            }).catch(error => {
                setError(error.message)
            })
        }, 2000)
    }, [id]);

    const content = isLoading ? <Loader/> : <HotelPaymentAsideDiv key={hotelInfo.id}>
    <AsideTitle>{hotelInfo.name} </AsideTitle>
    <div>
        <AsideReviews>
            <img src="/assets/img/star.svg" style={{ marginRight: '12px' }} />
            <HotelDetailesText>{hotelInfo.rating}<ZuichReviews>({hotelInfo.reviews} reviews)</ZuichReviews> </HotelDetailesText>
        </AsideReviews>
        <AsideImg src={`/assets/img/${hotelInfo.photo}`} alt="" />
        <BedroomPrivateRoom>{t('bedroomPrivate')}</BedroomPrivateRoom>
        <CheckInDiv>
            <div>
                <CheckIn>{t('checkIn')}</CheckIn>
                <Date>{t('june27')}</Date>
            </div>
            <div>
                <CheckIn>{t('checkOut')}</CheckIn>
                <Date>{t('june30')}</Date>
            </div>
        </CheckInDiv>
        <CheckIn>{t('guest')}</CheckIn>
        <Date>{t('guests')}</Date>
        <BookedDetailes>{t('bookedDetailes')}</BookedDetailes>
        <CostForNightDiv>
            <Nigths5>{t('5nights')}</Nigths5>
            <CostForNight>$833</CostForNight>
        </CostForNightDiv>
        <CostForNightDiv>
            <Nigths5>{t('ocupancy')}</Nigths5>
            <CostForNight>-$125</CostForNight>
        </CostForNightDiv>
        <CostForNightDiv>
            <Nigths5>{t('serviceFree')}</Nigths5>
            <CostForNight>$103</CostForNight>
        </CostForNightDiv>
        <Total>
            <Nigths5>{t('total')}</Nigths5>
            <CostForNight>${hotelInfo.price}</CostForNight>
        </Total>
        <ReportText>{t('reportThis')}</ReportText>
    </div>
</HotelPaymentAsideDiv>

    return (
        <div>
            {!error && content}

            {error && <div>{error}</div>}
        </div>
    )
};

export default HotelPaymentAside;