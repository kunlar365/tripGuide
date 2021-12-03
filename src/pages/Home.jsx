import React from 'react';
import styled from "styled-components";
import Intro from "../components/Intro";
import BestPlace from "../components/BestPlace";
import TravelPassion from "../components/TravelPassion";
import TrendingCities from "../components/TrendingCities";
import FeaturedDestinations from "../components/FeaturedDestinations"
import TopTour from "../components/TopTour";
import Exploring from "../components/Exploring";

const Box = styled.div`
    width: 500px;
    height: 100px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.cardBg};
    padding: 10px 20px;
`;

const Home = () => {
    return (
        <div>
            <Intro/>
            <BestPlace/>
            <FeaturedDestinations/>
            <TopTour/>
            <Exploring/>
            <TrendingCities/>
            <TravelPassion/>
        </div>
    );
}

export default Home;
