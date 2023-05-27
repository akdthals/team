import React from "react";
import $ from "jquery";
export default function Section1Component() {
  // 섹션1 컴포넌트 메인 슬라이드
  React.useEffect(() => {
    const $slideContainer = $("#section1 .slide-container");
    const $slideWrap = $("#section1 .slide-wrap");
    const $slide = $("#section1 .slide");
    const $slidea = $("#section1 .slide a");
    const $leftArrorwBtn = $("#section1 .left-arrow");
    const $rightArrorwBtn = $("#section1 .right-arrow");
    const $dynamicBar = $("#section1 .dynamic-bar");

    let cnt = 0;
    let n = $slide.length - 2; //23
    let setId = 0;

    //1. 메인슬라이드함수
    function mainSlide() {
      // console.log( cnt );
      $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 300, function () {
        if (cnt >= n) {
          cnt = 0;
        }
        if (cnt < 0) {
          cnt = n - 1;
        } // 23-1 (0~22)
        $slideWrap.stop().animate({ left: `${-100 * cnt}%` }, 0);
      });
      $dynamicBar.stop().animate({ left: `${20 * cnt}` }, 0, function () {
        if (cnt >= n) {
          cnt = 0;
        }
        if (cnt < 0) {
          cnt = n - 1;
        }
        $dynamicBar.stop().animate({ left: `${20 * cnt}%` }, 0);
      });
    }

    //2-1. 다음카운트함수
    function nextCount() {
      cnt++;
      mainSlide();
    }

    //2-2. 이전카운트함수
    function prevCount() {
      cnt--;
      mainSlide();
    }

    //3. 자동타이머함수
    function autoTimer() {
      clearInterval(setId);
      setId = setInterval(nextCount, 3000);
    }
    autoTimer();

    // 4. 슬라드 콘테이너 박스에 마우스 오버시 슬라이드 일시정지
    $slideContainer.on({
      mouseenter() {
        clearInterval(setId);
        // $leftArrorwBtn.stop().fadeIn(1000);
        // $rightArrorwBtn.stop().fadeIn(1000);
      },
      mouseleave() {
        // $leftArrorwBtn.stop().fadeOut(1000);
        // $rightArrorwBtn.stop().fadeOut(1000);
        autoTimer();
      },
    });

    // 6-1. 다음화살버튼클릭이벤트
    $rightArrorwBtn.on({
      click(e) {
        e.preventDefault();
        if (!$slide.is(":animated")) {
          nextCount();
          clearInterval(setId);
        }
      },
    });

    // 6-2. 이전화살버튼클릭이벤트
    $leftArrorwBtn.on({
      click(e) {
        e.preventDefault();
        if (!$slide.is(":animated")) {
          prevCount();
          clearInterval(setId);
        }
      },
    });

    // 디버깅
    $slidea.on({
      click(e) {
        e.preventDefault();
      },
    });
  }, []);

  return (
    <section id="section1">
      <div className="container">
        <div className="gap">
          <div className="content">
            <div className="slide-container">
              <div className="slide-view">
                <ul className="slide-wrap">
                  <li className="slide slide5">
                    <a href="!#">
                      <img src="./img/CYS/intro/fila_img013.jpg" alt="" />
                      <div className="text-box white">
                        <h4>FILA TENNIS COLLECTION</h4>
                        <span>컬렉션 보기</span>
                      </div>
                    </a>
                  </li>
                  <li className="slide slide1">
                    <a href="!#">
                      <img src="./img/CYS/intro/fila_img014.jpg" alt="" />
                      <div className="text-box black">
                        <h4>Drifter Tube</h4>
                        <span>컬렉션 보기</span>
                      </div>
                    </a>
                  </li>
                  <li className="slide slide2">
                    <a href="!#">
                      <img src="./img/CYS/intro/fila_img015.jpg" alt="" />
                      <div className="text-box white">
                        <h4>2023 French Open</h4>
                        <span>컬렉션 보기</span>
                      </div>
                    </a>
                  </li>
                  <li className="slide slide3">
                    <a href="!#">
                      <img src="./img/CYS/intro/fila_img016.jpg" alt="" />
                      <div className="text-box white">
                        <h4>
                          FILA
                          <br />
                          SPORTS LIFE
                        </h4>
                        <span>컬렉션 보기</span>
                      </div>
                    </a>
                  </li>
                  <li className="slide slide4">
                    <a href="!#">
                      <img src="./img/CYS/intro/fila_img012.jpg" alt="" />
                      <div className="text-box white">
                        <h4>DAILY SHOES RAYFLIDE</h4>
                        <span>컬렉션 보기</span>
                      </div>
                    </a>
                  </li>
                  <li className="slide slide5">
                    <a href="!#">
                      <img src="./img/CYS/intro/fila_img013.jpg" alt="" />
                      <div className="text-box white">
                        <h4>FILA TENNIS COLLECTION</h4>
                        <span>컬렉션 보기</span>
                      </div>
                    </a>
                  </li>
                  <li className="slide slide1">
                    <a href="!#">
                      <img src="./img/CYS/intro/fila_img014.jpg" alt="" />
                      <div className="text-box black">
                        <h4>Drifter Tube</h4>
                        <span>컬렉션 보기</span>
                      </div>
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
                    <button className="left-arrow"></button>
                    <button className="right-arrow"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
