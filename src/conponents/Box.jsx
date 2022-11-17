import React from 'react'

const Box = (props) => {
    //승,패를 유저,컴퓨터에 반대로 나오게
    let rrr;
    if (props.title=='Computer' && props.result !=='tie' && props.result !==''){
        //컴퓨터쪽, 비기지 않았고 결과값이 비어있지 않을때 이 세가지 조건을 다 만족시
        rrr = props.result == 'win' ? 'lose':'win';
        //나의 승패 여부가 승리였을때는 result는 '졌음ㅠㅠ'으로 바뀌고 승리가 아니었을때는 '승리!'로 바뀜
    } 
     else {  //위의 경우가 아니라면 props로 전달된 값을 그대로 쓰면 됨(비겼을경우나 값이 비었을경우)
        rrr = props.result;
    }



    return (
        <div className={`box ${rrr}`}>
            <h1>{props.title}</h1>
            <img src = {props.item && props.item.img} className='item-img'/>
            <h2>{rrr}</h2>
        </div>
    )
}

export default Box