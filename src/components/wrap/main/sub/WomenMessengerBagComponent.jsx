import axios from 'axios';
import React from 'react';

export default function WomenMessengerBagComponent(){

    const [state, setState] = React.useState({
        여성메신저백 : []
    });
    


    const commaPrice=(price)=>{
        let value = price.toString();
        const regExp = /(^\d+)(\d{3})/g;
        while(regExp.test(value)){
            return value.replace(regExp, '$1,$2');
        }
    };

    
    React.useEffect(()=>{
        axios({
            url:'./data/product.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                여성메신저백:res.data.여성메신저백
            })
        })
        .catch((err)=>{
            console.log('axios 실패'+err)
        })
    });




    return (
        <section className="product-section" id="womenMessengerBag">
            
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="filter-box"></div>
                        <div className="product-box">
                            {/* <WomenBackpackChildComponent 여성메신저백={state.여성메신저백} />
                             */}
                                <ul id='product-box'>
                                    {
                                        state.여성메신저백.map((item, idx)=>{ 
                                            return(
                                                <li key={item.제품코드}>
                                                    <div className="img-box">
                                                        <div className="main-img-box">
                                                            <img src={`./img/women_massenger_bag/${item.기본이미지}`} alt="" />
                                                        </div>
                                                        <div className="slide-container">
                                                            <div className="slide-view">
                                                                <ul className="slide-wrap">
                                                                    <li className="slide slide1">
                                                                        <a href="!#">
                                                                            <img src={`./img/women_massenger_bag/${item.슬라이드이미지1}`} alt="" />
                                                                        </a>
                                                                    </li>
                                                                    <li className="slide slide2">
                                                                        <a href="!#">
                                                                            <img src={`./img/women_massenger_bag/${item.슬라이드이미지2}`} alt="" />
                                                                        </a>
                                                                    </li>
                                                                    <li className="slide slide3">
                                                                        <a href="!#">
                                                                            <img src={`./img/women_massenger_bag/${item.슬라이드이미지3}`} alt="" />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <div className="page-nation-box">
                                                                    <div className="page-bar-box">
                                                                        <div className="static-bar">
                                                                            <div className="dynamic-bar"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="arrow-box">
                                                                        <button className={`left-arrow ${idx}`}></button>
                                                                        <button className={`right-arrow ${idx}`}></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="title-box">
                                                        <ul>
                                                            <li><p>{item.착용성별}</p></li>
                                                            <li><em>{item.제품명}</em></li>
                                                            <li><span>{`${commaPrice(Math.round(item.정가*(1-item.할인률)))}원`}</span></li>
                                                            <li className='favorite-product'>
                                                                <img src="./img/women_backpack/fila_women_backpack_img031.png" alt="" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>)
                                            })
                                        }
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};