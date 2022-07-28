import { useEffect, useState, useRef } from "react";
import $ from "jquery";

function App() {
  /* 이벤트 처리
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  */

  // const [status, setStatus] = useState(false);

  // const eventBtn = () => {
  //   setStatus(!status);
  // };

  // const PracComponent = ({ eventButton }) => {
  //   return (
  //     <div>
  //       <button onClick={eventButton}>Button</button>
  //     </div>
  //   );
  // };
  const refInput = useRef();
  useEffect(()=>{ // -> 처음 랜더링 될 때 한번 실행
    // refInput.current.focus();
    $("#input1").focus();
  }, [])

  return (
    <div className="App">
      {/* 이벤트 처리
      <input
        type="text"
        name="email"
        value={data.email}
        onChange={onChangeData}
      ></input>
      E-mail
      <br />
      <input
        type="text"
        name="password"
        value={data.password}
        onChange={onChangeData}
      ></input>
      Password
      <br />
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={onChangeData}
      ></input>
      Name
      <br />
      <br />
      <br />
      <div>
        <p>E-mail : {data.email}</p>
        <p>Password : {data.password}</p>
        <p>Name : {data.name}</p>
      </div>
      */}

      {/* <div>
        {status ? <p>Hello</p> : <></>}
        <p></p>
      </div>
      <PracComponent eventButton={eventBtn} /> */}

      <div>
        <input type={"text"} ref={refInput} id="input1"></input>
      </div>
    </div>
  );
}

export default App; 