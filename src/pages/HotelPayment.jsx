import HotelPaymentLeft from '../components/HotelPaymentLeft';
import { HotelDetailesSection, HotelDetailesContainer, HotelPaymentComponents, LinksDiv, Links, ActivedLink } from '../styled';
import { AiOutlineRight } from 'react-icons/ai';

const HotelPayment = () => {
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
                    <ActivedLink to={`/hotelpayment`}>Confirm and pay</ActivedLink>
                </LinksDiv>
                    <HotelPaymentComponents>
                        <HotelPaymentLeft />
                    </HotelPaymentComponents>
                </HotelDetailesContainer>
            </HotelDetailesSection>
        </section>
    );
};

export default HotelPayment;