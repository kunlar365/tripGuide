import { Container, TrendingCitiesSection, TrendingCitiesTitle, TrendingCitiesText, TrendingCitiesCards, TrendingCitiesCard, CityInTradeImage, TrendingCityTexts, TrendCityName, TrendCityStar, TCStarCounts, TCStars, TCForNight, TCPay, Booking } from "../styled";
import { useTranslation } from 'react-i18next';

const TrendingCities = () => {

    const { t } = useTranslation();

    return(
        <TrendingCitiesSection>
            <Container>
            <TrendingCitiesTitle>{t('trendingCities_title')}</TrendingCitiesTitle>
            <TrendingCitiesText>{t('trendingCities_text')}</TrendingCitiesText>
            <TrendingCitiesCards>
                <TrendingCitiesCard>
                    <CityInTradeImage src="/assets/img/trendingCity.png"/>
                    <TrendingCityTexts>
                        <TrendCityName>{t('trendingCities_name1')}</TrendCityName>
                        <TrendCityStar>
                            <img src="/assets/img/star.svg"/>
                            <TCStars>4.91 <TCStarCounts>(147)</TCStarCounts> </TCStars>
                        </TrendCityStar>
                        <TCPay>$250.00<TCForNight>{t('forNight')}</TCForNight></TCPay>
                        <Booking type="button">{t('bookButton')}</Booking>
                    </TrendingCityTexts>
                </TrendingCitiesCard>
                <TrendingCitiesCard>
                    <CityInTradeImage src="/assets/img/trendingCity2.png"/>
                    <TrendingCityTexts>
                        <TrendCityName>{t('trendingCities_name2')}</TrendCityName>
                        <TrendCityStar>
                            <img src="/assets/img/star.svg"/>
                            <TCStars>4.91 <TCStarCounts>(147)</TCStarCounts> </TCStars>
                        </TrendCityStar>
                        <TCPay>$250.00<TCForNight>{t('forNight')}</TCForNight></TCPay>
                        <Booking type="button">{t('bookButton')}</Booking>
                    </TrendingCityTexts>
                </TrendingCitiesCard>
                <TrendingCitiesCard>
                    <CityInTradeImage src="/assets/img/trendingCity3.png"/>
                    <TrendingCityTexts>
                        <TrendCityName>{t('trendingCities_name3')}</TrendCityName>
                        <TrendCityStar>
                            <img src="/assets/img/star.svg"/>
                            <TCStars>4.91 <TCStarCounts>(147)</TCStarCounts> </TCStars>
                        </TrendCityStar>
                        <TCPay>$250.00<TCForNight>{t('forNight')}</TCForNight></TCPay>
                        <Booking type="button">{t('bookButton')}</Booking>
                    </TrendingCityTexts>
                </TrendingCitiesCard>
                <TrendingCitiesCard>
                    <CityInTradeImage src="/assets/img/trendingCity4.png"/>
                    <TrendingCityTexts>
                        <TrendCityName>{t('trendingCities_name4')}</TrendCityName>
                        <TrendCityStar>
                            <img src="/assets/img/star.svg"/>
                            <TCStars>4.91 <TCStarCounts>(147)</TCStarCounts> </TCStars>
                        </TrendCityStar>
                        <TCPay>$250.00<TCForNight>{t('forNight')}</TCForNight></TCPay>
                        <Booking type="button">{t('bookButton')}</Booking>
                    </TrendingCityTexts>
                </TrendingCitiesCard>
                <TrendingCitiesCard>
                    <CityInTradeImage src="/assets/img/trendingCity5.png"/>
                    <TrendingCityTexts>
                        <TrendCityName>{t('trendingCities_name5')}</TrendCityName>
                        <TrendCityStar>
                            <img src="/assets/img/star.svg"/>
                            <TCStars>4.91 <TCStarCounts>(147)</TCStarCounts> </TCStars>
                        </TrendCityStar>
                        <TCPay>$250.00<TCForNight>{t('forNight')}</TCForNight></TCPay>
                        <Booking type="button">{t('bookButton')}</Booking>
                    </TrendingCityTexts>
                </TrendingCitiesCard>
                <TrendingCitiesCard>
                    <CityInTradeImage src="/assets/img/trendingCity6.png"/>
                    <TrendingCityTexts>
                        <TrendCityName>{t('trendingCities_name6')}</TrendCityName>
                        <TrendCityStar>
                            <img src="/assets/img/star.svg"/>
                            <TCStars>4.91 <TCStarCounts>(147)</TCStarCounts> </TCStars>
                        </TrendCityStar>
                        <TCPay>$250.00<TCForNight>{t('forNight')}</TCForNight></TCPay>
                        <Booking type="button">{t('bookButton')}</Booking>
                    </TrendingCityTexts>
                </TrendingCitiesCard>
            </TrendingCitiesCards>
            </Container>
        </TrendingCitiesSection>
    );
};

export default TrendingCities;