import React from "react";

export default function InformChild({ 여성상세페이지 }) {
  return 여성상세페이지.map((item, idx) => {
    return <img key={idx} src={`./img/KHB/info/${item.이미지}`} alt="" />;
  });
}
