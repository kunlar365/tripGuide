import HotelPaymentLeft from '../components/HotelPaymentLeft';
import { HotelDetailesSection, HotelDetailesContainer, HotelPaymentComponents } from '../styled';

const HotelPayment = () => {
    return(
        <section>
            <HotelDetailesSection>
                <HotelDetailesContainer>
                    <HotelPaymentComponents>
                        <HotelPaymentLeft/>
                    </HotelPaymentComponents>
                </HotelDetailesContainer>
            </HotelDetailesSection>
        </section>
    );
};

export default HotelPayment;