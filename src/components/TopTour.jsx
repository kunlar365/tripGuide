import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { Container, PassionTitle, TopTourText, TopTourSection, TopTourCards, TopTourCard, TopTourSpan, TopTourCityName, TTPopularPlaces, CityAndPPlaces } from '../styled'

const TopTour = () => {

    const { t } = useTranslation();
    
    return(
        <TopTourSection>
            <Container>
                <PassionTitle>{t('topTour_title')}</PassionTitle>
                <TopTourText>{t('topTour_text')}</TopTourText>
                <Swiper slidesPerView="3" spaceBetween="30" style={{marginTop: '70px', paddingBottom: '50px'}}>
                    <SwiperSlide>
                        <TopTourCard>
                        <img src="/assets/img/TopTour.png" alt="" />
                        <TopTourSpan>{t('topTour_country1')}</TopTourSpan>
                        <CityAndPPlaces>
                            <TopTourCityName>{t('topTour_city1')}</TopTourCityName>
                            <TTPopularPlaces>{t('topTour_popularPlaces')}</TTPopularPlaces>
                        </CityAndPPlaces>
                        </TopTourCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopTourCard>
                        <img src="/assets/img/TopTour2.png" alt="" />
                        <TopTourSpan>{t('topTour_country2')}</TopTourSpan>
                        <CityAndPPlaces>
                            <TopTourCityName>{t('topTour_city2')}</TopTourCityName>
                            <TTPopularPlaces>{t('topTour_popularPlaces')}</TTPopularPlaces>
                        </CityAndPPlaces>
                        </TopTourCard>   
                    </SwiperSlide>
                    <SwiperSlide>
                        <TopTourCard>
                        <img src="/assets/img/TopTour3.png" alt="" />
                        <TopTourSpan>{t('topTour_country3')}</TopTourSpan>
                        <CityAndPPlaces>
                            <TopTourCityName>{t('topTour_city3')}</TopTourCityName>
                            <TTPopularPlaces>{t('topTour_popularPlaces')}</TTPopularPlaces>
                        </CityAndPPlaces>
                        </TopTourCard>
                    </SwiperSlide>
                    
                </Swiper>
            </Container>
        </TopTourSection>
    );
};

export default TopTour;