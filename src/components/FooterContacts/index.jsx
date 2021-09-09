import React from 'react';
import { RootFooterContactCard, FooterContactCard, FooterContactCardContent } from './style';


export default function FooterContacts() {
  return (
    <React.Fragment>
      <RootFooterContactCard>
        <FooterContactCard>
          <FooterContactCardContent style={{ fontWeight: 'bold' }}>BLa
          </FooterContactCardContent>
        </FooterContactCard>
      </RootFooterContactCard>
    </React.Fragment>
  );
}
