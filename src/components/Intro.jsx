import { t } from 'i18next';
import { Container, MainHeader, SearchBtn, ArrowDiv, IntroTitle, IntroSection, SearchCardName, CheckInp, SearchCard, IntroFilterDiv, SearchRow, UserCount, Passenger, Content, Sum, ContentText, ContentAge, ContentBtn, Form } from '../styled';
import { useTranslation } from 'react-i18next';
import { Tab, Tabs, TabList } from 'react-tabs';
import { Reservation } from '../styled'
import 'react-tabs/style/react-tabs.css';
import { MdHotel } from 'react-icons/md';
import Select from 'react-select';
import { FaPlaneDeparture } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiFillCar } from 'react-icons/ai';
import { Navigate, useNavigate } from 'react-router-dom';
import { BsArrowLeftRight } from 'react-icons/bs'
import React from 'react'
import { useState, useRef } from 'react'


const Intro = () => {

    let history = useNavigate();

    const { t } = useTranslation();

    const [user, setUser] = useState(0);
    const [child, setChild] = useState(0);
    const [city, setCity] = useState('')
    const [infat, setInfat] = useState(0);

    const dateIn = useRef(null);
    const state = useRef(null);
    const dateOut = useRef(null);

    const total = user + child + infat;

    const hendleActive = (el) => {
        if (el.target.className === 'total') {
            el.target.className = 'total active'
        } else if (el.target.className === 'total active') {
            el.target.className = 'total'
        }
    }

    const cities = [
        { value: "Dubai", label: "Dubai" },
        { value: "Doha", label: "Doha" },
        { value: "Darling Harbour", label: "Darling Harbour" },
        { value: "Dhaka", label: "Dhaka" },
        { value: "Chili", label: "Chili" },
        { value: "Russia", label: "Russia" },
        { value: "America", label: "America" },
        { value: "Japan", label: "Japan" },
        { value: "Karea", label: "Karea" },
        { value: "Fransia", label: "Fransia" },
        { value: "Uzbekistan", label: "Uzbekistan" },
        { value: "Italy", label: "Italy" },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        history('/hotellist');
        console.log(state.current.value);
        console.log(dateIn.current.value);
        console.log(dateOut.current.value);
    }

    const handleCities = (newValue) => {
        setCity(newValue.value)
        console.log(newValue.value)
    }

     // {t('infantAge')}

    return (
        <IntroSection>
            <Container>
                <IntroTitle>{t('intro_text')}</IntroTitle>
                {/* <IntroFilter /> */}
                <IntroFilterDiv>
                    <SearchRow>
                        <Tabs>
                            <TabList>
                                <Tab><Reservation><MdHotel />{t('hotel')}</Reservation></Tab>
                                <Tab><Reservation><FaPlaneDeparture />{t('flight')}</Reservation></Tab>
                                <Tab><Reservation><AiFillCar />{t('carREntal')}</Reservation></Tab>
                            </TabList>
                        </Tabs>
                        <Passenger>
                            <button onClick={hendleActive} type="button" className="total">{total} {t('passenger')}</button>
                            <Content className="content">
                                <Sum>
                                    <div>
                                        <ContentText>{t('adult')}</ContentText>
                                        <ContentAge>{t('adultAge')}</ContentAge>
                                    </div>
                                    <div>
                                        <ContentBtn  onClick={() => {setUser(user > 0 ? user - 1 : 0)}}><AiOutlineMinus/></ContentBtn>
                                        <UserCount>{user}</UserCount>
                                        <ContentBtn  onClick={() => {setUser(user + 1)}}><BsPlusLg/></ContentBtn>
                                    </div>
                                </Sum>
                                <Sum>
                                    <div>
                                        <ContentText>{t('child')}</ContentText>
                                        <ContentAge>{t('childAge')}</ContentAge>
                                    </div>
                                    <div>
                                        <ContentBtn onClick={() => {setChild(child > 0 ? child - 1 : 0)}}><AiOutlineMinus/></ContentBtn>
                                        <UserCount>{child}</UserCount>
                                        <ContentBtn onClick={() => {setChild(child + 1)}}><BsPlusLg/></ContentBtn>
                                    </div>
                                </Sum>
                                <Sum>
                                    <div>
                                        <ContentText>{t('infant')}</ContentText>
                                        <ContentAge>{t('infantAge')}</ContentAge>
                                    </div>
                                    <div>
                                        <ContentBtn onClick={() => {setInfat(infat > 0 ? infat - 1 : 0)}}><AiOutlineMinus/></ContentBtn>
                                        <UserCount>{infat}</UserCount>
                                        <ContentBtn onClick={() => {setInfat(infat + 1)}}><BsPlusLg/></ContentBtn>
                                    </div>
                                </Sum>

                            </Content>
                        </Passenger>
                    </SearchRow>
                <Form>
                    <MainHeader>
                        <SearchCard>
                            <SearchCardName>{t('location')}</SearchCardName>
                            <Select options={cities} placeholder={t('whereFrom')} onClick={handleCities} ref={state}></Select>
                        </SearchCard>
                        <ArrowDiv style={{left: '334px',zIndex: '10'}}>
                            <BsArrowLeftRight/>
                        </ArrowDiv>
                        <SearchCard>
                            <SearchCardName>{t('checkin')}</SearchCardName>
                            <CheckInp type="date" ref={dateIn}/>
                        </SearchCard>
                        <ArrowDiv style={{left: '625px',zIndex: '10'}}>
                            <BsArrowLeftRight/>
                        </ArrowDiv>
                        <SearchCard>
                            <SearchCardName>{t('checkout')}</SearchCardName>
                            <CheckInp type="date" ref={dateOut}/>
                        </SearchCard>
                        <SearchBtn type="button" onClick={handleSearch}>{t('search')}</SearchBtn>
                    </MainHeader>
                </Form>
                </IntroFilterDiv>

            </Container>
        </IntroSection>
    );
};

export default Intro;