import React, { PureComponent } from 'react';
import { Flex, Box } from 'grid-styled';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { PORTAL_CONTAINER as HEADER_CONTAINER } from './MasterLayout';
import { User } from './User'


const SearchWidgetWrapper = styled(Box).attrs({ px: 24, pt: 12 })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
const SearchWidgetContent = styled(Flex)`
  width: 100%;
  max-width: 1200px;
`;

const SearchContainer = styled(Box)`
  @media (max-width: 858px) {
    display: none;
  }
  @media (max-width: 1024px) {
    input {
      width: 110px;
    }
  }
`;

export class FlexStuff extends PureComponent {

  render() {

    const PortalContent = (
      <SearchWidgetWrapper>
        <SearchWidgetContent justify="flex-end" mx="auto">
          <SearchContainer>
           <Box>FlexStuff header content</Box>
          </SearchContainer>
        </SearchWidgetContent>
      </SearchWidgetWrapper>
    );

    return [
      <Box p={24} flex="1 0 auto" column>
              this is FlexStuff basic content
      </Box>,
      ReactDOM.createPortal(PortalContent, HEADER_CONTAINER),
    ];
  }
}

export default FlexStuff;
