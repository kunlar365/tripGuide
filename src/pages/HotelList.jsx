import Aside from "../components/Aside";
import Header from "../components/Header";
import HotelListCards from "../components/HotelListCards";
import { Container, IntroFilterDiv, HotelListSection, HotelListComponents } from "../styled";

const HotelList = () => {
    return (
        <HotelListSection>
            <Container>
                <IntroFilterDiv>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magni labore eaque praesentium? Odit cum facere dolorum! Maiores, eveniet alias nam placeat consectetur quod at non excepturi iure quia aut!</IntroFilterDiv>
            </Container>
            <HotelListComponents>
                <Aside/>
                <HotelListCards/>
            </HotelListComponents>
        </HotelListSection>
    )
}

export default HotelList;