import React, { useState } from "react"; //상태를 관리할때 사용하는 hook중 하나 (useState)
import "./App.css";
import Box from "./conponents/Box";

/*

1. 박스 2개(타이틀, 사진, 결과)
2. 박스 하단에 가위,바위,보 버튼
3. 버튼 클릭시 -> 클릭한 아이템이 유저박스에 보임
4. 버튼 클릭시 -> 컴퓨터 아이템이 랜덤하게 선택됨
5. 3,4번의 승패 나눔
6. 5의 결과에 따라 박스테두리색, 글씨 색이 변함(승-파랑 / 패-회색)

*/

function App() {
  const [userSelect, setUserSelect] = useState(); //내가 선택한것
  const [computerSelect, setComputerSelect] = useState(null); // 컴퓨터가 선택한것
  const [result, setResult] = useState(""); // 승패결과를 보여주는 state, 비어있는 string type

  const choice = {
    scissors: { name: "Scissors", img: "scissors.png" },
    rock: { name: "Rock", img: "rock.png" },
    paper: { name: "Paper", img: "paper.png" },
  };

  const play = (userChoice) => {
    //console.log('내가 선택한 버튼은?!',userChice)

    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    //유저가 선택한값, 컴퓨터가 선택한값을 함수 judgement
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (uc, cc) => {
    console.log("유저 선택값-", uc, "컴퓨터 선택값-", cc);

    /*
    유저 == 컴퓨터   -->  tie(비김)
    유저 == rock, 컴퓨터 == scissors      -->     유저 win(이김) 
    유저 == rock, 컴퓨터 == paper         -->     유저 Lose(짐) 
    유저 == scissor, 컴퓨터 == paper      -->     유저 win(이김)
    유저 == scissor, 컴퓨터 == rock       -->     유저 Lose(짐) 
    유저 == paper, 컴퓨터 == rock         -->     유저 win(이김)
    유저 == paper, 컴퓨터 == scissors     -->     유저 Lose(짐) 
    
    */

    if (uc.name === cc.name) {
      return "tie";
    } else if (uc.name === "Rock")
      // if(cc.name == 'Scissors'){
      //   return '승리!';
      // } else {
      //   return '졌어요ㅠㅠ'
      // }
      return cc.name === "Scissors" ? "win" : "lose";
    else if (uc.name === "Scissors")
      return cc.name === "Paper" ? "win" : "lose";
    else if (uc.name === "Paper") return cc.name === "Rock" ? "win" : "lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체 choice오브젝트의 key값만 뽑아tj Array됨(scissors,rock,paper)
    let randomItem = Math.floor(Math.random() * itemArray.length); //0,1,2 중 랜덤
    let final = itemArray[randomItem];

    return choice[final];
  };

  return (
    <>
      <div className="main">
        <Box title="Mine" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button className="scissors" onClick={() => play("scissors")}>
          가위
        </button>
        <button className="rock" onClick={() => play("rock")}>
          바위
        </button>
        <button className="paper" onClick={() => play("paper")}>
          보
        </button>
      </div>
      <p className="main resultP">{result}</p>
    </>
  );
}

export default App;
