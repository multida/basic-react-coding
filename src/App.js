// /* eslint-disable */ -> ㅇㅝ닝메시지 삭ㅈㅔㅎㅐ줌
import "./App.css";
import { useState } from "react";

function App() {
  let [list, setList] = useState([
    "남자 코트 추천",
    "신발 추천",
    "여자 코트 추천",
  ]);
  let [date, setDate] = useState([
    "2월 17일 발행",
    "5월 27일 발행",
    "9월 3일 발행",
  ]);

  let [count, setCount] = useState(0);

  function likeBtnHandler() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
        <button
          onClick={() => {
            setList();
          }}
        >
          ㅈㅓㄴ호ㅏㄴ
        </button>
      </div>
      <div className="list">
        <h4>
          {list[0]}
          <span style={{ cursor: "pointer" }} onClick={likeBtnHandler}>
            👍🏻👍🏻
          </span>
          {count}
        </h4>
        <p>{date[0]}</p>
      </div>
      <div className="list">
        <h4>{list[1]}</h4>
        <p>{date[1]}</p>
      </div>
      <div className="list">
        <h4>{list[2]}</h4>
        <p>{date[2]}</p>
      </div>
    </div>
  );
}

export default App;
