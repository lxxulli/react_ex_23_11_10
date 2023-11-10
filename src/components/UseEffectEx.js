import { useEffect, useState } from "react";

export const UseEffectEx = () => {
  const [num, setNum] = useState(0);

  //   useEffect(() => {
  //     console.log("마운트, 업데이트, 수정 될 때 실행");
  //   });

  //   useEffect(() => {
  //     console.log("마운트 될 때만 실행");
  //   }, []);

  useEffect(() => {
    console.log("num 값이 변경될 때만 실행");
  }, [num]);

  return (
    <>
      <h3>{num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </>
  );
};

// *useEffect
// - 앱이 렌더링, 리렌더링, 페이지 이동 등 이런 상황에서 부수적인 동작을 할 때 사용

// mount : 첫 렌더링
// update : 리(다시) 렌더링
// unmount : 화면에서 사라질 때
