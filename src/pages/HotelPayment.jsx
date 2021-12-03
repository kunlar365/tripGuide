import { HotelDetailesSection, HotelDetailesContainer, HotelDetailesComponents, Zuich, YourTour } from '../styled'

const HotelPayment = () => {
    return(
        <section>
            <HotelDetailesSection>
                <HotelDetailesContainer>
                    <HotelDetailesComponents>
                        <Zuich>Confirm your Book</Zuich>
                        <div>
                            <YourTour>Your Tour</YourTour>
                        </div>
                    </HotelDetailesComponents>
                </HotelDetailesContainer>
            </HotelDetailesSection>
        </section>
    );
};

export default HotelPayment;