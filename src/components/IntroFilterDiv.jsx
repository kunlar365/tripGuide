
import { Tab, Tabs, TabList } from 'react-tabs';
import { Reservation } from '../styled'
import 'react-tabs/style/react-tabs.css';
import { MdHotel } from 'react-icons/md';
import { FaPlaneDeparture } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';


const IntroFilterDiv = () => {
    return (
        <IntroFilterDiv>
            <Tabs>
                <TabList>
                    <Tab><Reservation><MdHotel />Hotel</Reservation></Tab>
                    <Tab><Reservation><FaPlaneDeparture />Fllight</Reservation></Tab>
                    <Tab><Reservation><AiFillCar />Car Rental</Reservation></Tab>
                </TabList>
            </Tabs>
        </IntroFilterDiv>
    )
};

export default IntroFilterDiv;