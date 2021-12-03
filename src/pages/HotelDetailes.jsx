
import HotelDetailesLeft from '../components/HotelDetailesLeft';
import { Container, HotelDetailesComponents, HotelDetailesSection } from '../styled'

const HotelDetailes = () => {
    return (
        <HotelDetailesSection>
                <HotelDetailesComponents>
                    <HotelDetailesLeft />
                </HotelDetailesComponents>
        </HotelDetailesSection>
    );
};

export default HotelDetailes;