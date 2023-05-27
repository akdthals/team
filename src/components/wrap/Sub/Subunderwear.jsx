import React from 'react';
import SubunderwearChild from './SubunderwearChild';
import axios from 'axios';

export default function Subunderwear() {

    const [state, setState] = React.useState({
        온라인단독 : []
    });

    //온라인상품 제이슨 불러오기
    const getAlProduct=()=>{
        axios({
            url:'./data/underwear.json',
            method:'GET'
        })
        .then((res)=>{
            setState({
                ...state,
                온라인단독: res.data.온라인단독
            })
        })
        .catch((err)=>{
            console.log("AXIOS 오류!" + err);
        });
    }

    React.useEffect(()=>{
        getAlProduct();
    },[]);


    return (
        <div id="Subunderwear">
            <div className="container">
                <div className="gap">
                    {/* 헤더탑 */}
                    {/* <div className="header"></div> */}
                    <div className="title">
                        <div className="left-box">
                            <h1>WOMEN<img src="./img/KHB/arrow.svg" alt="" />언더웨<br></br>어</h1>
                        </div>
                        {/* 헤더아래 */}
                        <div className="right-box">
                            <div className='left'>
                                <a href="!#">필터-</a>
                                <i>|</i>
                                <a href="!#">비교</a>
                            </div>
                            <div className='right'>
                                <a href="!#">
                                    <select name="list" id="list">
                                        <option value="신상품순">신상품순</option>
                                        <option value="판매순">판매순</option>
                                        <option value="리뷰순">리뷰순</option>
                                        <option value="낮은가격순">낮은가격순</option>
                                        <option value="높은가격순">높은가격순</option>
                                    </select>
                                </a>
                                <i>|</i>
                                <div className='btn'>
                                    <a href="!#"><img src="./img/KHB/icon1.png" alt="" /></a>
                                    <a href="!#"><img src="./img/KHB/icon2.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 서브메인 */}
                    <div className="content">
                        <div className="category-box">
                            <div className="category">
                                        {/* 옷종류 */}
                                        <div className="category1">
                                            <ul>
                                                <li><a href="!#">전체</a></li>
                                                <li><a href="!#">티셔츠</a></li>
                                                <li><a href="!#">반바지</a></li>
                                                <li><a href="!#">바람막이/아노락</a></li>
                                                <li><a href="!#">트레이닝 세트</a></li>
                                                <li><a href="!#">팬츠</a></li>
                                                <li><a href="!#">스커트/원피스</a></li>
                                                <li><a href="!#">브라탑/레깅스</a></li>
                                                <li><a href="!#">후드티/맨투맨</a></li>
                                                <li><a href="!#">니트/스웨터</a></li>
                                            </ul>
                                        </div>
                                        {/* 스포츠 */}
                                        <div className="category2">
                                            <ul>
                                                <li><label htmlFor=""><input type="checkbox" name="" id="" />테니스</label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="" id="" />러닝</label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="" id="" />라이프스타일</label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="" id="" />트레이닝</label></li>
                                            </ul>
                                        </div>
                                        {/* 색상체크 체크박스 없애고 백그라운드로 이미지 넣기*/}
                                        <div className="category3">
                                            <button className='toggle-btn'>색상</button>
                                            <ul>
                                                <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BEIGE"/></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BLACK"/></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="color_choice" id="BLUE"/></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="color_choice" id="GREEN"/></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="color_choice" id="GREY"/></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="color_choice" id="PINK"/></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="color_choice" id="RED"/></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="color_choice" id="WHITE"/></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="color_choice" id="YELLOW"/></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="color_choice" id="ORANGE"/></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="color_choice" id="MIX"/></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="color_choice" id="NAVY"/></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="color_choice" id="NEON"/></label></li>
                                            </ul>
                                        </div>
                                        {/* 사이즈 */}
                                        <div className="category4">
                                            <button className='toggle-btn'>사이즈</button>
                                            <ul>
                                                <li><label htmlFor=""><input type="checkbox" name="size_choice" id="070"/><span>070</span></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="size_choice" id="075"/><span>075</span></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="size_choice" id="080"/><span>080</span></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="size_choice" id="085"/><span>085</span></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="size_choice" id="090"/><span>090</span></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="size_choice" id="095"/><span>095</span></label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="size_choice" id="100"/><span>100</span></label></li>
                                            </ul>
                                        </div>
                                        <div className="category5">
                                            <button className='toggle-btn'>가격</button>
                                            <ul>
                                                <li><label htmlFor=""><input type="checkbox" name="" id="" />39,000 이하</label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="" id="" />39,000~49,000</label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="" id="" />49,000~59,000</label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="" id="" />59,000~79,000</label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="" id="" />79,000 초과</label></li>
                                            </ul>
                                        </div>
                                        <div className="category6">
                                            <ul>
                                                <li><label htmlFor=""><input type="checkbox" name="" id="" />여성</label></li>
                                                <li><label htmlFor=""><input type="checkbox" name="" id="" />공용</label></li>
                                            </ul>
                                        </div>
                            </div>
                        </div>
                        {/* 상품리스트 */}
                        <div className="content-box">
                            <SubunderwearChild 온라인단독={state.온라인단독} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
