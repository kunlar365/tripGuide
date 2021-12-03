import { OffCost, OffCostText, NotCharged, TravelUi, DateInput, OffCostSpan, TwoSelectDivs, HotelBooking, HotelDetailAside, NumbersText, PriceDiv, PopularFilterTexts, OffCostDiv, PropertyTypeDiv, PropertyDiv, Checking, CheckingDivs, CheckingDiv, GuestSelect, GuestSelectDiv } from '../styled';
import { BsCalendar4Week } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';

const HotelDetailesAside = () => {
    return (
        <HotelDetailAside>
            <OffCostDiv>
                <OffCost>$142 <OffCostText>/night</OffCostText></OffCost>
                <TravelUi>$184</TravelUi>
                <OffCostSpan>20% OFF</OffCostSpan>
            </OffCostDiv>
            <CheckingDivs>
                <TwoSelectDivs>
                    <Checking>Check-In</Checking>
                    <CheckingDiv>
                        <BsCalendar4Week style={{width: '20px',height: '20px',marginRight: '10px'}} />
                        <DateInput className="dateInput" type="date" name="" id="" />
                    </CheckingDiv>
                </TwoSelectDivs>
                <TwoSelectDivs>
                    <Checking>Check-Out</Checking>
                    <CheckingDiv>
                        <BsCalendar4Week style={{width: '20px',height: '20px',marginRight: '10px'}} />
                        <DateInput className="dateInput" type="date" name="" id="" />
                    </CheckingDiv>
                </TwoSelectDivs>
            </CheckingDivs>
            <Checking>Guest</Checking>
            <GuestSelectDiv>
                <GuestSelect name="" id="">
                    <option value="1">2 Adults, 1 Children</option>
                </GuestSelect>
            </GuestSelectDiv>
            <Checking>Extra Features</Checking>
            <div>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Allow to bring pet" style={{ marginRight: '12px' }} />
                        <PopularFilterTexts>Allow to bring pet</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>$13</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Breakfast a day per person" style={{ marginRight: '12px' }} />
                        <PopularFilterTexts>Breakfast a day per person</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>$10</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Parking a day" style={{ marginRight: '12px' }} />
                        <PopularFilterTexts>Parking a day</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>$6</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Extra pillow" style={{ marginRight: '12px' }} />
                        <PopularFilterTexts>Extra pillow</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>Free</NumbersText>
                </PropertyTypeDiv>
            </div>
            <Checking>Price</Checking>
            <PriceDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <PopularFilterTexts>1 Nights</PopularFilterTexts>
                    </PropertyDiv>
                    <PopularFilterTexts>$500</PopularFilterTexts>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <PopularFilterTexts>Discount 20%</PopularFilterTexts>
                    </PropertyDiv>
                    <PopularFilterTexts>$200</PopularFilterTexts>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <PopularFilterTexts>Breakfast a day per person</PopularFilterTexts>
                    </PropertyDiv>
                    <PopularFilterTexts>$10</PopularFilterTexts>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <PopularFilterTexts>Service fee</PopularFilterTexts>
                    </PropertyDiv>
                    <PopularFilterTexts>$5</PopularFilterTexts>
                </PropertyTypeDiv>
            </PriceDiv>
            <PropertyTypeDiv>
                <PropertyDiv>
                    <Checking>Total Payment</Checking>
                </PropertyDiv>
                <PopularFilterTexts>$300</PopularFilterTexts>
            </PropertyTypeDiv>
            <HotelBooking type="button">Book Now</HotelBooking>
            <NotCharged>You will not get charged yet</NotCharged>
        </HotelDetailAside>
    )
};

export default HotelDetailesAside;