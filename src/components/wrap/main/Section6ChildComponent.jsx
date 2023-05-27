import React from 'react';
import $ from 'jquery'


export default function Section6ChildComponent  ({고객님을위한추천상품})  {

    const commaPrice=(price)=>{
        let value = price.toString();
        const regExp = /(^\d+)(\d{3})/g;
        while(regExp.test(value)){
            return value.replace(regExp, '$1, $2');
        }
    }

    const onClicklink=(e)=>{
        e.stopPropagation();
        alert()
        window.location.href= 'https://www.naver.com';
        // window.location.pathname= '/main1';
    }

    React.useEffect(()=>{
       
        let cnt = 0;
        let setId = 0; // 메모리에 할당된 인덱 번호를 저장한다.

        // 1. 메인슬라이드함수 
        function mainSlide(){

            $('#section6 .slide-wrap').stop().animate({left: `${-67*cnt}%` }, 800, function(){
                if(cnt > 2) cnt=2;  // 슬라이드 3개 0 1 2 
                if(cnt < 0) cnt=0;  // 첫번째 왼쪽으로 이동하면 마지막 슬라이드 
            });

            // 슬라이드박스 좌표 구하기
            // console.log(cnt, $('#section6 .slide-wrap').offset().left );

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
        $('#section6 .slide-container').on({
            mousedown(e){
                console.log('#section6 .mouseDown');
                winWidth =  $(window).innerWidth();
                clearInterval(setId);
                mouseDown=true; //마우스 다운 알림
                touchStart = e.clientX;
                dragStart = e.clientX - $('#section6 .slide-wrap').offset().left;
     
            },
            mouseup(e){
                
                console.log('mouseup');
                touchEnd = e.clientX;                      
                if( touchStart-touchEnd > 0){
                    if( !$('#section6 .slide-wrap').is(':animated') ){
                        if(cnt < 2){ // 다음 페이지 넘어 갔을때 흰 빈공간이 나오지 않도록 하기 위한 조건문
                            nextCount();
                        }
                        else{
                            mainSlide();
                        }
                    }
                }
                
                if( touchStart-touchEnd < 0 ){
                    if(mouseDown===false) return;
                    if( !$('#section6 .slide-wrap').is(':animated') ){
                        if(cnt > 0){ // // 이전 페이지로 넘길때 흰 빈공간이 나오지 않도록 하기 위한 조건문
                            prevCount();
                        }
                        else{
                            mainSlide();
                        }
                    }
                }

                if( touchStart-touchEnd === 0  ){
                    $('#section6 .slide-wrap').css({ pointerEvents: 'auto'}); // 클릭 가능
                }
                else{
                    $('#section6 .slide-wrap').css({ pointerEvents: 'none'}); // 클릭 불가
                }

                mouseDown=false; //마우스 드래그 끝났다 마우스 업이다.                    
               
            },
            mousemove(e){  //마우스 방향에 따라다닌다.
                if(mouseDown===false) return;
                console.log(mouseDown);

                // 마우스가 다운되면 그 때 부터 따라다녀라
                // 마우스다운할 때 변수에 다운상태를 저장한다.
                // 만약 마우스 다운상태가 아니면 마우스 무브는 취소해라
                dragEnd = e.clientX;
                console.log( dragEnd-dragStart );

                $('#section6 .slide-wrap').css({left: dragEnd-dragStart });
            }
        });  

})

    return (
        <div className="slide-container">
            <div className="slide-view">                    
                <ul className='slide-wrap'>
                {
                    고객님을위한추천상품.map((item)=>{
                        return(
                            <li onClick={onClicklink} className='slide' key={item.고객님을위한추천상품}>
                                
                                <div className="img-box">
                                        <img src={`./img/HSM/intro/${item.이미지}`} alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <ul>
                                            <li>
                                                <h4>{item.성별설명}</h4>
                                                <h5>{item.상품명}</h5>
                                                <div>
                                                <h3>{item.정가}원</h3><img src="./img/HSM/intro/ico_wish_off_18x16.png" alt="" />
                                                </div>
                                                <h2>{item.할인율}% 할인</h2>
                                            </li>
                                        </ul>
                                        <button>{item.장바구니}</button>
                                    </div>
                            </li>
                        )
                    })
                } 
                </ul>
            </div>
        </div>

    );
};

