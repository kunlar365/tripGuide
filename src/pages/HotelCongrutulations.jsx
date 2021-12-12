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
                    <AiOutlineRight />
                    <Links to={`/hotellist`}>Hotel List</Links>
                    <AiOutlineRight />
                    <Links to={`/hoteldetailes/:id`}>Hotel Detailes</Links>
                    <AiOutlineRight />
                    <Links to={`/hotelpayment`}>Confirm and pay</Links>
                    <AiOutlineRight />
                    <ActivedLink to={`/hotelcongrutulations`}>Congratulations</ActivedLink>
                </LinksDiv>
                    <Congrutulations/>
                </HotelDetailesContainer>
            </HotelDetailesSection>
        </section>
    )
};

export default HotelCongrutulations;