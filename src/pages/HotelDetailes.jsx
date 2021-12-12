
import HotelDetailesLeft from '../components/HotelDetailesLeft';
import { Container, HotelDetailesComponents, HotelDetailesSection, LinksDiv, Links, ActivedLink } from '../styled';
import { AiOutlineRight } from 'react-icons/ai';

const HotelDetailes = () => {
    return (
        <HotelDetailesSection>
            <HotelDetailesComponents>
                <LinksDiv>
                    <Links to={`/`}>Home</Links>
                    <AiOutlineRight style={{marginLeft: '7px', marginRight: '10px',width: '6px',height: '10px'}} />
                    <Links to={`/hotellist`}>Hotel List</Links>
                    <AiOutlineRight style={{marginLeft: '7px', marginRight: '10px',width: '6px',height: '10px'}} />
                    <ActivedLink to={`/hoteldetailes/:id`}>Hotel Detailes</ActivedLink>
                </LinksDiv>
                <HotelDetailesLeft />
            </HotelDetailesComponents>
        </HotelDetailesSection>
    );
};

export default HotelDetailes;