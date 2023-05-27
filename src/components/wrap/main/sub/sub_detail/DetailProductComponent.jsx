import React from 'react';
import $ from 'jquery';
export default function DetailProductComponent(){

    const [state,setState] = React.useState({
        cnt:1,
        price:75000,
        total:0
    });


    React.useEffect(()=>{
        let total = 0;
        total = state.cnt * state.price;
        setState({
            ...state,
            total:total
        })

    },[state.cnt]);

    const onClickMinus=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:state.cnt-1
        });
    }
    const onClickPlus=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            cnt:state.cnt+1
        });
    }

  React.useEffect(()=>{ 
    let cnt=0;
    let setId=0; // 메모리에 할당된 인덱스 번호를 저장한다.
    const $slideWrap = $('#detailProduct .slide-wrap');

    // 1. 메인슬라이드함수
    function mainSlide(){
        $slideWrap.stop().animate({left: `${cnt*-100}%`},1000,function(){
            if(cnt>3){cnt=0}; // 슬라이드 3개 0 1 2
            if(cnt<0){cnt=3}; // 첫번째 왼쪽으로 이동하면 마지막 슬라이드
            $slideWrap.animate({left: `${cnt*-100}%`},0); // 처음으로 리턴
            console.log(cnt);
        })

        // 슬라이드박스 좌표 구하기
        // console.log(cnt,$('.slide-wrap').offset().left);

        // 페이지네이션 함수
        pageNation();
    }
    // 2-1. 다음카운터함수
    function nextCounter(){
        cnt++;
        mainSlide();
    }
    // 2-2. 이전카운터함수
    function prevCounter(){
        cnt--;
        mainSlide();
    }
    // 3. 자동타이머함수
    // function autoTimer(){
    //     setId=setInterval(nextCounter, 3000);
    //     // console.log(setId)
    // }
    // autoTimer();

    // 4. 다음슬라이드, 이전슬라이드
    // 타이머 일시정지
    // 좌우 화살버튼에 마우스 올리면
    // 슬라이드 컨테이너 박스에 마우스 올리면(마우스오버 mouseover === mouseenter)
    // 슬라이드 컨테이너 박스에 마우스 떠나면(마우스아웃 mouseout === mouseleave)
    // $('.arrow-next-btn').on({
    //     mouseenter(){
    //         clearInterval(setId);
    //     },
    //     mouseleave(){
    //         // autoTimer();
    //     },
    //     click(){ // !가 앞에 붙으면 부정형, :는 어떤 속성인지 명시
    //         // 슬라이드 랩퍼박스가 애니메이션이 진행 중이 아니면 다음슬라이드 호출
    //         if( !$('.slide-wrap').is(':animated')){
    //             nextCounter(); // 다음슬라이드
    //         }
    //     }
    // });
    // $('.arrow-prev-btn').on({
    //     mouseenter(){
    //         clearInterval(setId);
    //     },
    //     mouseleave(){
    //         // autoTimer();
    //     },
    //     click(){
    //         // 슬라이드 랩퍼박스가 애니메이션이 진행 중이 아니면 이전슬라이드 호출
    //         if( !$('.slide-wrap').is(':animated')){
    //             prevCounter() // 이전슬라이드
    //         }
    //     }
    // });

// 5. 터치 스와이프 & 드.드
// 터치는 section1
// 마우스로 우측에서 좌측으로 터치하면 방향을 계산하는 알고리즘
// 마우스로 좌측에서 우측으로 터치하면 방향을 계산하는 알고리즘



// mousedown, mouseup 실행시 console에 있는 event값 안에 있는 clientX값을 구한뒤 (터치시작값-끝값) 을 0을 기준으로 크면 다음슬라이드, 작으면 이전슬라이드로 설정하고 clearInterval(setId)를 사용하여 설정해놓은 애니메이션 구현중 중복되어 움직이지않게 구현

let touchStart = 0;
let touchEnd = 0;
let mouseDown = false; // 마우스 다운하면 true; 아니면 false;
let dragStart = 0;
let dragEnd = 0;
let winWidth = $(window).innerWidth();

// 데스크탑
$('.slide-container').on({
    mousedown(event){
        winWidth = $(this).innerWidth();
        clearInterval(setId); // 슬라이드 이동멈추는 
        // console.log('마우스다운'); // 터치끝
        // console.log(event);
        // console.log(event.clientX);
        mouseDown=true; // 마우스 다운 알림
        touchStart = event.clientX;
        dragStart = event.clientX +  $(this).offset().left/* -winWidth */;
        // console.log(dragStart);
    },
    mouseup(event){
        // console.log('마우스업'); // 터치 끝
        // console.log(event);
        // console.log(event.clientX);
        touchEnd=event.clientX;
        // console.log(touchStart-touchEnd); // 터치 시작좌표 - 터치 끝좌표
        if(touchStart-touchEnd > 0){
            console.log('다음슬라이드');
            //    nextCounter();
            if( !$slideWrap.is(':animated')){
                nextCounter();
            }
        }
        if(touchStart-touchEnd < 0){
            console.log('이전슬라이드');
                // prevCounter();
            if(!$slideWrap.is(':animated')){
                prevCounter();
            }
        }
        mouseDown=false; // 마우스 다운 알림
    },
    // 터치 드래그 앤 드롭
    // mousemove는 mouse를 계속 따라다니기 때문에 mouseDown이 되었을때(true) 실행하고, mouseup에서 끝내야한다(false). 따라서 mouseDown 변수를 지정해서 mousedown 실행시 ture값을, mouseup 실행시 false값을 넣어주고

    mousemove(e){ // 마우스 방향에 따라다닌다.
        if(mouseDown!==true) return;
        // console.log(e.clientX);
        // 마우스가 다운되면 그 때부터 따라다녀야한다.
        // 마우스 다운할때 변수에 다운상태를 저장한다.
        // 만약 마우스 다운상태가 아니면 마우스 무브는 취소해야한다.
        dragEnd =  e.clientX;
        console.log('mouse move 지점'+( dragEnd-dragStart))
        $slideWrap.css({left: dragEnd-dragStart})
    }
});

// 6. 태블릿 모바일 손가락으로 터치
// $('#section1').on({
//         touchstart(event){ // =mousedown
//         winWidth = $(window).innerWidth();
//         clearInterval(setId); // 슬라이드 이동멈추는 
//         // console.log('마우스다운'); // 터치끝
//         // console.log(event);
//         // console.log(event.clientX);
//         mouseDown=true; // 마우스 다운 알림
//         console.log(event)
//         touchStart = event.originalEvent.changedTouches[0].clientX;
//         dragStart = event.originalEvent.changedTouches[0].clientX -  $('.slide-wrap').offset().left-winWidth;
//         console.log('손가락 터치시작',touchStart = event.originalEvent.changedTouches[0].clientX);
//     },
//     touchend(event){ // =mouseup
//         // console.log('마우스업'); // 터치 끝
//         // console.log(event);
//         // console.log(event.clientX);
//         touchEnd=event.originalEvent.changedTouches[0].clientX;
//         // console.log(touchStart-touchEnd); // 터치 시작좌표 - 터치 끝좌표
//         if(touchStart-touchEnd > 0){
           
//             console.log('다음슬라이드');
//             if( !$('.slide-wrap').is(':animated')){
//                 nextCounter()
//             }
//         }
//         if(touchStart-touchEnd < 0){
//             console.log('이전슬라이드');
//             if(!$('.slide-wrap').is(':animated')){
//                 prevCounter()
//             }
//         }
//         mouseDown=false; // 마우스 다운 알림
//         console.log('손가락 터치끝');
//     },
//     // 터치 드래그 앤 드롭
//     // mousemove는 mouse를 계속 따라다니기 때문에 mouseDown이 되었을때(true) 실행하고, mouseup에서 끝내야한다(false). 따라서 mouseDown 변수를 지정해서 mousedown 실행시 ture값을, mouseup 실행시 false값을 넣어주고

//         touchmove(e){ // =mousemove
//         if(mouseDown===false) return;
//         console.log(e.clientX);
//         // 마우스가 다운되면 그 때부터 따라다녀야한다.
//         // 마우스 다운할때 변수에 다운상태를 저장한다.
//         // 만약 마우스 다운상태가 아니면 마우스 무브는 취소해야한다.
//         dragEnd =  e.originalEvent.changedTouches[0].clientX;
//         console.log(dragEnd-dragStart)
//         $('.slide-wrap').css({left: dragEnd-dragStart})
//     }
// });

// 7.메인슬라이드 페이지네이션 함수 ==> 메인슬라이드 함수와 연결
// eq = nth child
function pageNation(){
    // console.log(cnt>2 ? 0:cnt );
    $('.page-btn').removeClass('on'); // 해당하지않는 번호 클래스 삭제 / 페이지버튼 모두 클래스 삭제
    $('.page-btn').eq(cnt>2?0:cnt).addClass('on'); // 현재슬라이드 번호에만 클래스추가
};

// 8. 페이지버튼 클릭 이벤트

// 슬라이드 첫번째
// $('.page-btn').eq(0).on({
//     click(e){
//         e.preventDefault();
//         clearInterval(setId);
//         cnt=0;
//         // 메인슬라이드함수() 호출
//         mainSlide();
//     }
// });

// // 슬라이드 두번째
// $('.page-btn').eq(1).on({
//     click(e){
//         e.preventDefault();
//         clearInterval(setId);
//         cnt=1;
//         // 메인슬라이드함수() 호출
//         mainSlide();
//     }
// });

// // 슬라이드 세번째
// $('.page-btn').eq(2).on({
//     click(e){
//         e.preventDefault();
//         clearInterval(setId);
//         cnt=2;
//         // 메인슬라이드함수() 호출
//         mainSlide();
//     }
// });


// 페이지버튼 클릭 이벤트 선택자 배열처리
// $('.page-btn').each(function(idx){
//     // console.log(idx);
//     $(this).on({
//         click(e){
//             e.preventDefault(); // a링크 클릭시 화면 새로고침을 막아줌
//             clearInterval(setId);
//             cnt = idx; // cnt 전역변수값이 수정이 되면 메인함수 위에 전역함수 cnt가 위에있으므로 변경된값인 cnt가 메인함수로 들어감
//             // console.log(idx);
//             // console.log(cnt);
//             mainSlide();
//         }
//     });
// });
  });
   

  React.useEffect(()=>{
    // 카테고리 버튼 클릭 이벤트 : 토글 기능
    $('.new-member-more').on({
        click(e){
           e.preventDefault();
           $(this).next().stop().toggle();
           $(this).toggleClass('on');
        }
    });
},[]);



    return (
        <section id="detailProduct">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="product-img-box">
                            <div className="col-gap">
                                <ul className="img-box">
                                    <li><img src="./img/CYS/detail_product/FILA_product_detail12.jpg" alt="" /></li>
                                    <li><img src="./img/CYS/detail_product/FILA_product_detail13.jpg" alt="" /></li>
                                    <li><img src="./img/CYS/detail_product/FILA_product_detail14.jpg" alt="" /></li>
                                    <li><img src="./img/CYS/detail_product/FILA_product_detail15.jpg" alt="" /></li>
                                    <li><img src="./img/CYS/detail_product/FILA_product_detail16.jpg" alt="" /></li>
                                    <li><img src="./img/CYS/detail_product/FILA_product_detail17.jpg" alt="" /></li>
                                    <li><img src="./img/CYS/detail_product/FILA_product_detail18.jpg" alt="" /></li>
                                    <li><img src="./img/CYS/detail_product/FILA_product_detail19.jpg" alt="" /></li>
                                    <li><img src="./img/CYS/detail_product/FILA_product_detail20.jpg" alt="" /></li>
                                </ul>
                                <div className="video-box">
                                    <div className="video-gap">
                                        <video loop autoPlay playsInline >
                                            <source src="./video/FS3BPF5201X_OWH.mp4" type="video/mp4" />
                                        </video>
                                        <div className="video-under-text">
                                            <p>키 174cm / 착용 사이즈 M</p>
                                            <p>모델 착용 이미지보다 제품컷 이미지의 컬러가 정확합니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="model-img-box">
                                <h6>모델컷</h6>
                                {/* 모델 이미지 슬라이드 구현해야함 */}
                                <div className="slide-container">
                                    <div className="slide-view">
                                        <ul className="slide-wrap" /* style={{ left: `${-(100 * cnt)}%`}} */>
                                            <li className="slide slide1">
                                                <img src="./img/CYS/detail_product/FILA_product_detail23.jpg" alt="" />
                                            </li>
                                            <li className="slide slide2">
                                                <img src="./img/CYS/detail_product/FILA_product_detail24.jpg" alt="" />
                                            </li>
                                            <li className="slide slide3">
                                                <img src="./img/CYS/detail_product/FILA_product_detail25.jpg" alt="" />
                                            </li>
                                            <li className="slide slide4">
                                                <img src="./img/CYS/detail_product/FILA_product_detail26.jpg" alt="" />
                                            </li>
                                        </ul>
                                        <div className="page-nation-box">1234</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-info-box">
                            <div className="text-box">
                                <ul>
                                    <li><p>남녀공용</p></li>
                                    <li>WHITE LINE 라켓 백팩</li>
                                    <li>129,000원</li>
                                    <li>오버헤드라켓(~114 sp.in) 수납이 가능한 테니스 백팩입니다.</li>
                                    <li>등판 포켓에 라켓 2pcs 수납 가능 + 가방 메인 공간 1pcs 라켓 추가 수납이 가능합니다.</li>
                                    <li>가방 하단에 별도 포켓이 있어 신발을 분리하여 수납이 가능합니다.</li>
                                    <li>등판에는 통풍성이 뛰어난 에어메시 원단을 적용하여 쾌적하게 착용할 수 있습니다.</li>
                                    <li>테니스 활동 외에 여행 및 다양한 야외활동에도 적합한 아이템입니다.</li>
                                    <li>제품소재 : 겉감: 나일론 100% 안감: 폴리에스터 100%</li>
                                    <li>상품코드 : 1100FS3BPF5201XOWH</li>
                                    <li><a href="!#">상품 정보 고시</a></li>
                                    <li className="share-img"><img src="" alt="" /></li>
                                </ul>
                            </div>
                            <div className="option-box">
                                <div className="color-select-box">
                                    <p>컬러</p>
                                    {/* 개수 4개이상 되면 슬라이드로 구현해야할지도? */}
                                    <ul>
                                        <li><img src="./img/CYS/detail_product/FILA_product_detail28.jpg" alt="" /></li>
                                        <li><img src="./img/CYS/detail_product/FILA_product_detail29.jpg" alt="" /></li>
                                    </ul>
                                </div>
                                <div className="size-select-box">
                                    <ul>
                                        <li><p>사이즈</p></li>
                                        <li><a href="!#">매장재고현황</a></li>
                                    </ul>
                                    <div className="size-select-btn">
                                        <button>000</button>
                                    </div>
                                </div>
                                <div className="quantity-box">
                                    <button onClick={onClickMinus} className='minus'><img src="./img/CYS/detail_product/icon_minus.svg" alt="" /></button>
                                    <input name="" id="" type="number" value={state.cnt} />
                                    <button onClick={onClickPlus} className='plus'><img src="./img/CYS/detail_product/icon_plus.svg" alt="" /></button>
                                </div>
                                <div className="price-box">
                                    <ul>
                                        <li><p>주문금액</p></li>
                                        <li >{state.total}원</li>
                                    </ul>
                                </div>
                                <div className="buy-btn">
                                    <button className="now-buy">바로 구매하기</button>
                                    <ul>
                                        <li><button className='like-product'><img src="./img/CYS/detail_product/icon_heart.svg" alt="" /></button></li>
                                        <li><button className='cart-save'>카트담기</button></li>
                                    </ul>
                                </div>
                                <ul>
                                    <li className="new-member-more">
                                        <p className='more-open'>신규회원 10,000원 할인 쿠폰 발급</p>
                                    </li>
                                    <li className='more'>
                                        <span className='more-text'>가입 시 즉시발급 / 50,000원 이상 구매 시 사용가능</span>
                                    </li>
                                    <li className="product-review"><p>상품 리뷰</p></li>
                                    <li className="product-qna"><p>상품 문의</p></li>
                                    <li className="etc-info">
                                        <a href="!#">배송 정보</a><a href="!#">교환 및 반품</a><a href="!#">세탁방법</a><a href="!#">A/S</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};