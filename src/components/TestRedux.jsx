import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function TestRedux() {
  const weight = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>몸무게: {weight}</h1>
      <button onClick={() => dispatch({ type: '증가' })}>증가</button>
      <button onClick={() => dispatch({ type: '감소' })}>감소</button>
      <Link to="/test">리덕스로 이동</Link>
    </>
  );
}
