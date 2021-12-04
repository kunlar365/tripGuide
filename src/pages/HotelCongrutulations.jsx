import Congrutulations from '../components/Conrutulations';
import { HotelDetailesSection, HotelDetailesContainer } from '../styled';

const HotelCongrutulations = () => {
    return (
        <section>
            <HotelDetailesSection>
                <HotelDetailesContainer>
                    <Congrutulations/>
                </HotelDetailesContainer>
            </HotelDetailesSection>
        </section>
    )
};

export default HotelCongrutulations;