import React from 'react';
import styled from 'styled-components';
import OrangeButton from '../components/OrangeButton';
import { useDispatch, useSelector } from 'react-redux';
import { next } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;

const MainImg = styled.img`
  width: inherit;
`;

const SubHeader = styled.p`
  font-size: 1.5em
  color: #777
`;

export default function Start() {
  const dispatch = useDispatch();
  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/jokebear_mbti.jpg" alt="main" />
      <SubHeader>개발자 MBTI 알아보기</SubHeader>
      <OrangeButton text="테스트 시작" clickEvent={() => dispatch(next())} />
    </>
  );
}
