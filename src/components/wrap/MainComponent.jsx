import React from 'react';
import Section1Component from './main/Section1Component'
import Section7Component from './main/Section7Component'
import WomenBackpackComponent from './main/sub/WomenBackpackComponent';
import WomenMessengerBagComponent from './main/sub/WomenMessengerBagComponent';
import DetailProductComponent from './main/sub/sub_detail/DetailProductComponent';
export default function MainComponent() {
    return (
        <main id='main'>
            <DetailProductComponent/>
            <Section1Component/>
            <Section7Component />
            <WomenBackpackComponent/>
            <WomenMessengerBagComponent/>
        </main>
    );
};

