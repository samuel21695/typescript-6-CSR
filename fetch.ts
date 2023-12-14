// Props 라는 type 선언을 통해
// 반드시 문자열로만 구성된 객체를 전달받아야 함을 명시합니다.

type Props = {
  [key: string]: string;
};

// Promise<HTMLElement> 리턴이 Promise 객체를 반환한다는 의미이며,
// < 꺽쇠 > 표기는 제네릭 문법으로, '할당'할 때 결정합니다.
// HTMLElement는 따로 타입을 지정하지 않았지만, 기본적으로 제공되는 타입입니다.
// 따라서 함수 fetchExample은 HTMLElement 무언가를 Promise 객체로 핸들링한다는 뜻이며,
// async와 함께 사용한 것을 통해 Promise 객체를 동기적으로 작성된 코드처럼 작동합니다.
// fetch()는 기본적으로 비동기적으로 작동하기 때문에 비동기 상태로 그대로 두면,
// 아래의 HTML component 생성하는 부분보다 먼저 실행될 수 있습니다.

async function fetchExample(tagName: string, props: Props, children: string, url: string): Promise<HTMLElement> {
  // HTML 요소 생성
  const element =document.createElement(tagName);

  // Props 설정
  for (const key in props) {
    element.setAttribute(key, props[key]);
  }

  // 초기 내용 설정
  element.innerHTML = children;

  
}