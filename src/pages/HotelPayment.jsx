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
                    <AiOutlineRight style={{marginLeft: '7px', marginRight: '10px',width: '6px',height: '10px'}}/>
                    <Links to={`/hotellist`}>Hotel List</Links>
                    <AiOutlineRight style={{marginLeft: '7px', marginRight: '10px',width: '6px',height: '10px'}} />
                    <Links to={`/hoteldetailes/:id`}>Hotel Detailes</Links>
                    <AiOutlineRight style={{marginLeft: '7px', marginRight: '10px',width: '6px',height: '10px'}} />
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