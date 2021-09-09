import React from 'react';
import { RootCard, Card, CardContent } from './style';

export default function MainContent({content}) {
    return (
        <React.Fragment>
            <RootCard>
                <Card style={{ background: content.color }}> 
                    <CardContent style={{ fontWeight: 'bold' }}>
                        { content.title }
                    </CardContent>
                    <CardContent>
                        { content.paragraph }
                    </CardContent>
                </Card>
            </RootCard>
        </React.Fragment>
    )
}