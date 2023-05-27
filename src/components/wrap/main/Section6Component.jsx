import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import Section6ChildComponent from './Section6ChildComponent'

export default function Section6Component () {

    const [state, setState]= React.useState({
        고객님을위한추천상품:[]
    });

    const  getProduct=()=>{
        axios({
            url:'./data/section6.json',
            maethod:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                고객님을위한추천상품:res.data.고객님을위한추천상품
            })
        })
        .catch((err)=>{
            console.log("AXIOS  오류" + err);
        })
    }
    React.useEffect(()=>{
        getProduct();
    },[]);

    

    return (
       
            <section id='section6'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>고객님을 위한 추천 상품</h2>
                        </div>
                        <div className="content">

                            <Section6ChildComponent 고객님을위한추천상품={state.고객님을위한추천상품}/> 

                        </div>
                    </div>
                </div>
            </section>
       
    );
};

