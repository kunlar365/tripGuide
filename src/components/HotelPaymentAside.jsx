import { HotelDetailesText, ZuichReviews, AsideReviews, AsideTitle, BedroomPrivateRoom, ReportText, Total, AsideImg, HotelPaymentAsideDiv, CheckIn, Date, CheckInDiv, BookedDetailes, Nigths5, CostForNight, CostForNightDiv } from '../styled';
import { useTranslation } from 'react-i18next';


const HotelPaymentAside = () => {

    const { t } = useTranslation();
    //{t('notCharged')}

    return (
        <HotelPaymentAsideDiv>
            <AsideTitle>Switzerland Hotels and Places to Stay </AsideTitle>
            <div>
                <AsideReviews>
                    <img src="/assets/img/star.svg" style={{ marginRight: '12px' }} />
                    <HotelDetailesText>4.8 <ZuichReviews>{t('zuichReviews')}</ZuichReviews> </HotelDetailesText>
                </AsideReviews>
                <AsideImg src="/assets/img/hotelPaymentAside.png" alt="" />
                <BedroomPrivateRoom>1 bedroom  +  1 private room</BedroomPrivateRoom>
                <CheckInDiv>
                    <div>
                        <CheckIn>Check in</CheckIn>
                        <Date>June 27, 2020 </Date>
                    </div>
                    <div>
                        <CheckIn>Check out</CheckIn>
                        <Date>June 30, 2020 </Date>
                    </div>
                </CheckInDiv>
                <CheckIn>Guest</CheckIn>
                <Date>2 guests</Date>
                <BookedDetailes>Booked details</BookedDetailes>
                <CostForNightDiv>
                    <Nigths5>$119  +  5nights</Nigths5>
                    <CostForNight>$833</CostForNight>
                </CostForNightDiv>
                <CostForNightDiv>
                    <Nigths5>Ocupancy text and fee</Nigths5>
                    <CostForNight>-$125</CostForNight>
                </CostForNightDiv>
                <CostForNightDiv>
                    <Nigths5>Service free</Nigths5>
                    <CostForNight>$103</CostForNight>
                </CostForNightDiv>
                <Total>
                    <Nigths5>Total</Nigths5>
                    <CostForNight>$833</CostForNight>
                </Total>
                <ReportText>Report this property</ReportText>
            </div>
        </HotelPaymentAsideDiv>
    )
};

export default HotelPaymentAside;