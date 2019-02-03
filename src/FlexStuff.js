import React, { PureComponent } from 'react';
import { Flex, Box } from 'rebass';
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
border: 4px solid green
margin-right:0px
 
`;

export class FlexStuff extends PureComponent {
  render() {
    const PortalContent = (
          <SearchContainer>
           hello header from flexstuff
          </SearchContainer>
    );

    return [
      <Box >
              this is FlexStuff basic content
      </Box>,
      ReactDOM.createPortal(PortalContent, HEADER_CONTAINER),
    ];
  }
}

export default FlexStuff;
