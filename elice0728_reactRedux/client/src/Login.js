import { useEffect, useState } from "react";
import SignInForm from "./pages/user/SignInForm";
import SignUpForm from "./pages/user/SignUpForm";

const Login = () => {
  //view를 변경하기 위한 useState
  const [view, setView] = useState({
    signIn: false,
    signUp: false,
  });

  // 로그인 입력받을 데이터를 prop로 넘겨줌
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  // 회원가입 입력받을 데이터를 prop로 넘겨줌
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: "",
  });

  // 회원가입 data를 입력받는 함수
  const onChangeSignUpData = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  // 로그인 data를 입력받는 함수
  const onChangeSignInData = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  // useEffect(()=>{
  //   console.log(signInData);
  // }, [signInData]);

  // useEffect(()=>{
  //   console.log(signUpData);
  // }, [signUpData]);

  return (
    <main className="bg-dark">
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light text-white">Movie</h1>
            <p className="lead text-muted text-light">
              리뷰하고 싶은 영화를 추가하고, 별점을 주세요 <br />
              또한 삭제, 수정이 가능합니다.
            </p>
            <p>
              <button
                className="btn btn-primary my-2 m-1"
                onClick={() => {
                  setView({
                    signIn: true,
                    signUp: false,
                  });
                }}
              >
                로그인
              </button>
              <button
                className="btn btn-secondary my-2 m-1"
                onClick={() => {
                  setView({
                    signIn: false,
                    signUp: true,
                  });
                }}
              >
                회원가입
              </button>
            </p>
          </div>
        </div>
      </section>
      {view.signIn ? (
        <SignInForm
          signInData={signInData}
          onChangeSignInData={onChangeSignInData}
        />
      ) : (
        <></>
      )}
      {view.signUp ? (
        <SignUpForm
          signUpData={signUpData}
          onChangeSignUpData={onChangeSignUpData}
          setSignUpData={setSignUpData}
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default Login;
