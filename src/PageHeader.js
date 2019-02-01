import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';


const Container = styled.div`
  height: 65px;
  background-color: #fff;
`;


class PageHeader extends React.Component {

  render() {
    const {
      children,
    } = this.props;


    debugger

    return (
      <Container>
        <Flex direction="row">
          <Flex
            pl={[0, 18]}
            width={[1, 'auto']}
            justify={['center', 'flex-start']}
            align="center"
          >
                pageheader standard
          </Flex>

          <Flex align="center" justify="flex-end" flex="1 0 auto" px={[12, 18]}>
            {children}
          </Flex>
          
        </Flex>
      </Container>
    );
  }
}


export default PageHeader
