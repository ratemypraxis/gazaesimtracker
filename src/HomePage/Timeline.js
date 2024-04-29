import React from 'react';
import { Chrono } from 'react-chrono';
import styled from 'styled-components';
import items from '../assets/data/timelineEvents.json';
import { color } from '../theme';
import { Header } from 'semantic-ui-react';

const Container = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledHeader = styled(Header)`
  font-size: 2em;
  margin-bottom: 2em;
`;

const StyledTimeline = styled.div`
  width: ${(prop) => (prop.isMobile ? '90%' : '60%')};
`;

const Timeline = () => {
  const isMobile = window.innerWidth <= 500;
  return (
    <Container>
      <StyledHeader as="h3" textAlign="center">
        What happened?
      </StyledHeader>
      <StyledTimeline isMobile={isMobile}>
        <Chrono
          items={items}
          mode={isMobile ? 'VERTICAL' : 'HORIZONTAL'}
          cardHeight={isMobile ? 300 : 400}
          cardWidth={isMobile ? 200 : 600}
          mediaHeight={isMobile ? 150 : 300}
          disableToolbar
          fontSizes={{
            cardText: '1rem',
            cardTitle: '1.2rem',
            title: '1.2rem',
          }}
          theme={{
            primary: color.black,
            secondary: color.green,
            cardTitleColor: color.white,
            cardBgColor: color.green,
            cardDetailsColor: color.grey,
            titleColor: color.black,
            titleColorActive: color.white,
          }}
        />
      </StyledTimeline>
    </Container>
  );
};

export default Timeline;
