import React from 'react';
import $ from 'jquery'

export default function Section4Component() {
    React.useEffect(()=>{
       
            let cnt = 0;
            let setId = 0; // 메모리에 할당된 인덱 번호를 저장한다.

            // 1. 메인슬라이드함수 
            function mainSlide(){

                $('#section4 .slide-wrap').stop().animate({left: `${-100*cnt}%` }, 800, function(){
                    if(cnt > 6) cnt=6;  // 슬라이드 3개 0 1 2 
                    if(cnt < 0) cnt=0;  // 첫번째 왼쪽으로 이동하면 마지막 슬라이드 
                });

                // 슬라이드박스 좌표 구하기
                // console.log(cnt, $('.slide-wrap').offset().left );

            }

            // 2-1. 다음카운트함수
            function nextCount(){
                    cnt++;
                    mainSlide();
                
            }
            // 2-2. 이전카운트함수
            function prevCount(){

                    cnt--;
                    mainSlide();
                
            }

            // 3. 자동타이머함수
            // function autoTimer(){
            //     // nextCount(); //즉시실행
            //     setId = setInterval(nextCount, 4000);  // 다음카운트함수 3초간격으로 호출하기
            //     // console.log( setId ); // 메모리 할당된 인덱번호 확인하기
            // }
            // autoTimer(); // 로딩시 실행

            // 5. 터치 스와이프
            //    터치는 section1
            //    마우스로 우측에서 좌측으로 터치하면 방향을 계산하는 알고리즘
            //    마우스로 좌측에서 우측으로 터치하면 방향을 계산하는 알고리즘
            let touchStart = 0;
            let touchEnd = 0;
            let mouseDown = false; // 마우드 다운하면 true 아니면 false
            let dragStart = 0;
            let dragEnd = 0;
            let winWidth =  $(window).innerWidth();

            // 데스크탑
            $('#section4').on({
                mousedown(e){
                    console.log('#section4 .mouseDown');
                    winWidth =  $(window).innerWidth();
                    clearInterval(setId);
                    mouseDown=true; //마우스 다운 알림
                    touchStart = e.clientX;
                    dragStart = e.clientX - $('#section4 .slide-wrap').offset().left;
                },
                mouseup(e){
                    console.log('mouseup');
                    touchEnd = e.clientX;                      
                    if( touchStart-touchEnd > 0){
                        if( !$('#section4 .slide-wrap').is(':animated') ){
                            if(cnt < 6.5){
                                nextCount();
                            }
                            else{
                                mainSlide();
                            }
                        }
                    }
                    if( touchStart-touchEnd < 0 ){
                        if( !$('#section4 .slide-wrap').is(':animated') ){
                            if(cnt > 0){
                                prevCount();
                            }
                            else{
                                mainSlide();
                            }
                        }
                    }
                    mouseDown=false; //마우스 드래그 끝났다 마우스 업이다.                    
                },
                mousemove(e){  //마우스 방향에 따라다닌다.
                    if(mouseDown===false) return;
                    console.log('#section4 .mousemove');
                    // 마우스가 다운되면 그 때 부터 따라다녀라
                    // 마우스다운할 때 변수에 다운상태를 저장한다.
                    // 만약 마우스 다운상태가 아니면 마우스 무브는 취소해라
                    dragEnd = e.clientX;
                    console.log( dragEnd-dragStart );

                    $('#section4 .slide-wrap').css({left: dragEnd-dragStart });
                }
            });  

    })

    return (
            <section id='section4'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <ul>
                                <li>
                                    <h2>추천 스타일</h2>
                                    <button>더보기</button> 
                                </li>
                            </ul>
                        </div>
                        <div className="content">
                            <div className="slide-container">
                                <div className="slide-view">
                                    <ul className="slide-wrap">
                                        <li className="slide slide1"></li>
                                        <li className="slide slide2"></li>
                                        <li className="slide slide3"></li>
                                        <li className="slide slide4"></li>
                                        <li className="slide slide5"></li>
                                        <li className="slide slide6"></li>
                                        <li className="slide slide7"></li>
                                        <li className="slide slide8"></li>
                                        <li className="slide slide9"></li>
                                        <li className="slide slide10"></li>
                                        <li className="slide slide11"></li>
                                        <li className="slide slide12"></li>
                                        <li className="slide slide13"></li>
                                        <li className="slide slide14"></li>
                                        <li className="slide slide15"></li>
                                        <li className="slide slide16"></li>
                                        <li className="slide slide17"></li>
                                        <li className="slide slide18"></li>
                                        <li className="slide slide19"></li>
                                        <li className="slide slide20"></li>
                                        <li className="slide slide21"></li>
                                        <li className="slide slide22"></li>
                                        <li className="slide slide23"></li>
                                        <li className="slide slide24"></li>
                                        <li className="slide slide25"></li>
                                        <li className="slide slide26"></li>
                                        <li className="slide slide27"></li>
                                        <li className="slide slide28"></li>
                                        <li className="slide slide29"></li>
                                        <li className="slide slide30"></li>
                                        <li className="slide slide31"></li>
                                        <li className="slide slide32"></li>
                                        <li className="slide slide33"></li>
                                        <li className="slide slide34"></li>
                                        <li className="slide slide35"></li>
                                        <li className="slide slide36"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};
