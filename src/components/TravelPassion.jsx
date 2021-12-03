import { Container, PassionSection, PassionTitle, TravelPassionText, TravelPassionCard, TravelPassionCards, TravelPassionImage, TravelPassionCardTexts, TPCardTitle, TPCardText, TPReview } from "../styled";
import { useTranslation } from 'react-i18next';

const TravelPassion = () => {

    const { t } = useTranslation();

    return (
        <PassionSection>
            <Container>
                <PassionTitle>{t('passion_title')}</PassionTitle>
                <TravelPassionText>{t('passion_text')}</TravelPassionText>
                <TravelPassionCards>
                    <TravelPassionCard>
                        <TravelPassionImage src="/assets/img/passion1.png" />
                        <TravelPassionCardTexts>
                            <TPCardTitle>{t('passionCard_title1')}</TPCardTitle>
                            <TPReview>
                                <img src="/assets/img/star.svg" />
                                <TPCardText>4.8 {t('passionReviews')}</TPCardText>
                            </TPReview>
                        </TravelPassionCardTexts>
                    </TravelPassionCard>
                    <TravelPassionCard>
                        <TravelPassionImage src="/assets/img/passion2.png" />
                        <TravelPassionCardTexts>
                            <TPCardTitle>{t('passionCard_title2')}</TPCardTitle>
                            <TPReview>
                                <img src="/assets/img/star.svg" />
                                <TPCardText>4.8 {t('passionReviews')}</TPCardText>
                            </TPReview>
                        </TravelPassionCardTexts>
                    </TravelPassionCard>
                    <TravelPassionCard>
                        <TravelPassionImage src="/assets/img/passion3.png" />
                        <TravelPassionCardTexts>
                            <TPCardTitle>{t('passionCard_title3')}</TPCardTitle>
                            <TPReview>
                                <img src="/assets/img/star.svg" />
                                <TPCardText>4.8 {t('passionReviews')}</TPCardText>
                            </TPReview>
                        </TravelPassionCardTexts>
                    </TravelPassionCard>
                    <TravelPassionCard>
                        <TravelPassionImage src="/assets/img/passion4.png" />
                        <TravelPassionCardTexts>
                            <TPCardTitle>{t('passionCard_title4')}</TPCardTitle>
                            <TPReview>
                                <img src="/assets/img/star.svg" />
                                <TPCardText>4.8 {t('passionReviews')}</TPCardText>
                            </TPReview>
                        </TravelPassionCardTexts>
                    </TravelPassionCard>
                </TravelPassionCards>
            </Container>
        </PassionSection>
    );
};

export default TravelPassion;