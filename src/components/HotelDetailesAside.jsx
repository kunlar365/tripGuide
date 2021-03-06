import { OffCost, OffCostText, NotCharged, TravelUi, DateInput, OffCostSpan, TwoSelectDivs, HotelBooking, HotelDetailAside, NumbersText, PriceDiv, PopularFilterTexts, OffCostDiv, PropertyTypeDiv, PropertyDiv, Checking, CheckingDivs, CheckingDiv, GuestSelect, GuestSelectDiv } from '../styled';
import { BsCalendar4Week } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import apiCalls from '../config/api';


const HotelDetailesAside = () => {

    const [hotelInfo, setHotelInfo] = useState({});
    const [error, setError] = useState('');

    const { id } = useParams();
    useEffect(() => {
        apiCalls.getHotelDetail(id).then(data => {
            setHotelInfo(data);
        }).catch(error => {
            setError(error.message)
        })
    }, [id])

    let History = useNavigate();
    const { t } = useTranslation();
    //{t('notCharged')}

    return (
        <div>
            {!error && <HotelDetailAside key={hotelInfo.id}>
            <OffCostDiv>
                <OffCost>$ {hotelInfo.price}<OffCostText>{t('forNight')}</OffCostText></OffCost>
                <TravelUi>$184</TravelUi>
                <OffCostSpan>{t('20%Off')}</OffCostSpan>
            </OffCostDiv>
            <CheckingDivs>
                <TwoSelectDivs>
                    <Checking>{t('checkIn')}</Checking>
                    <CheckingDiv>
                        <BsCalendar4Week style={{width: '20px',height: '20px',marginRight: '10px'}} />
                        <DateInput className="dateInput" type="date" name="" id="" />
                    </CheckingDiv>
                </TwoSelectDivs>
                <TwoSelectDivs>
                    <Checking>{t('checkOut')}</Checking>
                    <CheckingDiv>
                        <BsCalendar4Week style={{width: '20px',height: '20px',marginRight: '10px'}} />
                        <DateInput className="dateInput" type="date" name="" id="" />
                    </CheckingDiv>
                </TwoSelectDivs>
            </CheckingDivs>
            <Checking>{t('guest')}</Checking>
            <GuestSelectDiv>
                <GuestSelect name="" id="">
                    <option value="1">{t('adultsChildren')}</option>
                </GuestSelect>
            </GuestSelectDiv>
            <Checking>{t('extraFeatures')}</Checking>
            <div>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Allow to bring pet" style={{ marginRight: '12px' }} value="Allow to bring pet" onChange={e => console.log(e.target.value)}  />
                        <PopularFilterTexts>{t('allowToBringPet')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>$13</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Breakfast a day per person" style={{ marginRight: '12px' }} value="Breakfast a day per person" onChange={e => console.log(e.target.value)}  />
                        <PopularFilterTexts>{t('breakfastPerson')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>$10</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Parking a day" style={{ marginRight: '12px' }} value="Parking a day" onChange={e => console.log(e.target.value)}  />
                        <PopularFilterTexts>{t('parkingDay')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>$6</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Extra pillow" style={{ marginRight: '12px' }} value="Extra pillow" onChange={e => console.log(e.target.value)}  />
                        <PopularFilterTexts>{t('extraPillow')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>{t('free')}</NumbersText>
                </PropertyTypeDiv>
            </div>
            <Checking>{t('price')}</Checking>
            <PriceDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <PopularFilterTexts>{t('night')}</PopularFilterTexts>
                    </PropertyDiv>
                    <PopularFilterTexts>$500</PopularFilterTexts>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <PopularFilterTexts>{t('discount')}</PopularFilterTexts>
                    </PropertyDiv>
                    <PopularFilterTexts>$200</PopularFilterTexts>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <PopularFilterTexts>{t('breakfastPerson')}</PopularFilterTexts>
                    </PropertyDiv>
                    <PopularFilterTexts>$10</PopularFilterTexts>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <PopularFilterTexts>{t('serviceFree')}</PopularFilterTexts>
                    </PropertyDiv>
                    <PopularFilterTexts>$5</PopularFilterTexts>
                </PropertyTypeDiv>
            </PriceDiv>
            <PropertyTypeDiv>
                <PropertyDiv>
                    <Checking>{t('totalPayment')}</Checking>
                </PropertyDiv>
                <PopularFilterTexts>$300</PopularFilterTexts>
            </PropertyTypeDiv>
            <HotelBooking to={`/hotelpayment/${hotelInfo.id}`}>{t('bookButton')}</HotelBooking>
            <NotCharged>{t('notCharged')}</NotCharged>
        </HotelDetailAside>}


        {error && <div>{error}</div>}

        </div>
    )
};

export default HotelDetailesAside;