// import React, { useContext } from 'react';
// import { ThemeContext } from 'styled-components';
// import { Button, Card } from '../styled';
// import DropdownButton from 'react-bootstrap/DropdownButton'
import { MainTitle, LogosDiv, Headers, MainHeader, HeaderModals, Flags, Countries, ProfileDetailes, Valut } from '../styled'
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { FaRegBell } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { BiLogOutCircle } from 'react-icons/bi';


const Header = () => {

    const { t } = useTranslation();


    const [valut, setValut] = useState('USD');
    const [country, setCountry] = useState(t('lang'));
    // 

    return (
        <Headers>
            <div className="container">
                <MainHeader>
                    {/* <Button onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>theme changer</Button> */}
                    {/* <Card>This is card</Card> */}
                    <LogosDiv>
                        <img className="logo" src="/assets/img/Subtract (1).svg" alt="" />
                        <MainTitle href="#">TripGuide</MainTitle>
                    </LogosDiv>
                    <HeaderModals>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor: 'transparent',border: 'none', color: '#84878B'}}>
                                {valut}
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{borderRadius: '16px', padding: '20px'}} >
                                <Dropdown.Item onClick={() => setValut('USD')} href="#/action-1"> <Valut> {t('valut_name1')} </Valut> </Dropdown.Item>
                                <Dropdown.Item onClick={() => setValut('RUB')} href="#/action-2"> <Valut> {t('valut_name2')} </Valut> </Dropdown.Item>
                                <Dropdown.Item onClick={() => setValut('UZS')} href="#/action-3"> <Valut> {t('valut_name3')} </Valut> </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor: 'transparent',border: 'none', color: '#84878B'}}>
                                <Flags src={`/assets/img/${country}.png`} alt="" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{padding: '25px', borderRadius: '16px'}}>
                                <Dropdown.Item onClick={() => { i18next.changeLanguage('en') && setCountry('en') }} style={{width: '278px', marginBottom: '30px'}}> <Flags src="/assets/img/en.png" alt=""/> <Countries> English </Countries></Dropdown.Item>
                                <Dropdown.Item onClick={() => { i18next.changeLanguage('ru') && setCountry('ru') }} style={{width: '278px', marginBottom: '30px'}}> <Flags src="/assets/img/ru.png" alt="" /> <Countries> Русский </Countries></Dropdown.Item>
                                <Dropdown.Item onClick={() => { i18next.changeLanguage('uz') && setCountry('uz') }} style={{width: '278px'}}> <Flags src="/assets/img/uz.png" alt="" /> <Countries> O'zbekcha </Countries></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <FaRegBell style={{width: '17px',height: '21px', color: '#84878B'}} />
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor: 'transparent',border: 'none', color: '#84878B'}}>
                                <img src="/assets/img/profile.svg" alt="" /> Delowar
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{padding: '20px', borderRadius: '16px'}}>
                                <Dropdown.Item href="#/action- 1" style={{marginBottom: '25px', fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, color: '#23262F', lineHeight: '18px'}}> <BiUserCircle style={{fontSize: '24px', marginRight: '20px', color: '#777E90'}} /> <ProfileDetailes> My Profile </ProfileDetailes> </Dropdown.Item>
                                <Dropdown.Item href="#/action-2" style={{ fontSize: '16px', fontFamily: 'Roboto', fontWeight: 400, color: '#23262F', lineHeight: '18px'}}> <BiLogOutCircle style={{fontSize: '24px', marginRight: '20px', color: '#777E90'}} /> <ProfileDetailes> Sign out </ProfileDetailes> </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </HeaderModals>
                </MainHeader>
            </div>
        </Headers>
    );
};

export default Header;
