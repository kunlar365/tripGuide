import { Container, TopFooterSection, GetOurOffers, GetOurOffersText, EmailButton, EmailDiv, EmailInput } from '../styled'

const TopFooter = () => {
    return(
        <Container>
            <TopFooterSection>
                <div>
                    <GetOurOffers>Get our pro offers </GetOurOffers>
                    <GetOurOffersText>Create a visual identity for your company, and an overall brand</GetOurOffersText>
                </div>
                <EmailDiv>
                    <EmailInput type="email" placeholder="Type your email here"/>
                    <EmailButton type="button">Subscribe</EmailButton>
                </EmailDiv>
            </TopFooterSection>
        </Container>
    );
};

export default TopFooter;