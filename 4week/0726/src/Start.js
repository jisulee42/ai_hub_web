import { useState } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './Logout';

// state: 컴퍼넌트 안에서 정의된 요소 / 컴퍼넌트안에서만 조작
// props: 컴퍼넌트 사이에서 값을 주고받기위해 사용하는 객체

const Start = ()=>{ 

  const [status, setStatus] = useState(false);

  const InComponent = ()=>{
    return (
      <div>Hello</div>
    )
  }

  const buttonClick = () => {
    if(status){
      setStatus(false);
    }else{
      setStatus(true);
    }
  }

  const MyPracProps = ({name, age})=>{
    return(
      <div>{name}님 안녕하세요. {age}세 입니다.</div>
    )
  }

  const MyPracProps2 = (props)=>{

    let {name, age} = props;

    return(
      <div>{name}님 안녕하세요. {age}세 입니다.</div>
    )
  }

  return(
    <div>
      HI
      <InComponent/>
      

      {
        status ? (
          <LogoutButton data={buttonClick}/>
        ) : (
          <LoginButton data={buttonClick}/>
        )
      }

      <MyPracProps name={"박지헌"} age={28}/> {/*각각의 객체바로불러옴*/}
      <MyPracProps2 name={"박지헌2"} age={28}/>  {/* Json으로 불러옴*/}
    </div>
  )
}

export default Start;