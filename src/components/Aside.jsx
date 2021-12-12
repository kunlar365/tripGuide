import { BiSearch } from 'react-icons/bi';
import Form from 'react-bootstrap/Form';
import { SearchLocation, RangeDiv, RangeNumber, SearchingLocationDiv, SearchingLocationInput, PopularFilters, YourBudgetDiv, NumbersText, PopularFilterTexts, PropertyDiv, PropertyTypeDiv, PopularFiltersCheckboxDiv, SeeMoreDiv, AsideComponent, SeeMoreLink, CheckboxsDiv } from '../styled'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Aside = () => {

    const { t } = useTranslation();
    //{t('seeMore')}

    const [ range, setRange ] = useState(0)

    return (
        <AsideComponent>
            <SearchLocation>{t('searchLocation')}</SearchLocation>
            <div className="popularFilters">
                <SearchingLocationDiv>
                    <SearchingLocationInput type="text" placeholder={t('searchLocation')} />
                    <BiSearch style={{ color: '#dadada', width: '33px', height: '21px' }} />
                </SearchingLocationDiv>
                <PopularFilters>{t('popularFilters')}</PopularFilters>
                <CheckboxsDiv>
                    <PopularFiltersCheckboxDiv>
                        <Form.Check aria-label="hotels" style={{ marginRight: '12px' }} value="Hotels" onChange={e => console.log(e.target.value)} />
                        <PopularFilterTexts>{t('hotels')}</PopularFilterTexts>
                    </PopularFiltersCheckboxDiv>
                    <PopularFiltersCheckboxDiv>
                        <Form.Check aria-label="breakfast and dinner" style={{ marginRight: '12px' }} value="Outdoor Sports" onChange={e => console.log(e.target.value)}  />
                        <PopularFilterTexts>{t('breakfastAndDinner')}</PopularFilterTexts>
                    </PopularFiltersCheckboxDiv>
                    <PopularFiltersCheckboxDiv>
                        <Form.Check aria-label="free cancellation" style={{ marginRight: '12px' }} value="Free cancellation" onChange={e => console.log(e.target.value)}  />
                        <PopularFilterTexts>{t('freeCancellation')}</PopularFilterTexts>
                    </PopularFiltersCheckboxDiv>
                    <PopularFiltersCheckboxDiv>
                        <Form.Check aria-label="no prepayment" style={{ marginRight: '12px' }} value="No Prepayment" onChange={e => console.log(e.target.value)}  />
                        <PopularFilterTexts>{t('noPrepayment')}</PopularFilterTexts>
                    </PopularFiltersCheckboxDiv>
                </CheckboxsDiv>
                <SeeMoreDiv>
                    <SeeMoreLink href="#">{t('seeMore')}</SeeMoreLink>
                </SeeMoreDiv>
            </div>
            <div className="priceRange">
                <PopularFilters>{t('priceRange')}</PopularFilters>
                <RangeDiv>
                    <input onChange={(el) => setRange(el.target.value)} type="range" name="" id="" style={{width: '200px'}} />
                    <RangeNumber type="number" value={range} />
                </RangeDiv>
            </div>
            <div className="propertType">
                <PopularFilters>{t('propertyType')}</PopularFilters>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Hotels" style={{ marginRight: '12px' }} value="Hotels" onChange={e => console.log(e.target.value)}   />
                        <PopularFilterTexts>{t('hotels')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>108</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="apertments" style={{ marginRight: '12px' }} value="Apartments" onChange={e => console.log(e.target.value)}   />
                        <PopularFilterTexts>{t('apertments')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>141</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="resort" style={{ marginRight: '12px' }} value="Resort" onChange={e => console.log(e.target.value)}   />
                        <PopularFilterTexts>{t('resort')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>108</NumbersText>
                </PropertyTypeDiv>
                <SeeMoreDiv>
                    <SeeMoreLink href="#">{t('seeMore')}</SeeMoreLink>
                </SeeMoreDiv>
            </div>
            <YourBudgetDiv>
                <PopularFilters>{t('yourBudget')}</PopularFilters>
                <PopularFiltersCheckboxDiv>
                    <Form.Check aria-label="Less than $75" style={{ marginRight: '12px' }} value="Less than $75" onChange={e => console.log(e.target.value)}   />
                    <PopularFilterTexts>{t('lessThen75')}</PopularFilterTexts>
                </PopularFiltersCheckboxDiv>
                <PopularFiltersCheckboxDiv>
                    <Form.Check aria-label="$75 to 125" style={{ marginRight: '12px' }} value="$75 to 125" onChange={e => console.log(e.target.value)}   />
                    <PopularFilterTexts>{t('75to125')}</PopularFilterTexts>
                </PopularFiltersCheckboxDiv>
                <PopularFiltersCheckboxDiv>
                    <Form.Check aria-label="$125 to 200" style={{ marginRight: '12px' }} value="$125 to 200" onChange={e => console.log(e.target.value)}   />
                    <PopularFilterTexts>{t('125to200')}</PopularFilterTexts>
                </PopularFiltersCheckboxDiv>
                <PopularFiltersCheckboxDiv>
                    <Form.Check aria-label="$200 to $300" style={{ marginRight: '12px' }} value="$200 to $300" onChange={e => console.log(e.target.value)}   />
                    <PopularFilterTexts>{t('200to300')}</PopularFilterTexts>
                </PopularFiltersCheckboxDiv>
                <PopularFiltersCheckboxDiv>
                    <Form.Check aria-label="Greater than $300" style={{ marginRight: '12px' }} value="Greater than $300" onChange={e => console.log(e.target.value)}   />
                    <PopularFilterTexts>{t('greaterThen')}</PopularFilterTexts>
                </PopularFiltersCheckboxDiv>
            </YourBudgetDiv>
            <div className="facilites">
                <PopularFilters>{t('facilites')}</PopularFilters>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="outdoor sports" style={{ marginRight: '12px' }} value="Outdoor Sports" onChange={e => console.log(e.target.value)}   />
                        <PopularFilterTexts>{t('outdoorSports')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>108</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Berbeque" style={{ marginRight: '12px' }} value="Berbeque" onChange={e => console.log(e.target.value)}   />
                        <PopularFilterTexts>{t('berbeque')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>141</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="living room" style={{ marginRight: '12px' }} value="Living Room" onChange={e => console.log(e.target.value)}   />
                        <PopularFilterTexts>{t('livingRoom')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>108</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Room Service" style={{ marginRight: '12px' }} value="Hotels" onChange={e => console.log(e.target.value)} Room service  />
                        <PopularFilterTexts>{t('roomService')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>108</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Swimming Pool" style={{ marginRight: '12px' }} value="Swimming pool" onChange={e => console.log(e.target.value)}   />
                        <PopularFilterTexts>{t('swimmingPool')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>141</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Spa" style={{ marginRight: '12px' }} value="Spa" onChange={e => console.log(e.target.value)}   />
                        <PopularFilterTexts>{t('spa')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>108</NumbersText>
                </PropertyTypeDiv>
                <SeeMoreLink href="#">{t('seeMore')}</SeeMoreLink>
            </div>
        </AsideComponent>
    );
};

export default Aside;