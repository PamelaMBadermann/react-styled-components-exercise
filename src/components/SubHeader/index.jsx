import React from 'react';
import { CardSubHeader, CardSubHeaderContent, RootCardSubHeader } from './style';

export default function SubHeader({content}) {
    return (
        <React.Fragment>
            <RootCardSubHeader>
                <CardSubHeader style={{ background: content.color }}>
                    <CardSubHeaderContent style={{ fontWeight: 'bold' }}>
                        { content.title }
                    </CardSubHeaderContent>
                    <CardSubHeaderContent>
                        { content.paragraph }
                    </CardSubHeaderContent>
                </CardSubHeader>
            </RootCardSubHeader>
        </React.Fragment>
    )
}