import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import { Container, PassionTitle, TopTourText, TopTourSection, SwiperSliderDiv, TopTourCards, TopTourCard, TopTourSpan, TopTourCityName, TTPopularPlaces, CityAndPPlaces } from '../styled'
import { useEffect, useState } from 'react';
import apiCalls from '../config/api';

const TopTour = () => {

    const [tour,setTour] = useState([]);
    const [error,setError] = useState('');

    useEffect(() => {
        apiCalls.getTours().then(data => {
            setTour(data);
        }).catch( error => {
            setError(error.message)
        })
    }, []);

    SwiperCore.use([Navigation]);

    const { t } = useTranslation();

    return (
        <TopTourSection>
            <Container>
                <SwiperSliderDiv>
                    <div>
                        <PassionTitle>{t('topTour_title')}</PassionTitle>
                        <TopTourText>{t('topTour_text')}</TopTourText>
                    </div>
                    <div>
                        <button type="button" className="my-swiper-button-prev" style={{ color: "#84878b", width: 38, height: 38, borderRadius: '50%', border: 'none', marginRight: '10px' }}><IoIosArrowBack /></button>
                        <button type="button" className="my-swiper-button-next" style={{ color: "#84878b", width: 38, height: 38, borderRadius: '50%', border: 'none'  }} ><IoIosArrowForward /></button>
                    </div>
                </SwiperSliderDiv>
                
                {!error && <Swiper
                    slidesPerView={3} spaceBetween={30}
                    modules={[Navigation]} navigation={{
                        nextEl: '.my-swiper-button-next',
                        prevEl: '.my-swiper-button-prev',
                    }} style={{ marginTop: '70px', paddingBottom: '50px' }}>

                    {tour.map(e => (
                        <SwiperSlide key={e.id}>
                        <TopTourCard>
                            <img style={{borderRadius: '16px'}} src={`assets/img/${e.photo}`} alt="" />
                            <TopTourSpan>{e.name}</TopTourSpan>
                            <CityAndPPlaces>
                                <TopTourCityName>{e.country}</TopTourCityName>
                                <TTPopularPlaces>{e.place_count} Popular Places</TTPopularPlaces>
                            </CityAndPPlaces>
                        </TopTourCard>
                    </SwiperSlide>
                    ))}

                </Swiper>}

                {error && <div>{error}</div>}


            </Container>
        </TopTourSection>
    );
};

export default TopTour;