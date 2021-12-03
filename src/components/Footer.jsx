import { Container, LogosDiv, MainTitle, FooterDivs, FooterComponent, FooterText, ButtonDiv, DarkButton, LightButton, FooterTitle, FooterList, FooterListTexts } from '../styled'
import { BiMoon } from 'react-icons/bi';
import {  TopFooterSection, GetOurOffers, GetOurOffersText, EmailButton, EmailDiv, EmailInput } from '../styled'
import { RiSunFill } from 'react-icons/ri';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const { t } = useTranslation();

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <FooterComponent>
            <TopFooterSection>
                <div>
                    <GetOurOffers>{t('topFooter_title')}</GetOurOffers>
                    <GetOurOffersText>{t('topFooter_text')}</GetOurOffersText>
                </div>
                <EmailDiv>
                    <EmailInput type="email" placeholder={t('yourEmail')}/>
                    <EmailButton type="button">{t('subscribe')}</EmailButton>
                </EmailDiv>
            </TopFooterSection>
        <Container>
            <FooterDivs>
                <div>
                    <LogosDiv>
                        <img className="logo" src="/assets/img/Subtract (1).svg" alt="" />
                        <MainTitle>TripGuide</MainTitle>
                    </LogosDiv>
                    <FooterText>{t('footer_text')}</FooterText>
                    <ButtonDiv>
                        <LightButton type="button" onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}><RiSunFill style={{width: '19px',height: '18px'}}/></LightButton>
                        <DarkButton type="button" onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}><BiMoon style={{width: '19px',height: '18px'}} /></DarkButton>
                    </ButtonDiv>
                </div>
                <div>
                    <FooterTitle>{t('footerList_title1')}</FooterTitle>
                    <FooterList>
                        <FooterListTexts>{t('footerList_text1')}</FooterListTexts>
                        <FooterListTexts>{t('footerList_text2')}</FooterListTexts>
                        <FooterListTexts>{t('footerList_text3')}</FooterListTexts>
                        <FooterListTexts>{t('footerList_text4')}</FooterListTexts>
                        <FooterListTexts>{t('footerList_text5')}</FooterListTexts>
                    </FooterList>
                </div>
                <div>
                    <FooterTitle>{t('footerList_title2')}</FooterTitle>
                    <FooterList>
                        <FooterListTexts>{t('footerList_text6')}</FooterListTexts>
                        <FooterListTexts>{t('footerList_text7')}</FooterListTexts>
                        <FooterListTexts>{t('footerList_text8')}</FooterListTexts>
                        <FooterListTexts>{t('footerList_text9')}</FooterListTexts>
                        <FooterListTexts>{t('footerList_text10')}</FooterListTexts>
                    </FooterList>
                </div>
                <div>
                    <FooterTitle>{t('footerList_title3')}</FooterTitle>
                    <FooterList>
                        <FooterListTexts>{t('footerList_text11')}</FooterListTexts>
                        <FooterListTexts>{t('footerList_text12')}</FooterListTexts>
                        <FooterListTexts>{t('footerList_text13')}</FooterListTexts>
                        <FooterListTexts>{t('footerList_text14')}</FooterListTexts>
                        <FooterListTexts>{t('footerList_text15')}</FooterListTexts>
                    </FooterList>
                </div>
            </FooterDivs>
        </Container>
        </FooterComponent>
    );
};

export default Footer;

