import Section3Component from "./wrap/Section3Component";
import Section5Component from "./wrap/Section5Component";
import Subunderwear from "./wrap/Sub/Subunderwear";
import React from 'react';
import Sub2 from "./wrap/Sub/Sub2";
import SubTotal from "./wrap/Sub/SubTotal";
import Inform from "./wrap/Sub/Inform";

export default function Wrapcomponent(){
    return (
        <div>

            <Inform />
            <SubTotal />
            <Subunderwear />
            <Sub2 />

            <Section3Component />
            <Section5Component />

        </div>
    );
};