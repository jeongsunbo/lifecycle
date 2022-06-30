import React, { Component, useState, useEffect } from 'react';


const App4 = (props) => {
    //클래스 컴포넌트 보이기
    const [ funcShow, setFuncShow ] = useState(true);
    return (
        <div>
            <h1>Hello world</h1>
            <input type="button" value="클래스 컴포넌트 보이기/안보이기" onClick={()=>{setFuncShow(!funcShow)}}/>
                {funcShow && <ClassComp initNumber={2}/>}
        </div>
    );
};
//클래스 컴포넌트
class ClassComp extends Component{
    //state를 생성
    //props 값을 state값으로
    state = {
        number:this.props.initNumber,
        date:new Date().toLocaleTimeString(),
    }
    //렌더가 끝난다음 실행사이클 메서드
    componentDidMount(){
        console.log("class형 컴포넌트 => componentDidMount");
    }
    //컴포넌트 UnMount되기 직전 실행사이클 메서드
    componentWillUnmount(){
        console.log("class형 컴포넌트 => componentWillUnmount")
    }
    render(){
        console.log("class형 컴포넌트 => render")
        return(
            <div className='countainer'>
                <h2>클래스 컴포넌트</h2>
                <p>Number : <span>{this.state.number}</span></p>
                <p>Date : <span>{this.state.date}</span></p>
            </div>
        )
    }
}
export default App4;