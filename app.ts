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
}