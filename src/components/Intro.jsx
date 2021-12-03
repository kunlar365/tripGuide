import { t } from 'i18next';
import { Container, IntroTitle, IntroSection, IntroFilterDiv } from '../styled';
import { useTranslation } from 'react-i18next';

const Intro = () => {

    const { t } = useTranslation();

    return (
        <IntroSection>
            <Container>
                    <IntroTitle>{t('intro_text')}</IntroTitle>
            <IntroFilterDiv>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magni labore eaque praesentium? Odit cum facere dolorum! Maiores, eveniet alias nam placeat consectetur quod at non excepturi iure quia aut!</IntroFilterDiv>

            </Container>
        </IntroSection>
    );
};

export default Intro;