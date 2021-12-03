import { Container, PassionTitle, TopTourSection, ExploreCard, TopTourText, TrendCityStar, TCStars, TCStarCounts, ComfortSpaceSpan, ComfortSpace, ComfortSpaceDiv, ToTown, ExploringImage, IconsDiv, IconText } from '../styled';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import { FaHotel } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

const Exploring = () => {

    const { t } = useTranslation();

    return(
        <TopTourSection>
            <Container>
                <PassionTitle>{t('exploreWorld_title')}</PassionTitle>
                <TopTourText>{t('exploreWorld_text')}</TopTourText>
                <Swiper slidesPerView="4" spaceBetween="30" style={{marginTop: '50px', paddingBottom: '70px'}}>
                    <SwiperSlide>
                        <ExploreCard>
                        <ExploringImage src="/assets/img/Exploring.jpg" alt="" />
                        <TrendCityStar>
                            <img src="/assets/img/star.svg" alt="star" />
                            <TCStars>4.91 <TCStarCounts>(147)</TCStarCounts> </TCStars>
                        </TrendCityStar>
                        <ComfortSpaceDiv>
                            <ComfortSpace>{t('comfortSpace')}</ComfortSpace>
                            <ComfortSpaceSpan>$210</ComfortSpaceSpan>
                        </ComfortSpaceDiv>
                        <ToTown>{t('toTown')}</ToTown>
                        <IconsDiv>
                            <HiOutlineLocationMarker style={{color:'#B1B5C3',width:'22px',height:'27px'}}/>
                            <IconText>{t('topTour_location')}</IconText>
                        </IconsDiv>
                        <IconsDiv>
                            <FaHotel style={{color:'#B1B5C3'}}/>
                            <IconText>{t('rooms_Available')}</IconText>
                        </IconsDiv>
                        </ExploreCard> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <ExploreCard>
                        <ExploringImage src="/assets/img/Exploring2.jpg" alt="exploring" />
                        <TrendCityStar>
                            <img src="/assets/img/star.svg"  alt="star"/>
                            <TCStars>4.91 <TCStarCounts>(147)</TCStarCounts> </TCStars>
                        </TrendCityStar>
                        <ComfortSpaceDiv>
                            <ComfortSpace>{t('comfortSpace')}</ComfortSpace>
                            <ComfortSpaceSpan>$210</ComfortSpaceSpan>
                        </ComfortSpaceDiv>
                        <ToTown>{t('toTown')}</ToTown>
                        <IconsDiv>
                            <HiOutlineLocationMarker style={{color:'#B1B5C3',width:'22px',height:'27px'}}/>
                            <IconText>{t('topTour_location')}</IconText>
                        </IconsDiv>
                        <IconsDiv>
                            <FaHotel style={{color:'#B1B5C3'}}/>
                            <IconText>{t('rooms_Available')}</IconText>
                        </IconsDiv>
                        </ExploreCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ExploreCard>
                        <ExploringImage src="/assets/img/Exploring3.png" alt=""  alt="exploring"/>
                        <TrendCityStar>
                            <img src="/assets/img/star.svg" alt="star"/>
                            <TCStars>4.91 <TCStarCounts>(147)</TCStarCounts> </TCStars>
                        </TrendCityStar>
                        <ComfortSpaceDiv>
                            <ComfortSpace>{t('comfortSpace')}</ComfortSpace>
                            <ComfortSpaceSpan>$210</ComfortSpaceSpan>
                        </ComfortSpaceDiv>
                        <ToTown>{t('toTown')}</ToTown>
                        <IconsDiv>
                            <HiOutlineLocationMarker style={{color:'#B1B5C3',width:'22px',height:'27px'}}/>
                            <IconText>{t('topTour_location')}</IconText>
                        </IconsDiv>
                        <IconsDiv>
                            <FaHotel style={{color:'#B1B5C3'}}/>
                            <IconText>{t('rooms_Available')}</IconText>
                        </IconsDiv>
                        </ExploreCard> 
                    </SwiperSlide>
                    <SwiperSlide>
                        <ExploreCard>
                        <ExploringImage src="/assets/img/Exploring4.png" alt="exploring" />
                        <TrendCityStar>
                            <img src="/assets/img/star.svg" alt="star"/>
                            <TCStars>4.91 <TCStarCounts>(147)</TCStarCounts> </TCStars>
                        </TrendCityStar>
                        <ComfortSpaceDiv>
                            <ComfortSpace>{t('comfortSpace')}</ComfortSpace>
                            <ComfortSpaceSpan>$210</ComfortSpaceSpan>
                        </ComfortSpaceDiv>
                        <ToTown>{t('toTown')}</ToTown>
                        <IconsDiv>
                            <HiOutlineLocationMarker style={{color:'#B1B5C3',width:'22px',height:'27px'}}/>
                            <IconText>{t('topTour_location')}</IconText>
                        </IconsDiv>
                        <IconsDiv>
                            <FaHotel style={{color:'#B1B5C3'}}/>
                            <IconText>{t('rooms_Available')}</IconText>
                        </IconsDiv>
                        </ExploreCard> 
                    </SwiperSlide>
                    
                </Swiper>
            </Container>
        </TopTourSection>
    );
};

export default Exploring;