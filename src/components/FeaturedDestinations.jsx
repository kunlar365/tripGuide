import { FeaturedSection, Row, Container, PassionTitle, FeaturedText, FeaturedCityImage, FeaturedCityDiv, MiddleActivitiNumbers, LittleFeaturedCityRating, MiddleTourCityTourCity, LittleTCActivitiesDiv, FeaturedCityRating, LittleActivitiNumbers, FeaturedCityTexts, LittleTourCity, TourCity, TCActivitiesDiv, ActivitiImage, ActivitiNumbers } from "../styled";
import { useTranslation } from 'react-i18next';

const FeaturedDestinations = () => {

    const { t } = useTranslation();
    
    return (
        <FeaturedSection>
            <Container>
                <PassionTitle>{t('featured_title')}</PassionTitle>
                <FeaturedText>{t('featured_text')}</FeaturedText>
                <Row>
                    <div>
                        <FeaturedCityDiv>
                            <FeaturedCityImage src="/assets/img/featuredDestinations.png" alt="destinations" />
                            <FeaturedCityRating>3.5</FeaturedCityRating>
                            <FeaturedCityTexts>
                                <TourCity>{t('featuredCities_name1')}</TourCity>
                                <TCActivitiesDiv>
                                    <ActivitiImage src="/assets/img/featuredProfile.png" alt="" alt="profile" />
                                    <ActivitiNumbers>{t('featured_activities')}</ActivitiNumbers>
                                </TCActivitiesDiv>
                            </FeaturedCityTexts>
                        </FeaturedCityDiv>
                        <Row>
                            <FeaturedCityDiv>
                                <FeaturedCityImage src="/assets/img/featuredDestinations3.png" />
                                <FeaturedCityRating>3.5</FeaturedCityRating>
                                <FeaturedCityTexts>
                                    <MiddleTourCityTourCity>{t('featuredCities_name2')}</MiddleTourCityTourCity>
                                    <TCActivitiesDiv>
                                        <ActivitiImage src="/assets//featuredProfile2.png" alt="" />
                                        <MiddleActivitiNumbers>{t('featured_activities')}</MiddleActivitiNumbers>
                                    </TCActivitiesDiv>
                                </FeaturedCityTexts>
                            </FeaturedCityDiv>
                            <FeaturedCityDiv>
                                <FeaturedCityImage src="/assets/img/featuredDestinations4.png" />
                                <FeaturedCityRating>3.5</FeaturedCityRating>
                                <FeaturedCityTexts>
                                    <MiddleTourCityTourCity>{t('featuredCities_name3')}</MiddleTourCityTourCity>
                                    <TCActivitiesDiv>
                                        <ActivitiImage src="/assets/img/featuredProfile2.png" alt="" />
                                        <MiddleActivitiNumbers>{t('featured_activities')}</MiddleActivitiNumbers>
                                    </TCActivitiesDiv>
                                </FeaturedCityTexts>
                            </FeaturedCityDiv>

                        </Row>
                    </div>
                    <div>
                        <FeaturedCityDiv>
                            <FeaturedCityImage src="/assets/img/featuredDestinations2.png" />
                            <LittleFeaturedCityRating>3.5</LittleFeaturedCityRating>
                            <FeaturedCityTexts>
                                <LittleTourCity>{t('featuredCities_name4')}</LittleTourCity>
                                <LittleTCActivitiesDiv>
                                    <ActivitiImage src="/assets/img/featuredProfile2.png" alt="" />
                                    <LittleActivitiNumbers>{t('featured_activities')}</LittleActivitiNumbers>
                                </LittleTCActivitiesDiv>
                            </FeaturedCityTexts>
                        </FeaturedCityDiv>
                        <FeaturedCityDiv>
                            <FeaturedCityImage src="/assets/img/featuredDestinations5.png" />
                            <LittleFeaturedCityRating>3.5</LittleFeaturedCityRating>
                            <FeaturedCityTexts>
                                <LittleTourCity>{t('featuredCities_name5')}</LittleTourCity>
                                <LittleTCActivitiesDiv>
                                    <ActivitiImage src="/assets/img/featuredProfile2.png" alt="" />
                                    <LittleActivitiNumbers>{t('featured_activities')}</LittleActivitiNumbers>
                                </LittleTCActivitiesDiv>
                            </FeaturedCityTexts>
                        </FeaturedCityDiv>
                        <FeaturedCityDiv>
                            <FeaturedCityImage src="/assets/img/featuredDestinations6.png" />
                            <LittleFeaturedCityRating>3.5</LittleFeaturedCityRating>
                            <FeaturedCityTexts>
                                <LittleTourCity>{t('featuredCities_name6')}</LittleTourCity>
                                <LittleTCActivitiesDiv>
                                    <ActivitiImage src="/assets/img/featuredProfile2.png" alt="" />
                                    <LittleActivitiNumbers>{t('featured_activities')}</LittleActivitiNumbers>
                                </LittleTCActivitiesDiv>
                            </FeaturedCityTexts>
                        </FeaturedCityDiv>
                    </div>
                </Row>
            </Container>
        </FeaturedSection>
    );
};

export default FeaturedDestinations;