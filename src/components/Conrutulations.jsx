import { ZuichDiv, AsideReviews, CongrutulationsImg, FlexDiv, HotelDetailesText, CongrutulationsPage, GoToYour, BookingCode, ReserveDetailTitle, ReserveDetailText, ReserveDetailes, ReserveDiv, ZuichReviews, ReserveTitle, DatesDivs, CongrutulationsTitle, YourTrip, SwitzerlandHotels, Baggoge, BaggogeText, DatesTitle, DatesText, DatesDiv } from '../styled';
import { useTranslation } from 'react-i18next';
import { MdOutlineDateRange } from 'react-icons/md';
import { BsCash } from 'react-icons/bs';
import { TiBriefcase } from 'react-icons/ti';
import { BiBarcode } from 'react-icons/bi';

const Congrutulations = () => {

    const { t } = useTranslation();
    //{t('goToHome')}

    return (
        <div>
            <CongrutulationsPage>
                <ZuichDiv>
                    <CongrutulationsTitle>{t('congrutulations')}</CongrutulationsTitle>
                    <YourTrip>{t('yourTrip')}</YourTrip>
                </ZuichDiv>
                <ZuichDiv>
                    <SwitzerlandHotels>{t('hotelsAndPlaces')}</SwitzerlandHotels>
                    <Baggoge>
                        <AsideReviews>
                            <img src="/assets/img/star.svg" style={{ marginRight: '12px' }} />
                            <HotelDetailesText>4.8 <ZuichReviews>{t('zuichReviews')}</ZuichReviews> </HotelDetailesText>
                        </AsideReviews>
                        <BaggogeText>{t('meals')}</BaggogeText>
                    </Baggoge>
                </ZuichDiv>
                <FlexDiv>
                    <div>
                        <DatesDivs>
                            <DatesDiv>
                                <DatesTitle>{t('dates')}</DatesTitle>
                                <DatesText>{t('may15')}</DatesText>
                            </DatesDiv>
                            <DatesDiv>
                                <DatesTitle>{t('travellers')}</DatesTitle>
                                <DatesText>{t('passanger')}</DatesText>
                            </DatesDiv>
                        </DatesDivs>
                        <ReserveDiv>
                            <ReserveTitle>{t('reserve')}</ReserveTitle>
                            <ReserveDetailes>
                                <BookingCode>
                                    <BiBarcode style={{ marginRight: '14px' }} />
                                    <ReserveDetailText>{t('bookingCode')}</ReserveDetailText>
                                </BookingCode>
                                <ReserveDetailTitle>FD_158456</ReserveDetailTitle>
                            </ReserveDetailes>
                            <ReserveDetailes>
                                <BookingCode>
                                    <MdOutlineDateRange style={{ marginRight: '14px' }} />
                                    <ReserveDetailText>{t('date')}</ReserveDetailText>
                                </BookingCode>
                                <ReserveDetailTitle>{t('30April')}</ReserveDetailTitle>
                            </ReserveDetailes>
                            <ReserveDetailes>
                                <BookingCode>
                                    <BsCash style={{ marginRight: '14px' }} />
                                    <ReserveDetailText>{t('total')}</ReserveDetailText>
                                </BookingCode>
                                <ReserveDetailTitle>$833</ReserveDetailTitle>
                            </ReserveDetailes>
                            <ReserveDetailes>
                                <BookingCode>
                                    <TiBriefcase style={{ marginRight: '14px' }} />
                                    <ReserveDetailText>{t('payment')}</ReserveDetailText>
                                </BookingCode>
                                <ReserveDetailTitle>{t('creditCard')}</ReserveDetailTitle>
                            </ReserveDetailes>
                        </ReserveDiv>
                    </div>
                    <CongrutulationsImg src="/assets/img/congrutulations.png" alt="" />

                </FlexDiv>
                <GoToYour type="button">{t('goToHome')}</GoToYour>
            </CongrutulationsPage>
        </div>
    )
};

export default Congrutulations;