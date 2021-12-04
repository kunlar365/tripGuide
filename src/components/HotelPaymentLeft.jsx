import { DateTitle, DateText, DateDiv, HotelPaymentLeftDiv, HotelPaymentDiv, CreditCardsDiv, ConfirmAndBook, SaveCardText, SaveCardDiv, CardsExpiryDiv, CardExpiryDiv, CardNumberInputDiv, CardNumberInput, ZuichDiv, Zuich, YourTour, CardNumber, CreditCardDiv, HolderName, CreditCards, HolderNameDiv, CreditCard, HolderTitle, CreditCardSecond } from '../styled'
import { HiOutlinePencil } from 'react-icons/hi';
import { BsCheck2 } from 'react-icons/bs';
import HotelPaymentAside from './HotelPaymentAside';
import { useTranslation } from 'react-i18next';


const HotelPaymentLeft = () => {

    const { t } = useTranslation();
    //{t('confirm')}
    
    return (
        <HotelPaymentDiv>
            <HotelPaymentLeftDiv>
                <ZuichDiv>
                    <Zuich>{t('confirmYourBook')}</Zuich>
                </ZuichDiv>
                <div>
                    <YourTour>{t('yourTour')}</YourTour>
                    <DateDiv>
                        <div className="traveller">
                            <DateTitle>{t('date')}</DateTitle>
                            <DateText>{t('june')}</DateText>
                        </div>
                        <HiOutlinePencil />
                    </DateDiv>
                    <DateDiv>
                        <div className="traveller">
                            <DateTitle>{t('traveller')}</DateTitle>
                            <DateText>{t('passanger')}</DateText>
                        </div>
                        <HiOutlinePencil />
                    </DateDiv>
                </div>
                <ZuichDiv>
                    <YourTour>{t('creaditCards')}</YourTour>
                    <CreditCardsDiv>
                        <CreditCardDiv>
                            <img src="/assets/img/creditCard.png" alt="" style={{ width: '41px', height: '29px' }} />
                        </CreditCardDiv>
                        <CreditCardDiv>
                            <img src="/assets/img/creditCard2.png" alt="" />
                        </CreditCardDiv>
                        <CreditCardDiv>
                            <img src="/assets/img/visaCard.png" alt="" />
                        </CreditCardDiv>
                        <CreditCardDiv>
                            <img src="/assets/img/creditCard4.png" alt="" />
                        </CreditCardDiv>
                    </CreditCardsDiv>
                </ZuichDiv>
                <CreditCards>
                    <CreditCard>
                        <HolderNameDiv>
                            <img src="/assets/img/creditCard.svg" alt="" />
                            <img src="/assets/img/menu.svg" alt="" />
                        </HolderNameDiv>
                        <HolderTitle>8948   xxxx  xxxx  7894</HolderTitle>
                        <HolderNameDiv>
                            <HolderName>{t('holderName')}</HolderName>
                            <img src="/assets/img/XMLID 328.png" alt="" />
                        </HolderNameDiv>
                    </CreditCard>
                    <CreditCardSecond>
                        <HolderNameDiv>
                            <img src="/assets/img/creditCard.svg" alt="" />
                            <img src="/assets/img/menu.svg" alt="" />
                        </HolderNameDiv>
                        <HolderTitle>8948   xxxx  xxxx  7894</HolderTitle>
                        <HolderNameDiv>
                            <HolderName>{t('holderName')}</HolderName>
                            <img src="/assets/img/visaCard.png" alt="" />
                        </HolderNameDiv>
                    </CreditCardSecond>
                </CreditCards>
                <div>
                    <div>
                        <CardNumber>{t('cardNumber')}</CardNumber>
                        <CardNumberInputDiv>
                            <CardNumberInput type="number" placeholder="5884 6241 4444 3333" />
                            <BsCheck2 />
                        </CardNumberInputDiv>
                    </div>
                    <CardsExpiryDiv>
                        <div>
                        <CardNumber>{t('expiryDate')}</CardNumber>
                        <CardExpiryDiv>
                            <CardNumberInput type="number" placeholder="MM / YY" />
                        </CardExpiryDiv>
                        </div>
                        <div>
                        <CardNumber>CVC/CVV</CardNumber>
                        <CardExpiryDiv>
                            <CardNumberInput type="password" placeholder="****" />
                        </CardExpiryDiv>
                        </div>
                    </CardsExpiryDiv>
                    <SaveCardDiv>
                        <input type="checkbox" style={{width: '24px',height: '23px'}}/>
                        <SaveCardText>{t('saveCard')}</SaveCardText>
                    </SaveCardDiv>
                </div>
                <ConfirmAndBook type="button">{t('confirm')}</ConfirmAndBook>
            </HotelPaymentLeftDiv>
            <HotelPaymentAside/>
        </HotelPaymentDiv>
    )
};

export default HotelPaymentLeft;