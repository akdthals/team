import React from "react";
import axios from "axios";
import $ from "jquery";
// import {Link}  from 'react-router-dom';
import WomenBackpackChildComponent from "./WomenBackpackChildComponent";
export default function WomenBackpackComponent() {
  const [state, setState] = React.useState({
    여성백팩: [],
    n:0
  });

  const commaPrice = (price) => {
    let value = price.toString();
    const regExp = /(^\d+)(\d{3})/g;
    while (regExp.test(value)) {
      return value.replace(regExp, "$1,$2");
    }
  };

  // React.useEffect(() => {}, num);

  // const num = () => {
  //   let cnt = 0;
  //   cnt++;
  // };

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("./data/product.json");
  //       // console.log(response)
  //       setState({
  //         ...state,
  //         여성백팩: response.data.여성백팩
  //         // n : response.data.여성백팩.슬라이드이미지.length
  //       });
  //       // executeEvent();
  //     } catch (error) {
  //       console.log("axios 실패" + error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  
  React.useEffect(()=>{
    axios({
      url:'./data/product.json',
      method:'GET'
    })
    .then((res)=>{
      // console.log(res);
      setState({
        ...state,
        여성백팩: res.data.여성백팩,
        // n : res.data.여성백팩.슬라이드이미지.lenght
      });
    })
    .catch((err)=>{
      console.log('axios 실패'+err)
    })
  });

  // const executeEvent = () => {
  //   setState((prevState) => {
  //     console.log(prevState.여성백팩); // 업데이트된 배열이 출력됩니다.
  //     // 여기에서 이벤트를 실행할 수 있습니다.
  //     return prevState;
  //   });
  // };
  // // console.log(state.여성백팩);

  return (
    <section className="product-section" id="womenBackPack">
      <div className="container">
        <div className="gap">
          <div className="content">
            <div className="filter-box"></div>
            <div className="product-box">
              <ul id="product-box">
                {state.여성백팩.map((item, idx) => {
                  return (
                    <WomenBackpackChildComponent
                      key={item.제품코드}
                      value={item}
                      idx={idx}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
