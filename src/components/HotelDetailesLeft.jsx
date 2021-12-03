import { DetailesTitle, DetailesFeatures, HotelDetailesSection, Towers, CheckingDivs, HotelDetailesContainer, MoreDetailes, DetailesIconsDiv, DetailesFeaturesDiv, DetailesIconText, DetailesIconDiv, ZuichDiv, DetailesText, DetailesZuich, HotelListSection, Tower, HotelDetailesText, ZuichReviews, DetailesImagesDiv, Spans, DetailesFirstImg, DetailesSecondImg, DetailesLastImg, Zuich, GreenSpan, YellowSpan, BlueSpan, PinkSpan, OrangeSpan } from '../styled';
import { BsFlag } from 'react-icons/bs';
// import { Tab, Tabs, Tablist } from 'react-tabs';
import { Tab, Tabs, TabList } from 'react-tabs';
import { FaBath } from 'react-icons/fa';
import { RiRestaurantLine } from 'react-icons/ri';
import { RiHotelBedLine } from 'react-icons/ri';
import { HiArrowsExpand } from 'react-icons/hi';
import { HiDesktopComputer } from 'react-icons/hi';
import { CgScreen } from 'react-icons/cg';
import { VscClose } from 'react-icons/vsc';
import { CgHomeScreen } from 'react-icons/cg';
import { FaPizzaSlice } from 'react-icons/fa';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import HotelDetailesAside from '../components/HotelDetailesAside';
import { BiWifi } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import 'react-tabs/style/react-tabs.css';

const HotelDetailesLeft = () => {

    const { t } = useTranslation();
    //{t('moreDetailes')}
    
    return (
        <HotelDetailesSection>
            <HotelDetailesContainer>
                <DetailesTitle>{t('hotelsAndPlaces')}</DetailesTitle>
                <Towers>
                    <Tower>
                        <img src="/assets/img/star.svg" style={{ marginRight: '12px' }} />
                        <HotelDetailesText>4.8 <ZuichReviews>{t('zuichReviews')}</ZuichReviews> </HotelDetailesText>
                    </Tower>
                    <Tower>
                        <BsFlag style={{ marginRight: '10px', color: '#84878b' }} />
                        <ZuichReviews>{t('zuichTown')}</ZuichReviews>
                    </Tower>
                </Towers>
                <DetailesImagesDiv>
                    <div>
                        <DetailesFirstImg src="/assets/img/placesToStay.jpg" alt="" />
                    </div>
                    <div>
                        <DetailesSecondImg src="/assets/img/placesToStay2.jpg" alt="" />
                        <img src="/assets/img/placesToStay3.jpg" alt="" />
                        <DetailesLastImg src="/assets/img/placesToStay4.jpg" alt="" />
                    </div>
                </DetailesImagesDiv>
                <CheckingDivs>
                    <div>
                        <Spans>
                            <GreenSpan>5.0</GreenSpan>
                            <YellowSpan>{t('perfect')}</YellowSpan>
                            <BlueSpan>{t('hotels')}</BlueSpan>
                            <PinkSpan>{t('building')}</PinkSpan>
                            <OrangeSpan>{t('topValue')}</OrangeSpan>
                            <img src="/assets/img/stars.png" alt="" />
                        </Spans>
                        <ZuichDiv>
                            <Zuich>{t('exclusiveRoom')}</Zuich>
                            <DetailesZuich>{t('zuich')}</DetailesZuich>
                        </ZuichDiv>
                        <Tabs>
                            <TabList>
                                <Tab>{t('description')}</Tab>
                                <Tab>{t('features')}</Tab>
                                <Tab>{t('rromAndPlace')}</Tab>
                                <Tab>{t('review')}</Tab>
                            </TabList>
                        </Tabs>
                        <DetailesText>{t('arabianPark')}</DetailesText>
                        <div>
                            <DetailesFeatures>{t('hotelFeatures')}</DetailesFeatures>
                            <DetailesFeaturesDiv>
                                <DetailesIconDiv>
                                    <BiWifi style={{ color: '#4F4F4F', width: '20px', height: '20px', marginRight: '10px' }} />
                                    <DetailesIconText>{t('wiFi')}</DetailesIconText>
                                </DetailesIconDiv>
                                <DetailesIconDiv>
                                    <FaBath style={{ color: '#4F4F4F', width: '20px', height: '20px', marginRight: '10px' }} />
                                    <DetailesIconText>{t('bathup')}</DetailesIconText>
                                </DetailesIconDiv>
                                <DetailesIconDiv>
                                    <RiRestaurantLine style={{ color: '#4F4F4F', width: '20px', height: '20px', marginRight: '10px' }} />
                                    <DetailesIconText>{t('breakfast')}</DetailesIconText>
                                </DetailesIconDiv>
                                <DetailesIconDiv>
                                    <RiHotelBedLine style={{ color: '#4F4F4F', width: '20px', height: '20px', marginRight: '10px' }} />
                                    <DetailesIconText>{t('kinsBed')}</DetailesIconText>
                                </DetailesIconDiv>
                                <DetailesIconDiv>
                                    <HiArrowsExpand style={{ color: '#4F4F4F', width: '20px', height: '20px', marginRight: '10px' }} />
                                    <DetailesIconText>4m   <VscClose style={{ color: '#4f4f4f' }} />   6m</DetailesIconText>
                                </DetailesIconDiv>
                            </DetailesFeaturesDiv>
                        </div>
                        <DetailesFeatures>{t('amenities')}</DetailesFeatures>
                        <DetailesIconsDiv>
                            <div>
                                <DetailesIconDiv>
                                    <BiWifi style={{ color: '#4F4F4F', width: '20px', height: '20px', marginRight: '10px' }} />
                                    <DetailesIconText>{t('freeWiFi')}</DetailesIconText>
                                </DetailesIconDiv>
                                <DetailesIconDiv>
                                    <CgHomeScreen style={{ color: '#4F4F4F', width: '20px', height: '20px', marginRight: '10px' }} />
                                    <DetailesIconText>{t('freeWiFi')}</DetailesIconText>
                                </DetailesIconDiv>
                                <DetailesIconDiv>
                                    <CgScreen style={{ color: '#4F4F4F', width: '20px', height: '20px', marginRight: '10px' }} />
                                    <DetailesIconText>{t('freeWiFi')}</DetailesIconText>
                                </DetailesIconDiv>
                                <DetailesIconDiv>
                                    <HiDesktopComputer style={{ color: '#4F4F4F', width: '20px', height: '20px', marginRight: '10px' }} />
                                    <DetailesIconText>{t('freeComputer')}</DetailesIconText>
                                </DetailesIconDiv>
                            </div>
                            <div>
                                <DetailesIconDiv>
                                    <FaBath style={{ color: '#4F4F4F', width: '20px', height: '20px', marginRight: '10px' }} />
                                    <DetailesIconText>{t('freeWiFi')}</DetailesIconText>
                                </DetailesIconDiv>
                                <DetailesIconDiv>
                                    <FaPizzaSlice style={{ color: '#4F4F4F', width: '20px', height: '20px', marginRight: '10px' }} />
                                    <DetailesIconText>{t('freeWiFi')}</DetailesIconText>
                                </DetailesIconDiv>
                                <DetailesIconDiv>
                                    <CgHomeScreen style={{ color: '#4F4F4F', width: '20px', height: '20px', marginRight: '10px' }} />
                                    <DetailesIconText>{t('freeWiFi')}</DetailesIconText>
                                </DetailesIconDiv>
                                <DetailesIconDiv>
                                    <HiOutlineOfficeBuilding style={{ color: '#4F4F4F', width: '20px', height: '20px', marginRight: '10px' }} />
                                    <DetailesIconText>{t('freeComputer')}</DetailesIconText>
                                </DetailesIconDiv>
                            </div>
                        </DetailesIconsDiv>
                        <MoreDetailes type="button">{t('moreDetailes')}</MoreDetailes>
                    </div>
                    <HotelDetailesAside />
                </CheckingDivs>
            </HotelDetailesContainer>
        </HotelDetailesSection>
    );
};

export default HotelDetailesLeft;