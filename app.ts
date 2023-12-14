import React, { useState, useEffect} from 'react'

// Props 타입 정의: 객체의 모든 키는 문자열이고, 모든 값도 문자열입니다.
type Props = {
  [key: string]: string;
};

// FetchExampleProps 타입 정의: 컴포넌트에 전달할 props의 타입을 지정합니다.
// tagName은 JSX(javvasxcript xml의 줄임말)에서 사용할 수 있는 모든 태그의 이름입니다.
// props는 위에서 정의한 Props 타입을 따르기 때문에 협업에서도 상당히 편리합니다.
// url은 문자열로, 데이터를 가져올 웹 주소입니다.
type FetchExampleProps = {
  tagName: keyof React.ReactHTML;
  // keyof은 타입스크립트의 키워드로, 객체의 모든 키를 문자열로 지정합니다.
  props: Props;
  url: string;
};
/**
 * 타입스크립트에서 < > 꺽쇠(태그) 표기법은 제네릭 문법이라고 부르며
 * 프로그래밍 일반에서 상당히 자주사용되는 패턴을 그대로 벤치마킹한 것입니다.
 * 선언할 때는 마치 매개변수처럼 사용하며, 할당할 때는 타입을 결정합니다.
 * "사용할 때 타입을 결정한다." 라는 키워드가 핵심이 됩니다.
 */

// FetchExample 컴포넌트 정의: React.FC는 함수 컴포넌트를 의미합니다.
const FetchExample: React.FC<FetchExampleProps> = ({ tagName, props, url }) => {
  // useState 훅을 사용하여 컴포넌트의 상태를 관리합니다.
  // data 상태는 가져온 데이터를 저장하고, error 상태는 에러 메시지를 저장합니다.
  // 상태 데이터가 두 개 이상이기 때문에, usestate 훅을 두번 사용합니다.
  // 너무 많은 상태를 관리하면 코드가 복잡해지기 때문에, 상태는 최소한으로 관리하는 것이 좋으며,
  // useReducer 훅을 사용하면 상태를 더욱 효울적으로 관리할 수 있습니다.
  const [data, setData] = useState<string>('로딩중');
  const [error, setError] = useState<string>('');

  
}