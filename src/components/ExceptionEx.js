export const ExceptionEx = () => {
  try {
    // 예외가 발생할 거 같은 코드를 삽입
    값;
    console.log("덧샘 :" + (1 + 1));
    // ㄴ 문법 에러 = 앞에가 에러가 뜨면 뒤에 값들도 실행되지 않음
  } catch (error) {
    // 예외 발생 시 catch단의 코드가 실행됨
    // error 매개변수로 어떤 에러가 발생했는지 알아올 수 있음
    console.log("에러 : " + error);
  } finally {
    // 거의 잘 안 씀
    console.log("예외 발생 유무를 따지지 않고 무조건 실행");
  }

  return <>예외</>;
};

// *오류 크게 2가지

// 1. 런타임(runtime) 에러
//     - 실행 중 에러가 발생

// 2. 문법(syntax) 에러
//     - 실행 전 발생하는 에러
