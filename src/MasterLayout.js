import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import { Body, BodyWrapper } from './Body';
import {Box} from 'grid-styled'


// Site Elements
import PageHeader  from './PageHeader';
export const PORTAL_ID = 'portal-container-header';
export const PORTAL_CONTAINER = document.createElement('div');
PORTAL_CONTAINER.setAttribute('id', PORTAL_ID);

export class MasterLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);

    this.container = PORTAL_CONTAINER;
  }

  componentDidMount() {
    //debugger
    this.portalRoot.appendChild(this.container);
  }
  componentWillUnmount() {
    this.portalRoot.removeChild(this.container);
  }

  render() {
    const { children } = this.props;
  
    //debugger

    return (
      <BodyWrapper>
        <Body>
          <Header>
            <PageHeader>
              <div
                ref={portalRoot => {
                  this.portalRoot = portalRoot;
                }}
              />
            </PageHeader>
          </Header>
          <Box>{children}</Box>
          
        </Body>
      </BodyWrapper>
    );
  }
}
