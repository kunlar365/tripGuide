import { BiSearch } from 'react-icons/bi';
import Form from 'react-bootstrap/Form';
import { SearchLocation, SearchingLocationDiv, SearchingLocationInput, PopularFilters, YourBudgetDiv, NumbersText, PopularFilterTexts, PropertyDiv, PropertyTypeDiv, PopularFiltersCheckboxDiv, SeeMoreDiv, AsideComponent, SeeMoreLink, CheckboxsDiv } from '../styled'
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
                        <Form.Check aria-label="hotels" style={{ marginRight: '12px' }} />
                        <PopularFilterTexts>{t('hotels')}</PopularFilterTexts>
                    </PopularFiltersCheckboxDiv>
                    <PopularFiltersCheckboxDiv>
                        <Form.Check aria-label="breakfast and dinner" style={{ marginRight: '12px' }} />
                        <PopularFilterTexts>{t('breakfastAndDinner')}</PopularFilterTexts>
                    </PopularFiltersCheckboxDiv>
                    <PopularFiltersCheckboxDiv>
                        <Form.Check aria-label="free cancellation" style={{ marginRight: '12px' }} />
                        <PopularFilterTexts>{t('freeCancellation')}</PopularFilterTexts>
                    </PopularFiltersCheckboxDiv>
                    <PopularFiltersCheckboxDiv>
                        <Form.Check aria-label="no prepayment" style={{ marginRight: '12px' }} />
                        <PopularFilterTexts>{t('noPrepayment')}</PopularFilterTexts>
                    </PopularFiltersCheckboxDiv>
                </CheckboxsDiv>
                <SeeMoreDiv>
                    <SeeMoreLink href="#">{t('seeMore')}</SeeMoreLink>
                </SeeMoreDiv>
            </div>
            <div className="priceRange">
                <PopularFilters>{t('priceRange')}</PopularFilters>
                <input onChange={(el) => setRange(el.target.value)} type="range" name="" id="" />
                <input type="number" value={range} />
            </div>
            <div className="propertType">
                <PopularFilters>{t('propertyType')}</PopularFilters>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Hotels" style={{ marginRight: '12px' }}  />
                        <PopularFilterTexts>{t('hotels')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>108</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="apertments" style={{ marginRight: '12px' }}  />
                        <PopularFilterTexts>{t('apertments')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>141</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="resort" style={{ marginRight: '12px' }}  />
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
                    <Form.Check aria-label="Less than $75" style={{ marginRight: '12px' }}  />
                    <PopularFilterTexts>{t('lessThen75')}</PopularFilterTexts>
                </PopularFiltersCheckboxDiv>
                <PopularFiltersCheckboxDiv>
                    <Form.Check aria-label="$75 to 125" style={{ marginRight: '12px' }}  />
                    <PopularFilterTexts>{t('75to125')}</PopularFilterTexts>
                </PopularFiltersCheckboxDiv>
                <PopularFiltersCheckboxDiv>
                    <Form.Check aria-label="$125 to 200" style={{ marginRight: '12px' }}  />
                    <PopularFilterTexts>{t('125to200')}</PopularFilterTexts>
                </PopularFiltersCheckboxDiv>
                <PopularFiltersCheckboxDiv>
                    <Form.Check aria-label="$200 to $300" style={{ marginRight: '12px' }}  />
                    <PopularFilterTexts>{t('200to300')}</PopularFilterTexts>
                </PopularFiltersCheckboxDiv>
                <PopularFiltersCheckboxDiv>
                    <Form.Check aria-label="Greater than $300" style={{ marginRight: '12px' }}  />
                    <PopularFilterTexts>{t('greaterThen')}</PopularFilterTexts>
                </PopularFiltersCheckboxDiv>
            </YourBudgetDiv>
            <div className="facilites">
                <PopularFilters>{t('facilites')}</PopularFilters>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="outdoor sports" style={{ marginRight: '12px' }}  />
                        <PopularFilterTexts>{t('outdoorSports')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>108</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Berbeque" style={{ marginRight: '12px' }}  />
                        <PopularFilterTexts>{t('berbeque')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>141</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="living room" style={{ marginRight: '12px' }}  />
                        <PopularFilterTexts>{t('livingRoom')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>108</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Room Service" style={{ marginRight: '12px' }}  />
                        <PopularFilterTexts>{t('roomService')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>108</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Swimming Pool" style={{ marginRight: '12px' }}  />
                        <PopularFilterTexts>{t('swimmingPool')}</PopularFilterTexts>
                    </PropertyDiv>
                    <NumbersText>141</NumbersText>
                </PropertyTypeDiv>
                <PropertyTypeDiv>
                    <PropertyDiv>
                        <Form.Check aria-label="Spa" style={{ marginRight: '12px' }}  />
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