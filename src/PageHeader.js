import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { User } from './User'


const Container = styled.div`
  height: 65px;
  background-color: #fff;
`;

const StyledFlex = styled(Flex)`

border: 4px solid blue;
flex-direction:row;
justify-content:flex-end
`;

class PageHeader extends React.Component {

  render() {
    const {
      children,
    } = this.props;

    return (
      <Container>
        <StyledFlex >

          {children}<User />

        </StyledFlex>
      </Container>
    );
  }
}


export default PageHeader
