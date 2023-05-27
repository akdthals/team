import React from 'react';
import HeaderComponent from './wrap/HeaderComponent'
import MainComponent from './wrap/MainComponent'
import FooterComponent from './wrap/FooterComponent'

import WomenSub1Component from './wrap/WomenSub1Component'
import WomenSub2Component from './wrap/WomenSub2Component'
import WomenAllComponent from './wrap/WomenAllComponent'
import WomenSub1DetailComponent from './wrap/WomenSub1DetailComponent'

import MenSub1Component from './wrap/MenSub1Component'
import MenSub2Component from './wrap/MenSub2Component'
import MenAllComponent from './wrap/MenAllComponent'

import TestComponent from './wrap/TestComponent'

export default function WrapComponent (){


    return (
        <div id='wrap'>
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>

             <WomenSub1Component/> 
             <WomenSub2Component/>
             <WomenAllComponent/> 
             <WomenSub1DetailComponent/> 

             <MenSub1Component/> 
             <MenSub2Component/> 
             <MenAllComponent/> 
             <TestComponent/> 
        </div>
    );
};
