import React from 'react'
import styled from 'styled-components'
import PinkButton from '../components/PinkButton'
import { useDispatch, useSelector } from 'react-redux'
import { reset } from '../store/modules/mbti'
import { useEffect } from 'react'

const Header = styled.p`
  font-size: 3em;
`

const Explanation = styled.p`
  font-size: 1.5em;
`

const Result = styled.p`
  font-size: 3em;
  color: lavender;
`
const Additional = styled.p`
  font-size: 2em;
  color: lavenderblush;
`
const AdditionalImg = styled.img`
  width: 500px;
  transform: translateX(-35px);
`

export default function Show() {
  const result = useSelector((state) => state.mbti.mbtiResult)
  const explanation = useSelector((state) => state.mbti.explanation[result])
  const dispatch = useDispatch()

  const incCount = async () => {
    const resIncCount = await fetch('http://localhost:4000/data/inccount', {
      method: 'POST',
    })
    if (resIncCount.status === 200) {
      console.log(await resIncCount.json())
    } else {
      console.log(await resIncCount.json())
    }
  }

  useEffect(() => {
    incCount()
  }, [])

  return (
    <>
      <Header>결과는 </Header>
      <Explanation>{explanation.text}</Explanation>
      <Result>{result}</Result>
      <Additional>재미</Additional>
      <AdditionalImg src={explanation.img} alt="mbti" />
      <PinkButton text="재검사" clickEvent={() => dispatch(reset())} />
    </>
  )
}
