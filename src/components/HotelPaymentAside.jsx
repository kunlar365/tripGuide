import { HotelDetailesText, ZuichReviews, AsideReviews, AsideTitle, BedroomPrivateRoom, ReportText, Total, AsideImg, HotelPaymentAsideDiv, CheckIn, Date, CheckInDiv, BookedDetailes, Nigths5, CostForNight, CostForNightDiv } from '../styled';
import { useTranslation } from 'react-i18next';


const HotelPaymentAside = () => {

    const { t } = useTranslation();
    //{t('reportThis')}

    return (
        <HotelPaymentAsideDiv>
            <AsideTitle>{t('hotelsAndPlaces')} </AsideTitle>
            <div>
                <AsideReviews>
                    <img src="/assets/img/star.svg" style={{ marginRight: '12px' }} />
                    <HotelDetailesText>4.8 <ZuichReviews>{t('zuichReviews')}</ZuichReviews> </HotelDetailesText>
                </AsideReviews>
                <AsideImg src="/assets/img/hotelPaymentAside.jpg" alt="" />
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
                    <CostForNight>$833</CostForNight>
                </Total>
                <ReportText>{t('reportThis')}</ReportText>
            </div>
        </HotelPaymentAsideDiv>
    )
};

export default HotelPaymentAside;