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
justify: flex-end;
border: 1px solid blue;
`;

class PageHeader extends React.Component {

  render() {
    const {
      children,
    } = this.props;

    return (
      <Container>
        <Flex direction="column">
          <StyledFlex flex="1 0 auto" px={[12, 18]}>
            {children}
          </StyledFlex>
        </Flex>
      </Container>
    );
  }
}


export default PageHeader
