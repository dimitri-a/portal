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

const SearchContainer = styled.div`
border: 4px dotted purple
margin-right:20px
`;

const StyledFlex = styled(Flex)`
justify-content: flex-end;
border: 4px brown solid;
margin-right:100px;
`;

export class FlexStuff extends PureComponent {
  render() {
    const PortalContent = (
          <SearchContainer>
            <StyledFlex>
                Flexstuff header
           </StyledFlex>
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
