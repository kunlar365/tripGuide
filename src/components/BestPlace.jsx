import { BestPlaceSection, BestPlaceTitle, Container, BestPlaceText, BestPlaceWrapper, BestPlaceCard, BestPlaceImage, BestPlaceName, BestPlaceDestinations} from '../styled'
import { useTranslation } from 'react-i18next';

const BestPlace = () => {

    const { t } = useTranslation();
    
    return(
        <BestPlaceSection>
            <Container>
                <BestPlaceTitle>{t('bestPlace_title')}</BestPlaceTitle>
                <BestPlaceText>{t('bestPlace_text')}</BestPlaceText>

                <BestPlaceWrapper>   
                    <BestPlaceCard>
                        <BestPlaceImage src="/assets/img/bestPlace1.png" alt="bestPlace" />
                        <BestPlaceName>{t('bestPlaceName1')}</BestPlaceName>
                        <BestPlaceDestinations>{t('bestPlace_destinations')}</BestPlaceDestinations>
                    </BestPlaceCard>
                    <BestPlaceCard>
                        <BestPlaceImage src="/assets/img/bestPlace2.png" alt="bestPlace" />
                        <BestPlaceName>{t('bestPlaceName2')}</BestPlaceName>
                        <BestPlaceDestinations>{t('bestPlace_destinations')}</BestPlaceDestinations>
                    </BestPlaceCard>
                    <BestPlaceCard>
                        <BestPlaceImage src="/assets/img/bestPlace3.png" alt="bestPlace" />
                        <BestPlaceName>{t('bestPlaceName3')}</BestPlaceName>
                        <BestPlaceDestinations>{t('bestPlace_destinations')}</BestPlaceDestinations>
                    </BestPlaceCard>
                    <BestPlaceCard>
                        <BestPlaceImage src="/assets/img/bestPlace4.png" alt="bestPlace" />
                        <BestPlaceName>{t('bestPlaceName4')}</BestPlaceName>
                        <BestPlaceDestinations>{t('bestPlace_destinations')}</BestPlaceDestinations>
                    </BestPlaceCard>
                    <BestPlaceCard>
                        <BestPlaceImage src="/assets/img/bestPlace4.png" alt="bestPlace" />
                        <BestPlaceName>{t('bestPlaceName5')}</BestPlaceName>
                        <BestPlaceDestinations>{t('bestPlace_destinations')}</BestPlaceDestinations>
                    </BestPlaceCard>
                    <BestPlaceCard>
                        <BestPlaceImage src="/assets/img/bestPlace6.png" alt="bestPlace" />
                        <BestPlaceName>{t('bestPlaceName6')}</BestPlaceName>
                        <BestPlaceDestinations>{t('bestPlace_destinations')}</BestPlaceDestinations>
                    </BestPlaceCard>
                    <BestPlaceCard>
                        <BestPlaceImage src="/assets/img/bestPlace2.png" alt="bestPlace" />
                        <BestPlaceName>{t('bestPlaceName7')}</BestPlaceName>
                        <BestPlaceDestinations>{t('bestPlace_destinations')}</BestPlaceDestinations>
                    </BestPlaceCard>
                    <BestPlaceCard>
                        <BestPlaceImage src="/assets/img/bestPlace1.png" alt="bestPlace" />
                        <BestPlaceName>{t('bestPlaceName8')}</BestPlaceName>
                        <BestPlaceDestinations>{t('bestPlace_destinations')}</BestPlaceDestinations>
                    </BestPlaceCard>
                </BestPlaceWrapper>
            </Container>
        </BestPlaceSection>
    );
};

export default BestPlace;