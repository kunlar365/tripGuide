import { Container, PassionTitle, TopTourSection, SwiperSliderDiv, ExploreCard, TopTourText, TrendCityStar, TCStars, TCStarCounts, ComfortSpaceSpan, ComfortSpace, ComfortSpaceDiv, ToTown, ExploringImage, IconsDiv, IconText } from '../styled';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaHotel } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useEffect, useState } from 'react';
import apiCalls from '../config/api';
import { IoIosArrowBack } from 'react-icons/io';
import Loader from './Loader';
import { IoIosArrowForward } from 'react-icons/io';
import { useTranslation } from 'react-i18next';

const Exploring = () => {

    const [explore, setExplore] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            apiCalls.getExplore().then(data => {
                setExplore(data);
                setIsLoading(false);
            }).catch(error => {
                setError(error.message)
            })
        }, 2000)
    }, []);

    SwiperCore.use([Navigation]);

    const { t } = useTranslation();

    const content = isLoading ? <Loader/> :
        explore.map(e => (
            <SwiperSlide key={e.id}>
                <ExploreCard>
                    <ExploringImage src={`assets/img/${e.image}`} alt="" />
                    <TrendCityStar>
                        <img src="/assets/img/star.svg" alt="star" />
                        <TCStars>{e.rating}</TCStars>
                    </TrendCityStar>
                    <ComfortSpaceDiv>
                        <ComfortSpace>{e.title}</ComfortSpace>
                        <ComfortSpaceSpan>${e.price}</ComfortSpaceSpan>
                    </ComfortSpaceDiv>
                    <ToTown>{e.radius} to Town Center</ToTown>
                    <IconsDiv>
                        <HiOutlineLocationMarker style={{ color: '#B1B5C3', width: '22px', height: '27px' }} />
                        <IconText>{e.location}</IconText>
                    </IconsDiv>
                    <IconsDiv>
                        <FaHotel style={{ color: '#B1B5C3' }} />
                        <IconText>Rooms available: {e.rooms}</IconText>
                    </IconsDiv>
                </ExploreCard>
            </SwiperSlide>
        ))

    return (
        <TopTourSection>
            <Container>
                <SwiperSliderDiv>
                    <div>
                        <PassionTitle>{t('exploreWorld_title')}</PassionTitle>
                        <TopTourText>{t('exploreWorld_text')}</TopTourText>
                    </div>
                    <div>
                        <button type="button" className="my-button-prev" style={{ color: "#84878b", width: 38, height: 38, borderRadius: '50%', border: 'none', marginRight: '10px' }}><IoIosArrowBack /></button>
                        <button type="button" className="my-button-next" style={{ color: "#84878b", width: 38, height: 38, borderRadius: '50%', border: 'none' }} ><IoIosArrowForward /></button>
                    </div>

                </SwiperSliderDiv>
                {!error && <Swiper
                    slidesPerView={4} spaceBetween={30}
                    modules={[Navigation]} navigation={{
                        nextEl: '.my-button-next',
                        prevEl: '.my-button-prev',
                    }} style={{ marginTop: '70px', paddingBottom: '50px' }}>

                    {content}

                </Swiper>}


                {error && <div>{error}</div>}

            </Container>
        </TopTourSection>
    );
};

export default Exploring;