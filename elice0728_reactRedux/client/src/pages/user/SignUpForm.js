import $ from "jquery";
import axios from "axios";
import { useRef, useState } from "react";
import port from "./../../data/port.json";

const SignUpForm = ({ signUpData, onChangeSignUpData, setSignUpData }) => {
  const emailRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const onClickSignUpButton = () => {
    if (signUpData.email === "") {
      alert("이메일을 입력해주세요.");
      //$("#email").focus();
      emailRef.current.focus();
      return;
    }

    if (signUpData.password === "") {
      alert("패스워드를 입력해주세요.");
      $("#password").focus();
      return;
    }

    if (signUpData.rePassword === "") {
      alert("확인 패스워드를 입력해주세요.");
      $("#rePassword").focus();
      return;
    }

    if (signUpData.name === "") {
      alert("이름을 입력해주세요.");
      $("#name").focus();
      return;
    }

    if (signUpData.password !== signUpData.rePassword) {
      alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
      setSignUpData({
        ...signUpData,
        password: "",
        rePassword: "",
      });
      console.log(signUpData);
      $("#password").focus();
      return;
    }
    //

    sendSignUpData()
      .then((res) => {
        console.log(res.data);
        alert(res.data.result);
        window.location.reload(); // window는 실행하는 최고 객체 즉 브라우저. 브라우저를 새로 고침
      })
      .catch((e) => {
        setErrorMessage(e.response.data.error);
      });
  };

  const sendSignUpData = async () => {
    return await axios.post(`${port.url}/user/signUp`, signUpData);
  };

  return (
    <div className="album">
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">
              Email address
            </label>
            <input
              type="email"
              value={signUpData.email}
              onChange={onChangeSignUpData}
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelp"
              ref={emailRef}
            />
            <div id="emailHelp" className="form-text text-light">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-light">
              Password
            </label>
            <input
              type="password"
              value={signUpData.password}
              onChange={onChangeSignUpData}
              className="form-control"
              name="password"
              id="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rePassword" className="form-label text-light">
              Re-Password
            </label>
            <input
              type="password"
              value={signUpData.rePassword}
              onChange={onChangeSignUpData}
              className="form-control"
              name="rePassword"
              id="rePassword"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-light">
              Name
            </label>
            <input
              type="text"
              value={signUpData.name}
              onChange={onChangeSignUpData}
              className="form-control"
              name="name"
              id="name"
            />
          </div>
          <div>
            <p className="text-danger">{errorMessage}</p>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={onClickSignUpButton}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
