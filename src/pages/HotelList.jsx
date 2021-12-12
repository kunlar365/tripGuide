import Aside from "../components/Aside";
import Header from "../components/Header";
import HotelListCards from "../components/HotelListCards";
import { Container, MainHeader, SearchBtn, SearchCardName, CheckInp, SearchCard, IntroFilterDiv, SearchRow, UserCount, Passenger, Content, Sum, ContentText, ContentAge, ContentBtn, Form } from '../styled';
import { HotelListSection, HotelListComponents } from "../styled";
import { useState, useRef } from 'react';
import Select from 'react-select';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { FaPlaneDeparture } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';

const HotelList = () => {

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
        console.log(state.current.value);
        console.log(dateIn.current.value);
        console.log(dateOut.current.value);
    }

    const handleCities = (newValue) => {
        setCity(newValue.value)
        console.log(newValue.value)
    }

    return (
        <HotelListSection>
            <Container>
                <IntroFilterDiv>
                    <SearchRow>
                        <Passenger>
                            <button onClick={hendleActive} type="button" className="total" style={{marginBottom: '20px'}}>{total} {t('passenger')}</button>
                            <Content className="content">
                                <Sum>
                                    <div>
                                        <ContentText>{t('adult')}</ContentText>
                                        <ContentAge>{t('adultAge')}</ContentAge>
                                    </div>
                                    <div>
                                        <ContentBtn onClick={() => { setUser(user > 0 ? user - 1 : 0) }}><AiOutlineMinus /></ContentBtn>
                                        <UserCount>{user}</UserCount>
                                        <ContentBtn onClick={() => { setUser(user + 1) }}><BsPlusLg /></ContentBtn>
                                    </div>
                                </Sum>
                                <Sum>
                                    <div>
                                        <ContentText>{t('child')}</ContentText>
                                        <ContentAge>{t('childAge')}</ContentAge>
                                    </div>
                                    <div>
                                        <ContentBtn onClick={() => { setChild(child > 0 ? child - 1 : 0) }}><AiOutlineMinus /></ContentBtn>
                                        <UserCount>{child}</UserCount>
                                        <ContentBtn onClick={() => { setChild(child + 1) }}><BsPlusLg /></ContentBtn>
                                    </div>
                                </Sum>
                                <Sum>
                                    <div>
                                        <ContentText>{t('infant')}</ContentText>
                                        <ContentAge>{t('infantAge')}</ContentAge>
                                    </div>
                                    <div>
                                        <ContentBtn onClick={() => { setInfat(infat > 0 ? infat - 1 : 0) }}><AiOutlineMinus /></ContentBtn>
                                        <UserCount>{infat}</UserCount>
                                        <ContentBtn onClick={() => { setInfat(infat + 1) }}><BsPlusLg /></ContentBtn>
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
                            <SearchCard>
                                <SearchCardName>{t('checkin')}</SearchCardName>
                                <CheckInp type="date" ref={dateIn} />
                            </SearchCard>
                            <SearchCard>
                                <SearchCardName>{t('checkout')}</SearchCardName>
                                <CheckInp type="date" ref={dateOut} />
                            </SearchCard>
                            <SearchBtn type="button" onClick={handleSearch}>{t('search')}</SearchBtn>
                        </MainHeader>
                    </Form>
                </IntroFilterDiv>
            </Container>
            <HotelListComponents>
                <Aside />
                <HotelListCards />
            </HotelListComponents>
        </HotelListSection>
    )
}

export default HotelList;