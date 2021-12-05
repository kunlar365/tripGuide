import { t } from 'i18next';
import { Container, IntroTitle, IntroSection } from '../styled';
import { useTranslation } from 'react-i18next';
import IntroFilter from './IntroFilterDiv';

const Intro = () => {

    const { t } = useTranslation();

    return (
        <IntroSection>
            <Container>
                    <IntroTitle>{t('intro_text')}</IntroTitle>
                    {/* <IntroFilter /> */}
            </Container>
        </IntroSection>
    );
};

export default Intro;