import React from 'react';
import HeaderComponent from './wrap/HeaderComponent'
import MainComponent from './wrap/MainComponent'
import FooterComponent from './wrap/FooterComponent'
import SubTestComponent from './wrap/main/sub/sub_detail/SubTestComponent';
import SubTestComponent2 from './wrap/main/sub/sub_detail/SubTestComponent2';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';

export default function WrapComponent (){
    return (
        <div id='wrap'>
            <HeaderComponent/>
            <BrowserRouter>
                    <Routes>
                        {/* <Route path='/' element={<HeaderComponent/>}>      */}
                            <Route index element={<MainComponent/>} />
                            <Route path='/header' element={<MainComponent />} />
                            <Route path='/test1' element={<SubTestComponent/>}/>
                            <Route path='/test2' element={<SubTestComponent2/>}/>
                        {/* </Route> */}
                    </Routes> 
            </BrowserRouter> 
            <FooterComponent/>
        </div>
    );
};
