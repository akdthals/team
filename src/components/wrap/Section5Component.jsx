import React from 'react';
import $ from 'jquery';
import 'jquery.easing';

export default function Section5Component(){

    React.useEffect(()=>{
        let cnt = 0;
        let setId = 0; // 메모리에 할당된 인덱 번호를 저장한다.

        // 1. 메인슬라이드함수 
        function mainSlide(){

            $('#section5 .slide-wrap').stop().animate({left: `${-100*cnt}%` }, 100, function(){
                if(cnt > 13) cnt=13;  // 슬라이드 14개인데 0부터 세면 0,1,2...13이 된다 
                if(cnt < 0) cnt=0;  // 13번이 되면 0으로 돌아간다
            });

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


        // 5. 터치 스와이프
        //    마우스로 우측에서 좌측으로 터치하면 방향을 계산하는 알고리즘
        //    마우스로 좌측에서 우측으로 터치하면 방향을 계산하는 알고리즘
        let touchStart = 0;
        let touchEnd = 0;
        let mouseDown = false; // 마우드 다운하면 true 아니면 false
        let dragStart = 0;
        let dragEnd = 0;
        let winWidth =  $(window).innerWidth();

        // 데스크탑
        $('#section5').on({
            mousedown(e){
                console.log('#section5 .mousedown');
                winWidth =  $(window).innerWidth();
                clearInterval(setId);
                mouseDown=true; //마우스 다운 알림
                touchStart = e.clientX;
                dragStart = e.clientX - $('#section5 .slide-wrap').offset().left.winWidth;
            },
            mouseup(e){
                touchEnd = e.clientX;                    
                if( touchStart-touchEnd > 0 ){
                    if( !$('#section5 .slide-wrap').is(':animated') ){
                        if(cnt<13){
                            nextCount();
                        }
                        else {
                            mainSlide();
                        }
                    }
                }
                if( touchStart-touchEnd < 0 ){
                    if(mouseDown===false) return;
                    if( !$('#section5 .slide-wrap').is(':animated') ){
                        if(cnt>0){
                            prevCount();
                        }
                        else {
                            mainSlide();
                        }
                    }
                }

                
                if(touchStart-touchEnd === 0){
                    $('#section5 .slide-wrap').css({pointerEvents: 'auto'});
                }
                else {
                    $('#section5 .slide-wrap').css({pointerEvents: 'none'});
                }


                mouseDown=true; //마우스 드래그 끝났다 마우스 업이다.                    
            },
            mousemove(e){  //마우스 방향에 따라다닌다.
                if(mouseDown!==true) return;
                // 마우스가 다운되면 그 때 부터 따라다녀라
                // 마우스다운할 때 변수에 다운상태를 저장한다.
                // 만약 마우스 다운상태가 아니면 마우스 무브는 취소해라
                dragEnd = e.clientX;
                console.log( dragEnd-dragStart );

                $('section5 .slide-wrap').css({left: dragEnd-dragStart });
            }
        });
    })

    
    

    return (
        <section id="section5">
            <div className="container">
                <div className="title">
                    <div className="left-txt">
                        <h2>커뮤니티</h2>
                    </div>
                    <div className="right-txt">
                        <a href="#">더보기</a>
                    </div>
                </div>
                <div className="content">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className='slide-wrap'>
                                <li className='slide slide1'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis1.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>테니스의 기쁨 2</p>
                                        <p className='txt'>테니스가 좋아서 주말을 손꼽아 기다리는 사람들을 만났다.</p>
                                        <p className='category'>피플</p>
                                    </div>
                                </li>
                                <li className='slide slide2'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis2.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>광화문 세종대왕 동상 아래서 테니스를, <br />2023 화이트오픈 서울</p>
                                        <p className='txt'>휠라의 광화문 광장 新개념 테니스 축제</p>
                                        <p className='category'>아카이브</p>
                                    </div>
                                </li>
                                <li className='slide slide3'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis3.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>테니스의 기쁨 1</p>
                                        <p className='txt'>테니스가 좋아서 주말을 손꼽아 기다리는 사람들을 만났다.</p>
                                        <p className='category'>피플</p>
                                    </div>
                                </li>
                                <li className='slide slide4'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis4.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>테니스 코트별 특성 1.하드코트</p>
                                        <p className='txt'>하드코트는 말 그대로 딱딱한 코트를 의미한다.</p>
                                        <p className='category'>컬쳐</p>
                                    </div>
                                </li>
                                <li className='slide slide5'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis5.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>권순우 선수의 How to DROP SHOT</p>
                                        <p className='txt'>Lesson #4. DROP SHOT<br />권순우 선수처럼 드롭샷하기 </p>
                                        <p className='category'>How to tennis</p>
                                    </div>
                                </li>
                                <li className='slide slide6'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis6.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>권순우 선수의 How to BACKHAND</p>
                                        <p className='txt'>Lesson #3. BACKHAND<br />권순우 선수처럼 백핸드 하기</p>
                                        <p className='category'>How to tennis</p>
                                    </div>
                                </li>
                                <li className='slide slide7'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis7.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>관중의 매너가 테니스를 만든다.</p>
                                        <p className='txt'>Manners make tennis</p>
                                        <p className='category'>컬쳐</p>
                                    </div>
                                </li>
                                <li className='slide slide8'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis8.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>TENNIS HERITAGE<br />'TARGA FAMILIA'</p>
                                        <p className='txt'>타르가</p>
                                        <p className='category'>아카이브</p>
                                    </div>
                                </li>
                                <li className='slide slide9'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis9.png" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>권순우 선수의 How to  FOREHAND</p>
                                        <p className='txt'>Lesson #2. FOREHAND<br />권순우 선수처럼 포핸드하기</p>
                                        <p className='category'>How to tennis</p>
                                    </div>
                                </li>
                                <li className='slide slide10'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis10.png" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>권순우 선수의 How to SERVE</p>
                                        <p className='txt'>Lesson #1. SERVE<br />권순우 선수처럼 서브하기</p>
                                        <p className='category'>How to tennis</p>
                                    </div>
                                </li>
                                <li className='slide slide11'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis11.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>Own Heritage</p>
                                        <p className='txt'>ORIGINAL TENNIS OG 1985</p>
                                        <p className='category'>아카이브</p>
                                    </div>
                                </li>
                                <li className='slide slide12'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis12.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>테니스 치는 아나운서</p>
                                        <p className='txt'>테니스에 진심인 브랜드 휠라가 테니스를 좋아하는 사람들을 만났다.</p>
                                        <p className='category'>피플</p>
                                    </div>
                                </li>
                                <li className='slide slide13'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis13.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>실내 테니스장 VS 야외 테니스장</p>
                                        <p className='txt'>선수들의 경기에서 실내, 실외 경기 여부가 중요할까?</p>
                                        <p className='category'>컬쳐</p>
                                    </div>
                                </li>
                                <li className='slide slide14'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis14.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>테니스의 0점은 'LOVE'다</p>
                                        <p className='txt'>신사의 스포츠라고 불리는 테니스는 영국과 프랑스 귀족들이 즐기던 스포츠였다. </p>
                                        <p className='category'>컬쳐</p>
                                    </div>
                                </li>


                                <li className='slide slide1'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis1.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>테니스의 기쁨 2</p>
                                        <p className='txt'>테니스가 좋아서 주말을 손꼽아 기다리는 사람들을 만났다.</p>
                                        <p className='category'>피플</p>
                                    </div>
                                </li>
                                <li className='slide slide2'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis2.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>광화문 세종대왕 동상 아래서 테니스를, <br />2023 화이트오픈 서울</p>
                                        <p className='txt'>휠라의 광화문 광장 新개념 테니스 축제</p>
                                        <p className='category'>아카이브</p>
                                    </div>
                                </li>
                                <li className='slide slide3'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis3.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>테니스의 기쁨 1</p>
                                        <p className='txt'>테니스가 좋아서 주말을 손꼽아 기다리는 사람들을 만났다.</p>
                                        <p className='category'>피플</p>
                                    </div>
                                </li>
                                <li className='slide slide4'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis4.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>테니스 코트별 특성 1.하드코트</p>
                                        <p className='txt'>하드코트는 말 그대로 딱딱한 코트를 의미한다.</p>
                                        <p className='category'>컬쳐</p>
                                    </div>
                                </li>
                                <li className='slide slide5'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis5.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>권순우 선수의 How to DROP SHOT</p>
                                        <p className='txt'>Lesson #4. DROP SHOT<br />권순우 선수처럼 드롭샷하기 </p>
                                        <p className='category'>How to tennis</p>
                                    </div>
                                </li>
                                <li className='slide slide6'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis6.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>권순우 선수의 How to BACKHAND</p>
                                        <p className='txt'>Lesson #3. BACKHAND<br />권순우 선수처럼 백핸드 하기</p>
                                        <p className='category'>How to tennis</p>
                                    </div>
                                </li>
                                <li className='slide slide7'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis7.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>관중의 매너가 테니스를 만든다.</p>
                                        <p className='txt'>Manners make tennis</p>
                                        <p className='category'>컬쳐</p>
                                    </div>
                                </li>
                                <li className='slide slide8'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis8.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>TENNIS HERITAGE<br />'TARGA FAMILIA'</p>
                                        <p className='txt'>타르가</p>
                                        <p className='category'>아카이브</p>
                                    </div>
                                </li>
                                <li className='slide slide9'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis9.png" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>권순우 선수의 How to  FOREHAND</p>
                                        <p className='txt'>Lesson #2. FOREHAND<br />권순우 선수처럼 포핸드하기</p>
                                        <p className='category'>How to tennis</p>
                                    </div>
                                </li>
                                <li className='slide slide10'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis10.png" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>권순우 선수의 How to SERVE</p>
                                        <p className='txt'>Lesson #1. SERVE<br />권순우 선수처럼 서브하기</p>
                                        <p className='category'>How to tennis</p>
                                    </div>
                                </li>
                                <li className='slide slide11'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis11.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>Own Heritage</p>
                                        <p className='txt'>ORIGINAL TENNIS OG 1985</p>
                                        <p className='category'>아카이브</p>
                                    </div>
                                </li>
                                <li className='slide slide12'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis12.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>테니스 치는 아나운서</p>
                                        <p className='txt'>테니스에 진심인 브랜드 휠라가 테니스를 좋아하는 사람들을 만났다.</p>
                                        <p className='category'>피플</p>
                                    </div>
                                </li>
                                <li className='slide slide13'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis13.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>실내 테니스장 VS 야외 테니스장</p>
                                        <p className='txt'>선수들의 경기에서 실내, 실외 경기 여부가 중요할까?</p>
                                        <p className='category'>컬쳐</p>
                                    </div>
                                </li>
                                <li className='slide slide14'>
                                    <div className="img-box">
                                        <a href="#"><img src="./img/KHB/tennis14.jpg" alt="" /></a>
                                    </div>
                                    <div className="txt-box">
                                        <p className='tit'>테니스의 0점은 'LOVE'다</p>
                                        <p className='txt'>신사의 스포츠라고 불리는 테니스는 영국과 프랑스 귀족들이 즐기던 스포츠였다. </p>
                                        <p className='category'>컬쳐</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};