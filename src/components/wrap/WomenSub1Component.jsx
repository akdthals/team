import axios from 'axios';
import React from 'react';
import WomenSub1ChildComponent from './WomenSub1ChildComponent'

export default function WomenSub1Component () {
  const [state, setState]=React.useState({
    샌들슬리퍼:[]
  });

  const getProduct=()=>{
    axios({
      url:'./data/womenSub/womenSub1.json',
      method:'GET'
    })
    .then((res)=>{
      setState({
        ...state,
        샌들슬리퍼: res.data.샌들슬리퍼
      })
    })
    .catch((err)=>{
        console.log("AXIOS 오류" + err)
    })
  }
  React.useEffect(()=>{
    getProduct();
  },[])
  return (
        <main id="Womensub1">
            <div className="container">
          <div className="gap">
            <div className="title">
              <div className="left-box">
                <ul>
                  <li>
                    <h1>WOMEN</h1>
                  </li>
                  <li>
                     <h3><img src="./img/HSM/women_sub1/mola.svg" alt="" /></h3> 
                  </li>
                  <li>
                    <h2>신발</h2>
                  </li>
                </ul>
              </div>
              <div className="center-box">
                <ul>
                  <li>
                    <h4>필터</h4>
                  </li>
                  <li>
                    <i>
                    </i>
                  </li>
                  <li>
                    |
                  </li>
                  <li>
                    <h5>비교</h5>
                  </li>
                </ul>
              </div>
              <div className="right-box">
                <ul>
                  <li>
                    <select name="newp" id="new_p">
                      <option value="신상품순" selected="신상품순">신상품순</option>
                      <option value="신상품순">신상품순</option>
                      <option value="판매순">판매순</option>
                      <option value="리뷰순">리뷰순</option>
                      <option value="낮은가격순">낮은가격순</option>
                      <option value="높은가격순">높은가격순</option>
                    </select>
                  </li>
                  <li className='sk'>
                    |
                  </li>
                  <li className='img1'>
                    <img src="./img/HSM/women_sub1/ico_col3_off_24x24.png" alt="" />
                  </li>
                  <li className='img2'>
                    <img src="./img/HSM/women_sub1/ico_col4_on_24x24.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="content">
              <div className="left-option">

              </div>
              <div className="right-main">
                <WomenSub1ChildComponent 샌들슬리퍼={state.샌들슬리퍼} />
              {/* <ul>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01978F_800.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 테이퍼 샌들 v3 테니스</h3>
                  <div className="price">
                      <h4>79,500원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01978F_500.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 테이퍼 샌들 v3 테니스</h3>
                  <div className="price">
                      <h4>79,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01978F_400.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 테이퍼 샌들 v3 테니스</h3>
                  <div className="price">
                      <h4>79,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01976F_325.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>레이플라이드 샌들</h3>
                  <div className="price">
                      <h4>75,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01976F_920.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>레이플라이드 샌들</h3>
                  <div className="price">
                      <h4>75,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01977F_001.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>레이플라이드 샌들</h3>
                  <div className="price">
                      <h4>75,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01977F_400.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 테이퍼 샌들 v3</h3>
                  <div className="price">
                      <h4>69,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01977F_013.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 테이퍼 샌들 v3</h3>
                  <div className="price">
                      <h4>69,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01976F_001.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>레이플라이드 샌들</h3>
                  <div className="price">
                      <h4>69,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01985F_650.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>드리프터 튜브 쏭</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01985F_018.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>드리프터 튜브 쏭</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01985F_925.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>드리프터 튜브 쏭</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01985F_001.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>드리프터 튜브 쏭</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM02573F_146.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>드리프터 튜브 샌들</h3>
                  <div className="price">
                      <h4>59,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM02573F_001.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>드리프터 튜브 샌들</h3>
                  <div className="price">
                      <h4>59,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1RM02617F_098.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 퀘이사</h3>
                  <div className="price">
                      <h4>119,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1RM02617F_009.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>휠라 퀘이사</h3>
                  <div className="price">
                      <h4>119,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01981F_800.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>슬릭텐더 v2 테니스</h3>
                  <div className="price">
                      <h4>59,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01981F_500.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>슬릭텐더 v2 테니스</h3>
                  <div className="price">
                      <h4>59,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01981F_400.jpg" alt="" /></a>
                  <h5>공용</h5>
                  <h3>슬릭텐더 v2 테니스</h3>
                  <div className="price">
                      <h4>59,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01983F_896.jpg" alt="" /></a>
                  <h5>휠라 NRE EASE 슬라이드</h5>
                  <h3>레이플라이드 샌들</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM02569F_100.jpg" alt="" /></a>
                  <h5>공용  라이프스타일</h5>
                  <h3>슬릭쏭 v2 테니스</h3>
                  <div className="price">
                      <h4>55,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01982F_800.jpg" alt="" /></a>
                  <h5>공용  라이프스타일</h5>
                  <h3>슬릭쏭 v2 테니스</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li>
                <li>
                  <a href="!#"><img src="./img/sub_women/1SM01982F_500.jpg" alt="" /></a>
                  <h5>공용  라이프스타일</h5>
                  <h3>슬릭쏭 v2 테니스</h3>
                  <div className="price">
                      <h4>39,000원</h4><img src="./img/sub_women/ico_wish_off_18x16.png" alt="" />    
                  </div> 
                </li> */}

              {/* </ul> */}
              </div>           
            </div>
          </div>
          </div>
        </main>
        
    
  );
};