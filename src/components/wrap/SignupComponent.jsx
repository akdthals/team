import React from 'react';
import $ from 'jquery';
import axios from 'axios';


function SignupComponent({회원가입, timer, timerCounterfn}){

    const {setId, minutes, seconds, msg, isEnd} = timer;

    const [state,setState]=React.useState(회원가입);

    const createRef = React.useRef();

    React.useEffect(()=>{
        setState({
            ...state,
            isConfirModal: isEnd,
            confirMsg:msg
        })
    },[isEnd]);



    const onChangeId=(e)=>{
        setState({
            ...state,
            아이디: e.target.value
        })
    }
    const onChangeUserPw1=(e)=>{
        setState({
            ...state,
            비밀번호: e.target.value
        })
    }
    const onChangePwOk=(e)=>{
        setState({
            ...state,
            비밀번호확인: e.target.value
        })
    }
    const onChangeName=(e)=>{
        setState({
            ...state,
            이름: e.target.value
        })
    }
    const onChangeBirth=(e)=>{
        setState({
            ...state,
            생년월일: e.target.value
        })
    }
    const onChangeGender=(e)=>{
        setState({
            ...state,
            성별: e.target.value
        })
    }
    const onChangeEmail=(e)=>{
        setState({
            ...state,
            이메일: e.target.value
        })
    }
    const onChangeHp=(e)=>{
        setState({
            ...state,
            휴대전화: e.target.value
        })
    }
    
    const onSubmitForm=(e)=>{
        e.preventDefault();
        
        let formData=new URLSearchParams();
        formData.append("user_id", state.아이디);
        formData.append("user_pw", state.비밀번호);
        formData.append("user_pwOk", state.onChangePwOk);
        formData.append("user_name", state.이름);
        formData.append("user_birth", state.생년월일);
        formData.append("user_gender", state.성별);
        formData.append("user_email", state.이메일);
        formData.append("user_hp", state.휴대전화);

        

        /* $.ajax({
            url:'http://localhost:8080/jsp/0514과제/0514네이버과제/naver_signup_action.jsp',
            method:'POST',
            data: formData,
            success(res){
                alert('회원가입 성공!');
                window.location.href='/';
            },
            error(err){

            }

        }) */

        axios({
            url: '/jsp/0514과제/0514네이버과제/naver_signup_action.jsp',
            method: 'POST',
            params: formData

        })
        .then((res)=>{
            console.log('성공');
        })
        .catch((err)=>{
            console.log('실패');
        })
    }

    return (
        <>
        <main id="signup">
            <h1>NAVER</h1>
            <form onSubmit={onSubmitForm} name="naver_form" id="naverForm" method="POST" action="naver_signup_action.jsp">
                <label htmlFor="id">
                    <span>아이디</span>
                    <input value={state.아이디} onChange={onChangeId} type="text" name="user_id" id="id" placeholder="아이디" required />
                </label>
                    <label htmlFor="userPw1">비밀번호</label>
                    <div className="center-box">
                        <input 
                        type="password" 
                        maxLength={16}
                         name='user_pw1' 
                         id='userPw1' 
                         placeholder='비밀번호를 입력ㅎ세요' 
                         onChange={onChangeUserPw1} 
                         value={state.비밀번호} 
                         />
                    </div>
                    <p className=''></p>
                <label htmlFor="name">
                    <span>이름</span>
                    <input value={state.이름} onChange={onChangeName} type="text" name="user_name" id="name" placeholder="이름" required />
                </label>
                <label htmlFor="year" className="birth">
                    <span>생년월일</span>
                    <input value={state.생년월일}onChange={onChangeBirth} type="text" className="birth-input" name="user_birth" id="year" placeholder="년" required />
                </label>
                <label htmlFor="gender">
                    <span>성별</span>
                    <select onChange={onChangeGender} name="user_gender" id="gender" value={state.성별} >
                        <option value="선택안함">선택안함</option>
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
                </label>
                <label htmlFor="email">
                    <span>이메일</span>
                    <input value={state.이메일} onChange={onChangeEmail} type="text" name="user_email" id="email" placeholder="이메일" required />
                </label>
                <label htmlFor="hp">
                    <span>휴대전화</span>
                    <input value={state.휴대전화} onChange={onChangeHp} type="text" name="user_hp" id="hp" placeholder="휴대폰번호" required />
                </label>
                <button type="submit">가입하기</button>
            </form>

        </main>
        </>
    );
};

export default SignupComponent;

SignupComponent.defaultProps={
    회원가입: {
        아이디: '',
        비밀번호: '',
        isPwError:false,
        isPwMsg: '',

        비밀번호확인: '',
        isPw2Error:false,
        isPw2Msg:'',

        confirmMsg:'동일한 비밀번호 입니다',
        isConfirmModal:false,
        이름: '',
        생년월일: '',
        성별: '선택안함',
        이메일: '',
        휴대전화: ''
    }
}