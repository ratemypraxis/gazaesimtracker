import React from 'react';
import styled from 'styled-components';

import { Grid, Header, Segment } from 'semantic-ui-react';

import Carousel from './Carousel';
import { color } from '../theme';

const Container = styled.div`
  background-color: ${(props) => props.color} !important;
`;

const StyledSegment = styled(Segment)`
  padding: 8em 0em !important;
`;

const HeaderContainer = styled.div`
  background-color: ${color.white};
  border-radius: 10px;
  border: 3px solid ${color.black};
  padding: 0.5em;
`;

const StyledHeader = styled(Header)`
  font-size: 2em;
  color: ${color.red} !important;
`;

const StyledText = styled.p`
  font-size: 1.33em;
  color: ${color.white} !important;
  margin-top: 1em;
  padding-left: 1em;
`;

const HowEsimWorks = () => (
  <Container color={color.green}>
    <StyledSegment vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <HeaderContainer>
              <StyledHeader as="h3">What is an eSIM?</StyledHeader>
            </HeaderContainer>
            <StyledText>
              eSIM stands for "embedded SIM card." Like a traditional SIM, it's a tiny chip that
              identifies you as a mobile subscriber and connects you to a network. Unlike a
              traditional SIM, an eSIM is a digital SIM that allows you to activate a cellular plan
              from your carrier without having to use a physical SIM card. For smartphone or tablet,
              the eSIM is often referred to as just a software profile that is downloaded via a QR
              code. eSIMs are widely used in international roaming and are supported by most major
              carriers worldwide.
            </StyledText>
            <HeaderContainer>
              <StyledHeader as="h3">How does it work?</StyledHeader>
            </HeaderContainer>
            <StyledText>
              You can think of an eSIM as a digital SIM card. It's a reprogrammable chip that allows
              you to download data on the go. You don't need to find a SIM vendor or fiddle with a
              physical card to change your carrier or data plan. Instead, you can purchase and
              download an eSIM data plan and instantly connect to a mobile network.
            </StyledText>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Carousel />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </StyledSegment>
  </Container>
);

export default HowEsimWorks;
