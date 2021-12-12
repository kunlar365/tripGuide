
import HotelDetailesLeft from '../components/HotelDetailesLeft';
import { Container, HotelDetailesComponents, HotelDetailesSection, LinksDiv, Links, ActivedLink } from '../styled';
import { AiOutlineRight } from 'react-icons/ai';

const HotelDetailes = () => {
    return (
        <HotelDetailesSection>
            <HotelDetailesComponents>
                <LinksDiv>
                    <Links to={`/`}>Home</Links>
                    <AiOutlineRight />
                    <Links to={`/hotellist`}>Hotel List</Links>
                    <AiOutlineRight />
                    <ActivedLink to={`/hoteldetailes/:id`}>Hotel Detailes</ActivedLink>
                </LinksDiv>
                <HotelDetailesLeft />
            </HotelDetailesComponents>
        </HotelDetailesSection>
    );
};

export default HotelDetailes;