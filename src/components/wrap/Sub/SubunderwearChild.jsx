import React from 'react'

export default function SubunderwearChild({온라인단독}) {

    // 정규표현식
    const commaPrice=(price)=>{
        let value = price.toString();
        const regExp = /(^\d+)(\d{3})/g;  // (그룹1)(그룹2)
        while( regExp.test(value) ){
            return  value.replace(regExp, '$1,$2');
        }
        
    }


    return (
        <ul>
                {
                    온라인단독.map((item, idx)=>{
                        return(
                            <li key={idx}>
                                <a href="!#">
                                    <div className="img-box">
                                        <div className="front-img">
                                            <img src={`./img/KHB/${item.이미지}`} alt="" />
                                        </div>
                                        <div className="back-img">
                                            <img src={`./img/KHB/${item.이미지2}`} alt="" />
                                        </div>
                                    </div>
                                    <div className="txt-box">
                                        <ul>
                                            <li className='t1'>{item.성별설명}</li>
                                            <li className='t2'>{item.상품명}</li>
                                            <li className='t3'>{item.정가}<i>원</i></li>
                                            <li className='t4'>{item.할인율}</li>
                                        </ul>
                                    </div>
                                </a>

                            </li>
                        )
                    })
                
                }
        </ul>
    );
};

