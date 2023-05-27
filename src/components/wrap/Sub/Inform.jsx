import React from "react";
import $ from "jquery";
import axios from "axios";
import InformChild from "./InformChild";

export default function Inform() {
  const [state, setState] = React.useState({
    여성상세페이지: [],
    cnt:1,
    price:75000,
    newPrice:0
  });

  //  여성상세페이지이미지 제이슨 불러오기
  const getAlProduct = () => {
    axios({
      url: "./data/inform.json",
      method: "GET",
    })
      .then((res) => {
        setState({
          ...state,
          여성상세페이지: res.data.여성상세페이지,
        });
      })
      .catch((err) => {
        console.log("AXIOS 오류!" + err);
      });
  };

  React.useEffect(() => {
    getAlProduct();
  }, []);

  //////
  React.useEffect(() => {
    let cnt = 0;
    let setId = 0;
    const $pageBtn = $("#inform .page-btn");

    // 메인슬라이드
    function mainSlide() {
      $("#inform .slide-wrap")
        .stop()
        .animate({ left: `${-100 * cnt}%` }, 600, function () {});
      pageBtn();
    }

    // NextSlide
    function nextCount() {
      if (cnt < 2) {
        cnt++;
      }
      console.log(cnt);
      mainSlide();
      pageBtn();
    }
    // PrevSlide
    function prevCount() {
      if (cnt >= 0) {
        cnt--;
      }
      console.log(cnt);
      mainSlide();
      // pageBtn();
    }
    // function autoTimer(){
    //     setId = setInterval(nextCount,3000);
    // }
    // autoTimer();

    // 터치 스와이프(우측에서 좌측)
    let touchStart = 0;
    let touchEnd = 0;
    let mouseDown = false;
    let dragStart = 0;
    let dragEnd = 0;
    let winWidth = $(window).innerWidth();

    // 데스크탑
    $("#inform").on({
      mousedown(e) {
        winWidth = $(window).innerWidth();
        clearInterval(setId);
        mouseDown = true;
        touchStart = e.clientX;
        dragStart = e.clientX - $("#inform .slide-wrap").offset().left.winWidth;
        console.log(mouseDown);
      },
      mouseup(e) {
        touchEnd = e.clientX;
        if (touchStart - touchEnd > 0) {
          if (!$("#inform .slide-wrap").is(":animated")) {
            if (cnt < 2) {
              nextCount();
            } else {
              mainSlide();
            }
          }
        }
        if (touchStart - touchEnd < 0) {
          if (mouseDown === false) return;
          if (!$("#inform .slide-wrap").is(":animated")) {
            if (cnt > 0) {
              prevCount();
            } else {
              mainSlide();
            }
          }
        }
        if (touchStart - touchEnd === 0) {
          $("#inform .slide-wrap").css({ PointerEvent: "auto" });
        } else {
          $("#inform .slide-wrap").css({ PointerEvent: "none" });
        }
        mouseDown = false;
        console.log(mouseDown);
      },
      mousemove(e) {
        if (mouseDown === false) return;
        dragEnd = e.clientX;

        $("#inform .slide-wrap").css({ left: dragEnd - dragStart });
      },
    });

    // 페이지 버튼
    // const $pageBtn = $('#inform .page-btn');

    function pageBtn() {
      $pageBtn.removeClass("on");
      $pageBtn.eq(cnt > 2 ? 0 : cnt).addClass("on");
    }

    $pageBtn.each(function (idx) {
      // each 메소드 - 배열이나 객체를 매개변수로 받아 요소들을 검사하고 반복
      $(this).on({
        click(e) {
          console.log(idx);
          e.preventDefault();
          clearInterval(setId);
          cnt = idx;
          mainSlide();
        },
      });
    });
  });

  const commaPrice=(price)=>{
    let value = price.toString();
    const regExp = /(^\d+)(\d{3})/g
    while(regExp.test(value)){
      return value.replace(regExp, '$1, $2');
    }
  }

  // const [state, setState] = React.useState({
  //     cnt:1,
  //     price:75000,
  //     newPrice:0
  // } )

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

  return (
    <div id="inform">
      <div className="container">
        <div className="gap">
          {/* 헤더 탑 */}
          {/* <div className="header"></div> */}
          <div className="content">
            {/* 이미지 */}
            <div className="img-box">
              <div className="img-top">
                <InformChild 여성상세페이지={state.여성상세페이지} />
              </div>

              <div className="img-bottom1">
                <p className="tit tit1">LOOKBOOK</p>
                <div className="con1">
                  <div className="slide-container">
                    <div className="slide-view">
                      <ul className="slide-wrap">
                        <li className="slide">
                          <img src="./img/KHB/info/lookbook1.jpg" alt="" />
                        </li>
                        <li className="slide">
                          <img src="./img/KHB/info/lookbook2.jpg" alt="" />
                        </li>
                        <li className="slide">
                          <img src="./img/KHB/info/lookbook3.jpg" alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* 룩북 페이지버튼 */}
                  <div className="btn">
                    <button className="page-btn"></button>
                    <button className="page-btn"></button>
                    <button className="page-btn"></button>
                  </div>
                </div>
              </div>
              <div className="img-bottom2">
                <p className="tit tit2">드로즈 유형</p>
                <div className="con2">
                  <div className="drose drose1">
                    <img src="./img/KHB/info/fg_uw_bot04.jpg" alt="" />
                    <p>헴드로즈</p>
                  </div>
                  <div className="drose drose2">
                    <img src="./img/KHB/info/fg_uw_bot05.jpg" alt="" />
                    <p>사각드로즈</p>
                  </div>
                  <div className="drose drose3">
                    <img src="./img/KHB/info/fg_uw_bot06.jpg" alt="" />
                    <p>브리프</p>
                  </div>
                </div>
              </div>
              <div className="img-bottom3">
                <p className="tit tit3">정보</p>
                <div className="con3">
                  <div className="band1">허리밴드유형</div>
                  <div className="band2">
                    <div className="start"></div>
                    <div className="end"></div>
                  </div>
                  <div className="band2-txt">
                    <span>아웃밴드</span>
                    <span>인밴드</span>
                  </div>
                </div>
              </div>
              <div className="img-bottom4">
                <p className="tit tit4">실측사이즈</p>
                <div className="con4">
                  <p className="mini-tit">
                    단위 cm <img src="./img/KHB/info/!.svg" alt="" />
                  </p>
                  <table className="size-table">
                    <thead>
                      <tr>
                        <td className="black">사이즈</td>
                        <td>090</td>
                        <td>095</td>
                        <td>100</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="black">총기장</td>
                        <td>19.5</td>
                        <td>20.5</td>
                        <td>22.5</td>
                      </tr>
                      <tr>
                        <td className="black">허리</td>
                        <td>62</td>
                        <td>65</td>
                        <td>68</td>
                      </tr>
                      <tr>
                        <td className="black">허벅지</td>
                        <td>44</td>
                        <td>47</td>
                        <td>50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="img-bottom5">
                <p className="tit tit5">SET-UP</p>
              </div>
              <div className="img-bottom6">
                <p className="tit tit6">SET-UP</p>
              </div>
            </div>
            {/* 텍스트 */}
            <div className="txt-box">
              {/* 텍스트 왼쪽 */}
              <div className="txt-left">
                <div className="t1">
                  <p>여성</p>
                  <span>|</span>
                  <p>지속가능소재</p>
                  <img src="./img/KHB/info/drec.svg" alt="" />
                </div>
                <div className="t2">
                  <p>베이직 헴드로즈 5팩</p>
                </div>
                <div className="t3">
                  <p>가격칸입니다</p>
                </div>
                <div className="t4">
                  <p>스킨, 블랙 베이직 컬러의 HEM드로즈 5종 팩</p>
                  <br />
                  <br />
                  <p>
                    엉덩이를 감싸주며 라인이 비치지 않고 편안하게 착용
                    <br />
                    가능한 베이직 HEM드로즈입니다.
                  </p>
                  <br />
                  <br />
                  <p>
                    흡습속건 기능이 우수한 지속가능 소재 `에코론’ 원단
                    <br />을 사용하여 빠른 땀흡수와 우수한 통기성으로 쾌적한
                    <br /> 착용감을 느낄 수 있습니다.
                  </p>
                  <br />
                  <br />
                  <p>
                    얇고 부드러운 피콧 로고 아웃밴드가 압박없이 편하게
                    <br /> 감싸줍니다.
                  </p>
                </div>
                <div className="t5">
                  <p>
                    제품소재 : 원단1: 폴리에스터 89% 폴리우레탄 11%,
                    <br /> 원단2: 나일론 70% 폴리우레탄 30% 원단3: 면 100%
                  </p>
                  <p>상품코드 : 1170FI4DRF1491FSKN</p>
                </div>
                <div className="t6">
                  <p>상품 정보 고시</p>
                </div>
              </div>
              {/* 텍스트오른쪽 */}
              <div className="txt-right">
                <div className="rt1">
                  <p>컬러</p>
                </div>
                <div className="rt2">
                  <img src="./img/KHB/info/smallimg.jpg" alt="" />
                </div>
                <div className="rt3">
                  <div className="size">사이즈</div>
                  <div className="jaego">매장 재고 현황</div>
                </div>
                <div className="rt4">
                  <div className="label1">
                    <input
                      type="radio"
                      id="userSize1"
                      name="user_size"
                      placeholder="220"
                      value={220}
                    />
                    <label htmlFor="userSize1">
                      <span>090(S)</span>
                    </label>
                    <input
                      type="radio"
                      id="userSize2"
                      name="user_size"
                      placeholder="230"
                      value={230}
                    />
                    <label htmlFor="userSize2">
                      <span>095(M)</span>
                    </label>
                    <input
                      type="radio"
                      id="userSize3"
                      name="user_size"
                      placeholder="240"
                      value={240}
                    />
                    <label htmlFor="userSize3">
                      <span>100(L)</span>
                    </label>
                  </div>
                </div>
                <div className="rt5">
                  <a href="!#">
                    <img src="./img/KHB/info/Untitled-1.svg" alt="" />
                    <p>고객님 사이즈를 찾아보세요</p>
                  </a>
                </div>
                <div className="rt6">
                  <input type="text" id='' name='' placeholder='1' value={state.cnt} />
                  <ul>
                      <li>
                          <div onClick={onClikcR} className='right'><img src="./img/KHB/info/+.svg" alt="" /></div> 
                          <div onClick={onClikcL} className='left'><img src="./img/KHB/info/-.svg" alt="" /></div> 
                          
                      </li>
                  </ul>
                  {/* <button>
                    <img src="./img/KHB/info/-.svg" alt="" />
                  </button>
                  <p>1</p>
                  <button>
                    <img src="./img/KHB/info/+.svg" alt="" />
                  </button> */}
                </div>
                <div className="rt7">
                  <p>주문금액</p>
                  <p>36,000원</p>
                </div>
                <button className="buy-btn">
                  <a href="!#">바로 구매하기</a>
                </button>
                <div className="cart-btn">
                  <div className="heart">
                    <img src="./img/KHB/info/ico_wish_off_18x16.png" alt="" />
                  </div>
                  <button className="btn">
                    <p>카트담기</p>
                  </button>
                </div>
                <select name="cupon" id="cupon">
                  <option
                    value="신규회원 10,000원 할인 쿠폰 발급"
                    selected="신규회원 10,000원 할인 쿠폰 발급"
                  >
                    신규회원 10,000원 할인 쿠폰 발급
                  </option>
                  <option value="가입 시 즉시발급 / 50,000원 이상 구매 시 사용가능">
                    가입 시 즉시발급 / 50,000원 이상 구매 시 사용가능
                  </option>
                </select>
                <div className="review">
                  <h5>상품 리뷰 0</h5>
                  <img src="./img/HSM/women_sub1_detail/plus1.svg" alt="" />
                </div>
                <div className="ask">
                  <h5>상품 문의 0</h5>
                  <img src="./img/HSM/women_sub1_detail/plus1.svg" alt="" />
                </div>
                <div className="list">
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
    </div>
  );
}
