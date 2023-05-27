import React from 'react';
import $ from 'jquery';

export default function Section3Component(){

    React.useEffect(()=>{
        let cnt = 0;
        let setId = 0; // 메모리에 할당된 인덱 번호를 저장한다.

        // 1. 메인슬라이드함수 
        function mainSlide(){

            $('#section3 .slide-wrap').stop().animate({left: `${-100*cnt}%` }, 100, function(){
                if(cnt > 3) cnt=3;  // 슬라이드 14개인데 0부터 세면 0,1,2...13이 된다 
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
        $('#section3').on({
            mousedown(e){
                console.log('#section3 .mousedown');
                winWidth =  $(window).innerWidth();
                clearInterval(setId);
                mouseDown=true; //마우스 다운 알림
                touchStart = e.clientX;
                dragStart = e.clientX - $('#section3 .slide-wrap').offset().left.winWidth;
            },
            mouseup(e){
                touchEnd = e.clientX;                    
                if( touchStart-touchEnd > 0 ){
                    if( !$('#section3 .slide-wrap').is(':animated') ){
                        if(cnt<3){
                            nextCount();
                        }
                        else{
                            mainSlide();
                        }
                    }
                }
                if( touchStart-touchEnd < 0 ){
                    if(mouseDown===false) return;
                    if( !$('#section3 .slide-wrap').is(':animated') ){
                        if(cnt>0){
                            prevCount();
                        }
                        else {
                            mainSlide();
                        }
                    }
                }

                if(touchStart-touchEnd === 0){
                    $('#section3 .slide-wrap').css({pointerEvents: 'auto'});
                }
                else {
                    $('#section3 .slide-wrap').css({pointerEvents: 'none'});
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

                $('#section3 .slide-wrap').css({left: dragEnd-dragStart });
            }
        });
    })





    return (
        <section id="section3">
            <div className="container">
                <div className="slide-container">
                    <div className="slide-view">
                        <ul className='slide-wrap'>
                            <li className='slide slide1'>
                                <div className="img-box">
                                    <a href="#"><img src="./img/KHB/starter-for-tennis_30.jpg" alt="" /></a>
                                </div>
                                <div className="txt-box">
                                    <p className='tit'>ACC for My first court</p>
                                    <p className='txt'>테니스 비기너를 위한 ACC</p>
                                    <div className="btn"><a href="#">자세히 보기</a></div>
                                </div>
                            </li>
                            <li className='slide slide2'>
                                <div className="img-box">
                                    <a href="#"><img src="./img/KHB/img_M_top_pantscollection_d_230404_20.jpg" alt="" /></a>
                                </div>
                                <div className="txt-box">
                                    <p className='tit'>LIFE STYLE PANTS</p>
                                    <p className='txt'>편안함이 돋보이는 라이프 스타일 팬츠 컬렉션</p>
                                    <div className="btn"><a href="#">자세히 보기</a></div>
                                </div>
                            </li>
                            <li className='slide slide3'>
                                <div className="img-box">
                                    <a href="#"><img src="./img/KHB/img_M_top_og_d_230227_50.jpg" alt="" /></a>
                                </div>
                                <div className="txt-box">
                                    <p className='tit'>FILA TENNIS HERITAGE</p>
                                    <p className='txt'>비욘 보그와 함께한 영광의 순간을 재현한 휠라 테니스 헤리티지</p>
                                    <div className="btn"><a href="#">자세히 보기</a></div>
                                </div>
                            </li>
                            <li className='slide slide4'>
                                <div className="img-box">
                                    <a href="#"><img src="./img/KHB/img_M_top_og_d_230217_32.jpg" alt="" /></a>
                                </div>
                                <div className="txt-box">
                                    <p className='tit'>ORIGINAL TENNIS OG 1985</p>
                                    <p className='txt'>1985년 FILA의 최초 출시된 테니스화</p>
                                    <div className="btn"><a href="#">자세히 보기</a></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};