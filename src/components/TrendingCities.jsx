import { Container, TrendingCitiesSection, TrendingCitiesTitle, TrendingCitiesText, TrendingCitiesCards, TrendingCitiesCard, CityInTradeImage, TrendingCityTexts, TrendCityName, TrendCityStar, TCStarCounts, TCStars, TCForNight, TCPay, Booking } from "../styled";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import apiCalls from '../config/api';

const TrendingCities = () => {

    const [cities,setCities] = useState([]);
    const [error,setError] = useState('');

    useEffect(() => {
        apiCalls.getCities().then(data => {
            setCities(data);
        }).catch( err => {
            setError(err.message)
        })
    }, []);

    const { t } = useTranslation();

    return(
        <TrendingCitiesSection>
            <Container>
            <TrendingCitiesTitle>{t('trendingCities_title')}</TrendingCitiesTitle>
            <TrendingCitiesText>{t('trendingCities_text')}</TrendingCitiesText>
            <TrendingCitiesCards>
                {cities.map(e => (
                    <TrendingCitiesCard key={e.id}>
                    <CityInTradeImage src={`assets/img/${e.photo}`}/>
                    <TrendingCityTexts>
                        <TrendCityName>{e.name}</TrendCityName>
                        <TrendCityStar>
                            <img src="/assets/img/star.svg"/>
                            <TCStars>{e.rating}</TCStars>
                        </TrendCityStar>
                        <TCPay>${e.price}<TCForNight>{t('forNight')}</TCForNight></TCPay>
                        <Booking type="button">{t('bookButton')}</Booking>
                    </TrendingCityTexts>
                </TrendingCitiesCard>
                ))}
            </TrendingCitiesCards>
            </Container>
        </TrendingCitiesSection>
    );
};

export default TrendingCities;