import React from 'react';
import $ from 'jquery'

export default  function WomenSub1DetailComponent () {

    const commaPrice=(price)=>{
        let value = price.toString();
        const regExp = /(^\d+)(\d{3})/g
        while(regExp.test(value)){
          return value.replace(regExp, '$1, $2');
        }
      }

    const [state, setState] = React.useState({
        cnt:1,
        price:75000,
        newPrice:0
    } )

    const onClikcR =(e)=>{
        e.preventDefault();
        if(state.cnt<9){
            setState({
                ...state,
                cnt:state.cnt+1
            })
        }
        else{
            alert('9개 까지만 주문 가능합니다')
        }
    }
    const onClikcL =(e)=>{
        e.preventDefault();
        if(state.cnt<=1){
            alert('최소1개이상주문 가능합니다');
        }
        else {
            setState({
                ...state,
                cnt:state.cnt-1
            })
        }
    }

    React.useEffect(()=>{
        $('.category').on({
            click(e){
                e.preventDefault();
                $(this).next().stop().slideToggle();
                $(this).toggleClass('on')
            }
        })
    })

    React.useEffect(()=>{
        let newPrice = 0;

        newPrice=state.cnt * state.price
        setState({
            ...state,
            newPrice:newPrice
        })
    },[state.cnt])

    return (
        <main id='detail'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="img-box">
                            <img src="./img/HSM/women_sub1_detail/women_sub_detail12.jpg" alt="" />
                            <img src="./img/HSM/women_sub1_detail/women_sub_detail13.jpg" alt="" />
                            <img src="./img/HSM/women_sub1_detail/women_sub_detail14.jpg" alt="" />
                            <img src="./img/HSM/women_sub1_detail/women_sub_detail15.jpg" alt="" />
                            <img src="./img/HSM/women_sub1_detail/women_sub_detail16.jpg" alt="" />
                            <img src="./img/HSM/women_sub1_detail/women_sub_detail17.jpg" alt="" />
                            <img src="./img/HSM/women_sub1_detail/women_sub_detail18.jpg" alt="" />
                            <img src="./img/HSM/women_sub1_detail/women_sub_detail19.jpg" alt="" />
                        </div>
                        <div className="txt-box">
                            <div className="left-txt">
                                <ul>
                                    <li>
                                        <div>
                                            <h5>남녀공용</h5><img src="./img/HSM/women_sub1_detail/share1.svg" alt="" />
                                        </div>
                                        <h1>휠라 테이퍼 샌들 v3 테니스</h1>
                                        <h2>79,000원</h2>
                                        <p>
                                            *TAPER TIME : 경기나 대회에 좋은 컨디션으로 참가하기 위해 갖는 휴식 <br />
                                            <br />
                                            휠라의 베스트 샌들 중 하나인 테이퍼 샌들 v3의 테니스 버전입니다. <br />
                                            <br />
                                            썸머 테니스에 맞게 통통튀는 컬러감을 구성하였으며, 프로파일이 높은 미드솔을 사용하여 볼드한 연출이 가능한 샌들입니다. <br />
                                            <br />
                                            파일론 풋배드를 사용하여 쿠셔닝과 착화감이 뛰어나 리커버리 효과를 느낄 수 있습니다. <br />
                                            <br />
                                            벨크로를 사용하여 발등높이에 맞게 조절이 가능합니다.
                                        </p>
                                        <span>
                                            제품소재 : [UPPER] 겉감: 폴리에스터 100%, 합성가죽 / 안감: 폴리에스터93%+폴리우레탄7% / [SOLE] <br /> 합성고무
                                            <br /> 상품코드 : 11001SM01978F800
                                        </span>
                                        <a href="!#">
                                            <h3>상품 정보 고시</h3>
                                        </a>
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="right-txt">
                                        <h5>컬러</h5>
                                        <div className='img'>
                                            <ul>
                                                <li >
                                                    <img src="./img/HSM/women_sub1_detail/women_sub_detail12.jpg" alt="" />
                                                </li>
                                                <li>
                                                    <img src="./img/HSM/women_sub1_detail/women_sub_detail12.jpg" alt="" />
                                                </li>
                                                <li>
                                                    <img src="./img/HSM/women_sub1_detail/women_sub_detail12.jpg" alt="" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='size'>
                                            <div>
                                                <h4>사이즈</h4>
                                                <a href="!#"><h3>매장 재고 현황</h3></a>
                                            </div>
                                            <div className='label1'>
                                            <input  type="radio" id='userSize1' name='user_size' placeholder='220' value={220}/> 
                                            <label htmlFor="userSize1">
                                                <span>220</span>
                                            </label>
                                            <input type="radio" id='userSize2' name='user_size' placeholder='230' value={230}/>
                                            <label htmlFor="userSize2">
                                                <span>230</span>
                                            </label>
                                            <input type="radio" id='userSize3' name='user_size' placeholder='240' value={240}/> 
                                                <label htmlFor="userSize3">
                                                <span>240</span>
                                                </label>
                                                <input type="radio" id='userSize4' name='user_size' placeholder='250' value={250}/>
                                                <label htmlFor="userSize4">
                                                 <span>250</span>
                                                </label>
                                                <input type="radio" id='userSize5' name='user_size' placeholder='260' value={260}/>
                                                <label htmlFor="userSize5">
                                                 <span>260</span>
                                                </label>
                                                <input type="radio" id='userSize6' name='user_size' placeholder='270' value={270}/>
                                                <label htmlFor="userSize6">
                                                 <span>270</span>
                                                </label>
                                                <input type="radio" id='userSize7' name='user_size' placeholder='280' value={280}/>
                                                <label htmlFor="userSize7">
                                                 <span>280</span>
                                                </label>
                                            </div>
                                            
                                            
                                           
                                            
                                        </div>
                                        <div className='count'>
                                            <input type="text" id='' name='' placeholder='1' value={state.cnt}/>
                                            <ul>
                                                <li>
                                                    <div onClick={onClikcR} className='right'><img src="./img/HSM/women_sub1_detail/plus1.svg" alt="" /></div> 
                                                    <div onClick={onClikcL} className='left'><img src="./img/HSM/women_sub1_detail/minus1.svg" alt="" /></div> 
                                                    
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='price' >
                                            <h4>주문금액</h4>
                                            <h3>{commaPrice(state.newPrice)}원</h3>
                                        </div>
                                        <div className='btn1'>
                                            <button>바로구매하기</button>
                                        </div>
                                        <div className='btn2'>
                                            <i><img src="./img/HSM/women_sub1_detail/women_sub_detail32.png" alt="" /></i><button>카트담기</button>
                                        </div>
                                        <div className="select">
                                            <ul>
                                                <li className='category'>
                                                    <h5>신규회원 10,000원 할인 쿠폰 발급</h5>
                                                    <h4>가입 시 즉시발급 / 50,000원 이상 구매 시 사용가능</h4>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='review'>
                                            <h5>상품 리뷰 0</h5>
                                        </div>
                                        <div className='ask'>
                                            <h5>상품 문의 0</h5>
                                        </div>
                                        <div className='list'>

                                            <p>배송 정보</p>
                                            <p>교환 및 반품</p>
                                            <p>세탁방법</p>
                                            <p>A/S</p>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

