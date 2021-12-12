import styled from "styled-components";
import { Link } from 'react-router-dom';

// export const Button = styled.button`
//     border: none;
//     border-radius: 8px;
//     background-color: ${(props) => props.theme.backgroundColor};
//     color: ${(props) => props.theme.color};
//     padding: 10px 20px;
//     font-size: ${(props) => props.theme.fontSize};
// `;

// export const Card = styled.div`
//     width: 200px;
//     height: 100px;
//     border-radius: 8px;
//     background-color: ${(props) => props.theme.cardBg};
//     padding: 10px 20px;
// `;

export const DarkTheme = {
    backgroundColor: '#141416',
    headerBg: '#222529',
    titleColor: '#f4f5f6',
    secondTitleColor: '#fff',
    secondTextColor: '#B1B5C3',
    thirdTextColor: '#B1B5C3',
    exploreCardTitle: '#FCFCFD',
    trendingCitiesTitle: '#FCFCFD',
    exploreText: '#B1B5C3',
    color: '#F4F5F6',
    cardBg: '#18191B',
    textColor: '#B1B5C3',
    footerBg: '#222529',
    hoverBg: '#222529',
    cardBorders: '#3B3E44',
    bestPlaceTitle: '#E7ECF3',
    bestPlaceText: '#777E90',
    boxShadow: '#222529',
    searchLocation: '#fff',
    searchingLocationDiv: '#222529',
    popularFilters: '#fff',
    hotelListSecBg: '#141416',
    popularFilterTexts: '#E7ECF3',
    seeMoreDiv: '1px solid #3b3e44',
    zuichColor: '#fff',
    zuichSpanColor: '#B1B5C3',
    hotelDetailesText: '#fcfcfd',
    priceButton: '#222529',
    hotelCardBorder: '#E7ECF3',
    detailesTitle: '#FCFCFD',
    detailesBorder: '#222529',
    detailesText: '#B1B5C3',
    detailesFeatures: '#E7ECF3',
    detailesIconText: '#B1B5C3',
    detailAsideBorder: '#3B3E44',
    offCost: '#FCFCFD',
    offCostText: '#fcfcfd',
    travelUi: '#e7ecf3',
    offCostBorder: '#3B3E44',
    checking: '#fcfcfd',
    checkingDiv: '#3B3E44',
    guestSelect: '#E7ECF3',
    hotelBooking: '#145CE6',
    greenSpanBg: '#3B3E44',
    greenSpanText: '#F4F5F6',
    yellowSpanBg: '#3B3E44',
    yellowSpanText: '#f4f5f6',
    blueSpanBg: '#3b3e44',
    blueSpanText: '#f4f5f6',
    pinkSpanBg: '#3b3e44',
    pinkSpanText: '#f4f5f6',
    orangeSpanBg: '#3b3e44',
    orangeSpanText: '#f4f5f6',
    buttonBg: '#3B3E44',
    yourTour: '#E7ECF3',
    yourTourBg: "#222529",
    creditCardBorder: "rgba(35, 38, 47, 0.4)",
    creditCardNumber: "#E7ECF3",
    cardNumberDiv: "#141416",
    cardNumberDivBorder: "#222529",
    saveCard: "#E7ECF3",
    checkIn: "#f4f5f6",
    freeSummery: "#e7ecf3",
    dateTitle: "#fcfcfd",
    reserveDetail: "#E7ECF3",
    reserveText: "#84878b",
    inpBg: "#3B3E44",
    inpBorder: "#4A4E54",
    btnColor: "#FCFCFD",
    rangeNumber: "#316BFF"
};

export const LightTheme = {
    backgroundColor: '#E5E5E5',
    headerBg: '#fff',
    titleColor: '#23262f',
    secondTitleColor: '#141416',
    secondTextColor: '#3b3e44',
    thirdTextColor: '#777e90',
    exploreCardTitle: '#3B3E44',
    trendingCitiesTitle: '#282832',
    exploreText: '#84878B',
    color: '#222529',
    cardBg: '#F5F5F5',
    textColor: '#3B3E44',
    footerBg: '#F4F5F6',
    hoverBg: '#FFFFFF',
    cardBorders: '#E7ECF3',
    bestPlaceTitle: '#3B3E44',
    bestPlaceText: '#84878B',
    boxShadow: '0px 20px 51px rgb(96 96 96 / 10%)',
    searchLocation: '#333333',
    searchingLocationDiv: '#FFFFFF',
    popularFilters: '#141416',
    hotelListSecBg: '#fafafb',
    popularFilterTexts: '#3B3E44',
    seeMoreDiv: '1px solid #E7ECF3' ,
    zuichColor: '#23262F',
    zuichSpanColor: '#84878B',
    hotelDetailesText: '#141416',
    priceButton: '#F4F5F6',
    hotelCardBorder: '#3B3E44',
    detailesTitle: '#252525',
    detailesBorder: '#E6E8EC',
    detailesText: '#353945',
    detailesFeatures: '#23262F',
    detailesIconText: '#4F4F4F',
    detailAsideBorder: '#EAEAEA',
    offCost: '#23262f',
    offCostText: '#84878b',
    travelUi: '#B1B5C3',
    offCostBorder: '#E6E8EC',
    checking: '#84878B',
    checkingDiv: '#f4f5f6',
    guestSelect: '#353945',
    hotelBooking: '#316BFF',
    greenSpanBg: 'rgba(56, 179, 69, 0.1)',
    greenSpanText: '#38B245',
    yellowSpanBg: 'rgba(253, 151, 4, 0.1)',
    yellowSpanText: '#FD9704',
    blueSpanBg: '#EAEEFA',
    blueSpanText: '#0B3BA7',
    pinkSpanBg: '#FCEBF1',
    pinkSpanText: '#E96594',
    orangeSpanBg: '#FBEEE8',
    orangeSpanText: '#DC6E3D',
    buttonBg: '#FFFFFF',
    yourTour: '#141416',
    yourTourBg: "#F4F4F6",
    creditCardBorder: "#E6E6E6",
    creditCardNumber: "#353945",
    cardNumberDiv: "#f4f5f6",
    cardNumberDivBorder: "#EAEAEA",
    saveCard: "#4f4f4f",
    checkIn: "#B1B5C3",
    freeSummery: "#84878B",
    dateTitle: "#353945",
    reserveDetail: "#777E90",
    reserveText: "#353945",
    inpBg: "#f4f5f7",
    inpBorder: "#E7E8EA",
    btnColor: "#3B3E44",
    rangeNumber: "#0A2541"
};

// ${(props) => props.theme.rangeNumber}

// Header

export const MainTitle = styled.a`
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    color: ${(props) => props.theme.color};
    margin: 0;
    text-decoration: none;
`;

export const Flags = styled.img`
    width: 28px;
    height: 28px;
`;
//, fontSize: '18px', fontWeight: '500',lineHeight: '23px', fontFamily: 'DM Sans'
export const Countries = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    font-family: 'DM Sans';
    display: inline-block;
    margin: 0 0 0 15px;
`;

export const Valut = styled.p`
    font-size: 18px;
    font-weight: 400;
    font-family: 'Roboto',sans-serif;
    line-height: 23px;
    display: inline-block;
`;

export const ProfileDetailes = styled.p`
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto',sans-serif;
    line-height: 18px;
    display: inline-block;
`;

export const HeaderModals = styled.div`
    display: flex;
    width: 266px;
    align-items: center;
    justify-content: space-between;
`;

export const LogosDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 148px;
`;

export const Headers = styled.header`
    padding: 20px 0;
    background-color: ${(props) => props.theme.headerBg};
`;

export const MainHeader =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

// Intro

export const IntroTitle = styled.h1`
    width: 487px;
    font-family: 'Poppins',sans-serif;
    font-weight: 700;
    font-size: 64px;
    line-height: 80px;
    color: #3B3E44;
    padding-top: 180px;
    padding-bottom: 100px;
`;

export const IntroSection = styled.section`
    background-image: url(/assets/img/intro.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100wh;
    height: 656px;
    position: relative;
`;

export const IntroFilterDiv = styled.div`
    background-color: ${(props) => props.theme.headerBg};
    height: 205px;
    border-radius: 20px;
    box-shadow: 0px 12px 60px rgb(89 89 89 / 10%);
    padding: 22px 30px;
    width: 1170px;
`;

export const SearchBtn = styled.button`
    background: #3B71FE;
    border-radius: 10px;
    padding: 22px 42px;
    font-size: 20px;
    margin-left: 35px;
    color: #FFFFFF;
    border: none;
`;

export const Passenger = styled.div`
    display: inline-block;
    position: relative;
    margin-left: 25px;
`;

export const Content = styled.div`
    display: none;
    position: absolute;
    width: 350px;
    top: -250px;
    left: 0;
    padding: 10px 30px;
    background: ${(props) => props.theme.headerBg};
    box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
    border-radius: 16px;
`;

export const Form = styled.form`
    margin-top: 15px;
`;

export const SearchCard = styled.div`
    width: 25%;
    position: relative;
    background: ${(props) => props.theme.inpBg};
    padding: 10px 20px;
    border: 1px solid ${(props) => props.theme.inpBorder};
    border-radius: 8px;
    &:nth-child(1) {
        width: 31%;
    }
`;

export const SearchRow = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid ${(props) => props.theme.cardBorders};
`

export const UserCount = styled.span`
    font-size: 14px;
    margin: 0 12px;
    color: #777e91;
`;

export const Sum = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0 10px;
    // &:nth-child(2) {
    //     border-top: 1px solid ${(props) => props.theme.bellAfter};
    //     border-bottom: 1px solid ${(props) => props.theme.bellAfter};
    // }
`;

export const ContentText = styled.span`
    display: block;
    margin-bottom:6px;
    font-weight: 500;
    color: black;
`;

export const ContentAge = styled.span`
    font-size: 14px;
    color: #B1B5C4;
`;

export const ContentBtn = styled.button`
    border: 1px solid #E6E8EC;
    padding: 10px;
    border-radius: 50%;
    font-size: 12px;
    background-color: transparent;
    color: #E6E8EC;
`;

export const SearchCardName = styled.label`
    display: block;
    margin: 0 0 6px;
    font-weight: 500;
    font-size: 18px;
    color: ${(props) => props.theme.btnColor};
`;

export const CheckInp = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0;
`;

// Best Place Section

export const BestPlaceSection = styled.section`
    text-align: center;
    padding-top: 150px;
    background-color: ${(props) => props.theme.backgroundColor};
`;

export const BestPlaceTitle = styled.h2`
    font-family: 'DM Sans',sans-serif;
    font-size: 48px;
    line-height: 70px;
    color: ${(props) => props.theme.titleColor};
    font-weight: 700;
`;

export const Container = styled.div`
    max-width: 1170px;
    margin: 0 auto;
`;

export const BestPlaceText = styled.p`
    width: 605px;
    margin: 0 auto;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #84878B;
    font-family: 'Poppins', sans-serif;
`;

export const BestPlaceWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 65px;
`;

export const BestPlaceCard = styled.div`
    width: 22%;
    padding: 25px 30px;
    border: 2px solid ${(props) => props.theme.cardBorders};
    border-radius: 10px;
    margin-bottom: 30px;
    text-align: start;
    transition: all 500ms ease-in-out;
    &:hover {
        background-color: ${(props) => props.theme.hoverBg};
        border: ${(props) => props.theme.hoverBg};
    }
`;

export const BestPlaceImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 10px;
`;

export const BestPlaceName = styled.h4`
    margin-top: 18px;
    font-size: 19px;
    line-height: 26px;
    font-weight: 700;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.bestPlaceTitle};
`;

export const BestPlaceDestinations = styled.p`
    margin-top: 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.bestPlaceText};
`;

// Featured Destinations

export const FeaturedSection = styled.section`
    background-color: ${(props) => props.theme.backgroundColor};
`;

export const FeaturedText = styled.p`
    color: ${(props) => props.theme.secondTextColor};
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;

export const FeaturedCityImage = styled.img`
    border-radius: 18px;
`;

export const FeaturedCityDiv = styled.div`
    position: relative;
    overflow: hidden;
    object-fit: cover;
    border-radius: 18px;
    margin-top: 30px;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            45deg, rgba(35, 35, 35, 0.58) 0%, rgba(196, 196, 196, 0) 100%);
        border-radius: 15px
    }
`;

export const FeaturedCityRating = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    padding: 2px 20px;
    margin: 20px;
    border-radius: 20px;
    color: #FF543D;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
`;

export const FeaturedCityTexts = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 15px;
    margin-left: 30px;
`;

export const TourCity = styled.h3`
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 24px;
`;

export const TCActivitiesDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

export const ActivitiImage = styled.img`
    border-radius: 50%;
`;

export const ActivitiNumbers = styled.h5`
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    margin: 0;
    margin-left: 11px;
`;

export const GridDiv = styled.div`
    display: grid;
    grid-gap: 30px;
`;

export const LittleTourCity = styled.h3`
    font-size: 18px;
    line-height: 20px;
    color: #fff;
    margin: 0 0 6px 0;
`;

export const LittleActivitiNumbers = styled.h5`
    font-size: 10px;
    line-height: 15px;
    color: #fff;
    margin: 0 0 0 7px;
`;

export const LittleTCActivitiesDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const LittleFeaturedCityRating = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    padding: 1px 15px;
    margin: 20px;
    border-radius: 14px;
    color: #FF543D;
    font-size: 13px;
    line-height: 17px;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
`;

export const MiddleTourCityTourCity = styled.h3`
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    color: #fff;
`;

export const MiddleActivitiNumbers = styled.h5`
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    font-family: 'DM Sans', sans-serif;
    color: #fff;
    margin: 0 0 0 8px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

// Top Tour

export const TopTourSection = styled.section`
    background-color: ${(props) => props.theme.backgroundColor};
    padding-top: 70px;
`;

export const SwiperSliderDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

// export const SwiperButtons = styled.button`
//     border-none;

// `;

export const TopTourText = styled.p`
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    color: ${(props) => props.theme.thirdTextColor};
`;

export const TopTourCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
`;

export const TopTourCard = styled.div`
    width: 33%;
    position: relative;
`;

export const TopTourSpan = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 30px;
    margin-left: 35px;
    background-color: rgba(20,20,22,0.2);
    color: #E9EBF3;
    padding: 12px 27px;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
`;

export const TopTourCityName = styled.h4`
    font-size: 34px;
    font-weight: 700;
    color: #FCFCFD;
    line-height: 44px;
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 8px;
    margin-left: 35px;
`;

export const TTPopularPlaces = styled.p`
    color: #FCFCFD;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-family: 'Poppins',sans-serif;
    margin-bottom: 35px;
    margin-left: 35px;
    width: 200px;
`;

export const CityAndPPlaces = styled.div`
    position: absolute;
    bottom: 0;
`;

// Explore 

export const ComfortSpace = styled.h5`
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    line-height: 26px;
    color: ${(props) => props.theme.exploreCardTitle};
    margin: 0;
`;

export const ComfortSpaceSpan = styled.span`
    background-color: rgba(49,107,255,0.2);
    color: #316BFF;
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    padding: 3px 10px;
    border-radius: 6px;
`;

export const ComfortSpaceDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 242px;
    margin-bottom: 10px
`;

export const ToTown = styled.p`
    color: ${(props) => props.theme.exploreText};
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif;
`;

export const ExploringImage = styled.img`
    border-radius: 16px;
    width: 100%;
    margin-bottom: 23px;
`;

export const IconsDiv = styled.div`
    display: flex;
    align-items: center;
    // justify-content: space-between;
`;

export const IconText = styled.h6`
    color: ${(props) => props.theme.exploreText};
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif;
    margin: 0 0 0 8px;
`;

export const ExploreCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

export const ExploreCard = styled.div`
    border: 1px solid ${(props) => props.theme.cardBorders};
    border-radius: 20px;
    background-color: ${(props) => props.theme.headerBg};
    padding: 14px 14px 23px 14px;
`;

// Trending Cities

export const TrendingCitiesSection = styled.section`
    text-align: center;
    background-color: ${(props) => props.theme.cardBg};
`;

export const TrendingCitiesTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    line-height: 70px;
    color: ${(props) => props.theme.color};
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 16px;
    padding-top: 59px;
`;

export const TrendingCitiesText = styled.p`
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
    font-family: 'DM Sans', sans-serif;
    color: ${(props) => props.theme.secondTextColor};
`;

export const TrendingCitiesCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 50px;
    padding-bottom: 60px;
`;

export const TrendingCitiesCard = styled.div`
    text-align: start;
    background-color: ${(props) => props.theme.headerBg};
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding: 24px;
    width: 49%;
    margin-bottom: 35px;
`;

export const CityInTradeImage = styled.img`
    border-radius: 20px;
`;

export const TrendingCityTexts = styled.div`
    margin-left: 30px;
`;

export const TrendCityName = styled.h4`
    font-size: 24px;
    line-height: 36px;
    font-family: 'DM Sans', sans-serif;
    color: ${(props) => props.theme.trendingCitiesTitle};
    margin: 0 0 10px 0;
`;

export const TrendCityStar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95px;
    margin-bottom: 15px;
`;

export const TCStarCounts = styled.span`
    color: grey;
`;

export const TCStars = styled.p`
    margin: 0;
    color: ${(props) => props.theme.exploreCardTitle};
`;

export const TCPay = styled.h3`
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    line-height: 18px;
    margin: 0;
    color: ${(props) => props.theme.trendingCitiesTitle};
`;

export const TCForNight = styled.span`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: grey;
`;

export const Booking = styled.button`
    background-color: #316BFF;
    border: 1px solid #316BFF;
    border-radius: 6px;
    padding: 7px 16px;
    color: #fff;
    margin-top: 24px;
`;

// Travel Passion Title

export const PassionSection = styled.section`
    background-color: ${(props) => props.theme.backgroundColor};
    padding-bottom: 215px;
    padding-top: 70px;
`;

export const LinkToHome = styled(Link)`
    text-decoration: none;
`;

export const PassionTitle = styled.h2`
    font-weight: 700;
    font-size: 48px;
    line-height: 70px;
    color: ${(props) => props.theme.secondTitleColor};
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 12px;
`;

export const TravelPassionText = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #84878B;
    font-family: 'Poppins', sans-serif;
`;

export const TravelPassionCard = styled.div`
    width: 270px;
    border-radius: 15px;
    position: relative;
    height: 323px;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, rgba(35, 35, 35, 0) 0%, rgba(31, 31, 31, 0.8) 100%);
        border-radius: 15px
    }
`;

export const TravelPassionCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 42px;
`;

export const TravelPassionImage = styled.img`
    border-radius: 15px;
`;

export const TravelPassionCardTexts = styled.div`
    position: absolute;
    bottom: 0;
    padding-left: 30px;
    padding-bottom: 18px;
`;

export const TPCardTitle = styled.h3`
    color: #fff;
    font-family: 'Poppins',sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px; 
`;

export const TPCardText = styled.p`
    color: #fff;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    font-family: 'DM Sans', sans-serif;
    margin: 0;
`;

export const TPReview = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 135px;
`;

// Top Footer 

export const TopFooterSection = styled.section`
    background-image: url(/assets/img/topFooter.jpg);
    width: 1170px;
    height: 248px;
    border-radius: 16px;
    padding: 62px 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: -277px;
    margin-bottom: 100px;
`;

export const GetOurOffers = styled.h3`
    color: #fff;
    font-size: 44px;
    line-height: 52px;
    font-weight: 800;
    font-family: 'Gilroy', sans-serif;
    letter-spacing: -0.5px;
    margin-bottom: 16px;
`;

export const GetOurOffersText = styled.p`
    color: #fff;
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    opacity: 88%;
    width: 370px;
`;

export const EmailInput = styled.input`
    background-color: transparent;
    border: none;
`;

export const EmailDiv = styled.div`
    background-color: #fff;
    padding: 8px 8px 8px 22px;
    border-radius: 4px;
    width: 475px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const EmailButton = styled.button`
    background-color: #353945;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    font-family: 'Roboto', sans-serif;
    padding: 18px 30px;
    border-radius: 4px;
    border: none;
`;

// Footer

export const FooterComponent = styled.footer`
    background-color: ${(props) => props.theme.footerBg};
    padding: 150px 0;
`;

export const FooterDivs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FooterText = styled.p`
    color: #84878B;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    width: 254px;
    font-family: 'DM Sans', sans-serif;
    margin-top: 20px;
    width: 254px;
`;

export const FooterTitle = styled.h4`
    color: ${(props) => props.theme.color};
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 18px;
`;

export const FooterList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const FooterListTexts = styled.li`
    color: #84878B;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 16px;
`;

// Hotel List Page

export const HotelListComponents = styled.div`
    display: flex;
    width: 1380px;
    margin: 0 auto;
    padding-top: 70px;
`;

export const HotelListSection = styled.section`
    background-color: ${(props) => props.theme.hotelListSecBg};
    padding-top: 185px;
    padding-bottom: 200px;
`;

export const HotelDetailesSection = styled.section`
    background-color: ${(props) => props.theme.hotelListSecBg};
    padding-bottom: 200px;
`;

export const SearchLocation = styled.h3`
    font-weight: 500px;
    font-size: 18px;
    line-height: 23px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.searchLocation};
    margin-bottom: 13px;
`;

export const SearchingLocationInput = styled.input`
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: #B1B5C3;
    line-height: 24px;
    font-weight: 400;
    font-family: 'DM Sans',sans-serif;
    width: 219px;
`;

export const SearchingLocationDiv = styled.div`
    padding: 16px 18px 16px 20px;
    background-color: ${(props) => props.theme.searchingLocationDiv};
    border-radius: 10px;
    width: 290px;
`;

export const PopularFilters = styled.h2`
    font-size: 18px;
    line-height: 23px;
    font-weight: 500;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.popularFilters};
    margin-top: 30px;
    margin-bottom: 13px;
`;

export const PopularFilterTexts = styled.h6`
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.popularFilterTexts};
    margin: 0;
`;

export const PopularFiltersCheckboxDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 14px;
`;

export const AsideComponent = styled.aside`
    width: 290px;
    margin-right: 50px;
`;

export const SeeMoreLink = styled.a`
    color: #145CE6;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-decoration: none;
`;

export const CheckboxsDiv =styled.div`
    margin-bottom: 15px;
`;

export const SeeMoreDiv = styled.div`
    border-bottom: ${(props) => props.theme.seeMoreDiv};
    padding-bottom: 17px;
`;

export const PropertyTypeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    margin-bottom: 15px;
`;

export const PropertyDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
`;

export const NumbersText = styled.p`
    margin: 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    font-family: 'DM Sans',sans-serif;
    color: #84878B;
`;

export const YourBudgetDiv = styled.div`
    border-bottom: ${(props) => props.theme.seeMoreDiv};
    padding-bottom: 17px;
`;

export const Tower = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const HotelCard = styled.div`
    display: flex;
    border-radius: 20px;
    border: 1px solid ${(props) => props.theme.hotelCardBorder};
    width: 970px;
    margin-bottom: 50px;
`;

export const HotelDetailesText = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    font-family: 'DM Sans',sans-serif;
    line-height: 24px;
    color: ${(props) => props.theme.hotelDetailesText};
    margin-left: 12px;
`;

export const Zuich = styled.h2`
    font-size: 40px;
    font-weight: 700;
    font-family: 'DM Sans',sans-serif;
    line-height: 60px;
    color: ${(props) => props.theme.zuichColor};
    margin-bottom: 22px;
`;

export const ZuichReviews = styled.span`
    font-size: 14px;
    font-weight: 400;
    font-family: 'DM Sans',sans-serif;
    line-height: 18px;
    color: ${(props) => props.theme.zuichSpanColor};
`;

export const HotelDetailesDiv = styled.div`
    margin-top: 50px;
`;

export const BookingButtons = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
`;

export const LinkToDetailes = styled(Link) `
    display: block;
    text-decoration: none;
    background-color: #3B71FE;
    border: 1px solid #3B71FE;
    border-radius: 23px;
    padding: 10px 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    font-family: 'DM Sans',sans-serif;
    line-height: 26px;
    margin-top: 20px;
`

export const BookingButton = styled.button`
    display: block;
    background-color: #3B71FE;
    border: 1px solid #3B71FE;
    border-radius: 23px;
    padding: 10px 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    font-family: 'DM Sans',sans-serif;
    line-height: 26px;
    margin-top: 20px;
`;

export const PriceButton = styled.button`
    background-color: ${(props) => props.theme.priceButton};
    border-radius: 37px;
    border: none;
    padding: 4px 19px;
    font-size: 28px;
    font-weight: 700;
    font-family: 'DM Sans',sans-serif;
    line-height: 41px;
    color: ${(props) => props.theme.zuichColor};
`;
export const PriceButtonSpan = styled.span `
    font-size: 16px;
    font-weight: 500;
    font-family: 'DM Sans',sans-serif;
    line-height: 24px;
    color: ${(props) => props.theme.zuichSpanColor};
`;

export const Hotel = styled.div`
    padding: 30px;
    width: 100%;
`;

export const ZuichImage = styled.img`
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`; 

export const LoadMoreButtonDiv = styled.div`
    margin: 0 auto;
    width: 180px;
`;

export const LoadMoreButton = styled.button`
    border-radius: 47px;
    padding: 12px 40px;
    background-color: transparent;
    border: 1px solid #B1B5C3;
    font-size: 16px;
    font-weight: 500;
    font-family: 'DM Sans',sans-serif;
    line-height: 24px;
    color: ${(props) => props.theme.popularFilters};
`;

// Hotel Detailes Page

export const DetailesTitle = styled.h1`
    font-size: 48px;
    font-weight: 700;
    line-height: 70px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.detailesTitle};
`;

export const DetailesImagesDiv = styled.div`
    border-radius: 20px;
`;

export const DetailesImage = styled.img`
    width: 100%;
    border-radius: 20px;
`;

export const GreenSpan = styled.span`
    color: ${(props) => props.theme.greenSpanText};
    background-color: ${(props) => props.theme.greenSpanBg};
    padding: 2.5px 5.5px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif;
`;

export const YellowSpan = styled.span`
    color: ${(props) => props.theme.yellowSpanText};
    background-color: ${(props) => props.theme.yellowSpanBg};
    padding: 2.5px 8.5px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif;
`;

export const BlueSpan = styled.span`
    color: ${(props) => props.theme.blueSpanText};
    background-color: ${(props) => props.theme.blueSpanBg};
    padding: 2.5px 15.5px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif;
`;

export const PinkSpan = styled.span`
    color: ${(props) => props.theme.pinkSpanText};
    background-color: ${(props) => props.theme.pinkSpanBg};
    padding: 2.5px 20px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif;
`;

export const OrangeSpan = styled.span`
    color: ${(props) => props.theme.orangeSpanText};
    background-color: ${(props) => props.theme.orangeSpanBg};
    padding: 2.5px 18px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif;
`;

export const Spans = styled.div`
    width: 589px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DetailesZuich = styled.h4`
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.bestPlaceText};
`;

export const ZuichDiv = styled.div`
    border-bottom: 1px solid ${(props) => props.theme.detailesBorder};
    width: 100%;
    padding-bottom: 31px;
    margin-bottom: 20px;
`;

export const DetailesText = styled.p`
    color: ${(props) => props.theme.detailesText};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    font-family: 'DM Sans',sans-serif;
    width: 743px;
    margin-top: 20px;
`;

export const RangeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const RangeNumber = styled.input`
    border: 2px solid #316BFF;
    border-radius: 9px;
    font-size: 18px;
    line-height: 18px;
    font-weight: 400;
    font-family: 'Roboto',sans-serif;
    color: ${(props) => props.theme.rangeNumber};
    width: 60px;
    padding: 7px 10px;
    background: transparent;
`;

export const DetailesFeatures = styled.h4`
    color: ${(props) => props.theme.detailesFeatures};
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    font-family: 'DM Sans',sans-serif;
    margin-bottom: 25px;
`;

export const DetailesIconDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
`;

export const DetailesIconText = styled.h6`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.detailesIconText};
    margin: 0;
`;

export const DetailesFeaturesDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 650px;
    border-bottom: 1px solid ${(props) => props.theme.detailesBorder};
    padding-bottom: 62px;
    margin-bottom: 60px;
`;

export const DetailesIconsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 525px;
    margin-bottom: 50px;
`;

export const MoreDetailes = styled.button`
    background-color: #3B71FE;
    color: #fff;
    border-radius: 47px;
    padding: 10px 31px;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    border: none;
    font-family: 'DM Sans',sans-serif;
`;

// Hotel Detailes Aside

export const HotelDetaileAside = styled.div`
    border: 1px solid ${(props) => props.theme.detailAsideBorder};
`;

export const HotelDetailesComponents = styled.div`
    display: flex;
    width: 1240px;
    margin: 0 auto;
    padding-top: 70px;
`;

export const HotelPaymentComponents = styled.div`
    width: 1240px;
    margin: 0 auto;
    padding-top: 70px;
`;

export const HotelDetailesContainer = styled.div`
    width: 1240px;
    margin: 0 auto;
`;

export const OffCost = styled.h2`
    font-size: 34px;
    font-weight: 700;
    line-height: 44px;
    font-family: 'DM Sans',sans-serif;
    margin-right: 10px;
    color: ${(props) => props.theme.offCost};
`;

export const OffCostText = styled.span`
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    font-family: 'Roboto',sans-serif;
    color: ${(props) => props.theme.offCostText};
`;

export const TravelUi = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.travelUi};  
    margin: 0;
`;

export const OffCostSpan = styled.span`
    background-color: #145CE6;
    color: #fff;
    padding: 6px 10px;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    font-family: 'DM Sans',sans-serif;
    margin-left: 56px;
`;

export const OffCostDiv = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.offCostBorder};
    padding-bottom: 17px;
`;

export const Checking = styled.p`
    font-size: 16px;
    font-family: 'DM Sans',sans-serif;
    line-height: 24px;
    font-weight: 500;
    margin: 20px 0 17px 0;
    color: ${(props) => props.theme.checking};
`;

export const CheckingDivs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CheckingDiv = styled.div`
    padding: 12px 28px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.checkingDiv};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DateInput = styled.input`
    background-color: transparent;
    width: 100%;
    border: none;
`;

export const GuestSelect = styled.select`
    appearance: none;
    font-size: 14px;
    font-family: 'DM Sans',sans-serif;
    line-height: 21px;
    font-weight: 400;
    color: ${(props) => props.theme.guestSelect};
    background-color: transparent;
    border: none;
    width: 100%;
`;

export const GuestSelectDiv = styled.div`
    padding: 11px 14px;
    background-color: ${(props) => props.theme.checkingDiv};
    border-radius: 10px;
`;

export const PriceDiv = styled.div`
    padding: 15px 22px 5px 22px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.checkingDiv};
`;

export const HotelBooking = styled.button`
    background-color: ${(props) => props.theme.hotelBooking};
    padding: 11px 110px;
    font-size: 20px;
    font-family: 'DM Sans',sans-serif;
    line-height: 26px;
    font-weight: 700;
    width: 100%;
    color: #fff;
    border-radius: 12px;
    border: none;
`;

export const HotelDetailAside = styled.div`
    border-radius: 20px;
    padding: 20px 40px;
    background-color: ${(props) => props.theme.headerBg};
    border: 1px solid ${(props) => props.theme.detailAsideBorder};
    width: 408px;
    margin-top: 90px;
`;

export const TwoSelectDivs = styled.div`
    width: 49%;
`;

export const Towers = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    width: 360px;
`;

export const NotCharged = styled.p`
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif;
    font-weight: 400;
    color: #777E90;
    margin-top: 12px;
`;

export const ButtonDiv = styled.div`
    width: 128px;
    height: 38px;
    padding: 9px 25px;
`;

export const LightButton = styled.button`
    background-color: ${(props) => props.theme.buttonBg};
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 50%;
`;

export const DarkButton = styled.button`
    background-color: ${(props) => props.theme.buttonBg};
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 50%;
`;

// Hotel Payment Page

export const YourTour = styled.h2`
    font-size: 34px;
    line-height: 44px;
    font-family: 'DM Sans',sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme.yourTour};
    margin-bottom: 30px;
    margin-top: 40px;
`;

export const DateTitle = styled.h6`
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: ${(props) => props.theme.hotelDetailesText};
    font-family: 'DM Sans',sans-serif;
    margin-bottom: 1px;
`;

export const DateText = styled.p`
    color: ${(props) => props.theme.bestPlaceText};
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    font-family: 'Roboto',sans-serif;
    margin: 0;
`;

export const DateDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 470px;
    background-color: ${(props) => props.theme.yourTourBg};
    padding: 8px 20px;
    border-radius: 15px;
    margin-bottom: 20px;
`;

export const CreditCardsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 416px;
`;

export const CreditCardDiv = styled.div`
    padding: 10px 12px;
    background-color: ${(props) => props.theme.headerBg};
    border: 1px solid ${(props) => props.theme.creditCardBorder};
    border-radius: 6px;
    width: 96px;
    text-align: center;
`;

export const HolderName = styled.h3`
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    font-family: 'DM Sans',sans-serif;
    color: #3D4852;
`;

export const HolderTitle = styled.h3`
    font-size: 16px;
    line-height: 30px;
    font-weight: 500;
    font-family: 'DM Sans',sans-serif;
    color: #3D4852;
    margin-top: 25px;
`;

export const HolderNameDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CreditCard = styled.div`
    background-color: #CED9FD;
    padding: 27px 26px;
    border-radius: 20px;
    width: 335px;
`;

export const CreditCardSecond = styled.div`
    background-color: #BDDBA6;
    padding: 27px 26px;
    border-radius: 20px;
    width: 335px;
`;

export const CreditCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 690px;
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const CardNumber = styled.h3`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.creditCardNumber};
    margin-bottom: 12px;
    margin-top: 19px;
`;

export const CardNumberInputDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.cardNumberDiv};
    border: 2px solid ${(props) => props.theme.cardNumberDivBorder};
    border-radius: 10px;
    width: 471px;
    padding: 13px 20px;
`;

export const CardNumberInput = styled.input`
    border: none;
    background: transparent;
    width: 100%;
`;

export const CardExpiryDiv = styled.div`
    background-color: ${(props) => props.theme.cardNumberDiv};
    border: 2px solid ${(props) => props.theme.cardNumberDivBorder};
    border-radius: 10px;
    padding: 13px 20px;
`;

export const CardsExpiryDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 471px;
`;

export const SaveCardDiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 21px;
`;

export const SaveCardText = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 27px;
    font-family: 'Roboto',sans-serif;
    color: ${(props) => props.theme.saveCard};
    margin: 0 0 0 12px;
`;

export const ConfirmAndBook = styled.button`
    background-color: #3B71FE;
    color: #fff;
    border-radius: 36px;
    padding: 11px 20px;
    border: none;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Roboto',sans-serif;
    line-height: 27px;
    margin-top: 35px;
`;

export const AsideReviews = styled.div`
    display: flex;
    align-items: center;
    margin-top: 14px;
`;

export const AsideTitle = styled.h3`
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    font-family: 'DM Sans', sans-serif;
    color: ${(props) => props.theme.hotelDetailesText};
`;

export const BedroomPrivateRoom = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.offCostText};
`;

export const CheckIn = styled.p`
    color: ${(props) => props.theme.checkIn};
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif;
    margin-bottom: 2px;
`;

export const Date = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.bestPlaceText};
`;

export const CheckInDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BookedDetailes = styled.h3`
    color: ${(props) => props.theme.searchLocation};
    font-size: 26px;
    font-weight: 500;
    line-height: 27px;
    font-family: 'Roboto',sans-serif;
    margin-bottom: 20px;
`;

export const Nigths5 = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.freeSummery};
    margin: 0;
`;

export const CostForNight = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.guestSelect};
    margin: 0;
`;

export const CostForNightDiv = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
`;

export const HotelPaymentAsideDiv = styled.div`
    background-color: ${(props) => props.theme.headerBg};
    padding: 36px 35px;
    border-radius: 20px;
    border: 2px solid ${(props) => props.theme.cardBorders};
    width: 445px;
`;

export const Total = styled.div`
    background-color: ${(props) => props.theme.checkingDiv};
    padding: 7px 12px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const AsideImg = styled.img`
    border-radius: 10px;
    margin-top: 26px;
    margin-bottom: 32px;
`;

export const ReportText = styled.p`
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif;
    color: #B1B5C3;
    margin-top: 30px;
    margin-bottom: 0;
`;

export const HotelPaymentDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HotelPaymentLeftDiv = styled.div`
    width: 690px;
`;

export const CongrutulationsTitle = styled.h3`
    font-size: 25px;
    font-weight: 700;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.secondTextColor};
    margin-bottom: 20px;
`;

export const YourTrip = styled.h1`
    font-size: 48px;
    font-weight: 500;
    line-height: 60px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.exploreCardTitle};
`;

export const SwitzerlandHotels = styled.h2`
    font-size: 34px;
    font-weight: 700;
    line-height: 44px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.titleColor};
    margin-top: 37px;
`;

export const Baggoge = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 380px;
`;

export const BaggogeText = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.detailesText};
    margin: 14px 0 0 0;
`;

export const DatesTitle = styled.h6`
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    font-family: 'DM Sans',sans-serif; 
    color: ${(props) => props.theme.dateTitle};
    margin-bottom: 1px;
`;

export const DatesText = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    font-family: 'DM Sans',sans-serif; 
    color: #84878B;
    margin: 0;
`;

export const DatesDiv = styled.div`
    background-color: ${(props) => props.theme.yourTourBg};
    padding: 7px 20px;
    width: 49%;
    border-radius: 12px;
`;

export const DatesDivs = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
    width: 368px;
`;

export const ReserveDiv = styled.div`
    background-color: ${(props) => props.theme.yourTourBg};
    padding: 19px 25px;
    border-radius: 10px;
    width: 380px;
    margin-top: 30px;
`;

export const ReserveTitle = styled.h3`
    font-size: 28px;
    font-weight: 700;
    line-height: 41px;
    font-family: 'DM Sans',sans-serif; 
    color: ${(props) => props.theme.offCost};
    margin-bottom: 24px;
`;

export const ReserveDetailes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 22px;
`;

export const ReserveDetailText = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    font-family: 'DM Sans',sans-serif; 
    color: ${(props) => props.theme.reserveDetail};
    margin: 0;
`;

export const ReserveDetailTitle = styled.h6`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    font-family: 'DM Sans',sans-serif;
    color: ${(props) => props.theme.reserveText};
    margin: 0;
`;

export const BookingCode = styled.div`
    display: flex;
    align-items: center;
`;

export const GoToYour = styled.button`
    background-color: #3B71FE;
    border-radius: 34px;
    padding: 13.5px 35.5px;
    border: none;
    font-size: 16px;
    color: #fff;
    font-weight: 700;
    line-height: 20px;
    fontt-family: 'DM Sans',sans-serif;
    margin-top: 43px;
`;

export const CongrutulationsPage = styled.div`
    padding-top: 100px;
`;

export const CongrutulationsMainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const CongrutulationsImg = styled.img`
    border-radius: 20px;
    margin-top: -90px;
`;

export const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Reservation = styled.span`
position: relative;
margin-right: 30px; 
color: #84878B;
&.react-tabs__tab--selected {
    color: ${(props) => props.theme.btnColor};
}
`

// 5 200 000

// 1 076 000