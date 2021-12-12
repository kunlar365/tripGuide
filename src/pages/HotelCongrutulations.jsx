import Congrutulations from '../components/Conrutulations';
import { HotelDetailesSection, HotelDetailesContainer, LinksDiv, Links, ActivedLink } from '../styled';
import { AiOutlineRight } from 'react-icons/ai';

const HotelCongrutulations = () => {
    return (
        <section>
            <HotelDetailesSection>
                <HotelDetailesContainer>
                <LinksDiv>
                    <Links to={`/`}>Home</Links>
                    <AiOutlineRight style={{marginLeft: '7px', marginRight: '10px',width: '6px',height: '10px'}} />
                    <Links to={`/hotellist`}>Hotel List</Links>
                    <AiOutlineRight style={{marginLeft: '7px', marginRight: '10px',width: '6px',height: '10px'}} />
                    <Links to={`/hoteldetailes/:id`}>Hotel Detailes</Links>
                    <AiOutlineRight style={{marginLeft: '7px', marginRight: '10px',width: '6px',height: '10px'}} />
                    <Links to={`/hotelpayment`}>Confirm and pay</Links>
                    <AiOutlineRight style={{marginLeft: '7px', marginRight: '10px',width: '6px',height: '10px'}} />
                    <ActivedLink to={`/hotelcongrutulations`}>Congratulations</ActivedLink>
                </LinksDiv>
                    <Congrutulations/>
                </HotelDetailesContainer>
            </HotelDetailesSection>
        </section>
    )
};

export default HotelCongrutulations;