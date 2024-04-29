import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import { color } from '../theme';

const StyledMenu = styled(Menu)`
  background-color: ${(props) => props.color} !important;
`;

const HeaderNavBar = () => {
  return (
    <StyledMenu fixed="top" inverted color={color.green}>
      <Container>
        <Menu.Item as="a" header>
          Gaza eSim Tracker
        </Menu.Item>
        <Menu.Item as="a">About Us</Menu.Item>
        <Menu.Item as="a">Donate eSims</Menu.Item>
      </Container>
    </StyledMenu>
  );
};

export default HeaderNavBar;
