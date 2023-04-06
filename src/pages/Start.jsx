import React from 'react'
import styled from 'styled-components'
import OrangeButton from '../components/OrangeButton'
import { useDispatch, useSelector } from 'react-redux'
import { init, next } from '../store/modules/mbti'
import { useEffect } from 'react'
import { useState } from 'react'

const Header = styled.p`
  font-size: 3em;
`

const MainImg = styled.img`
  width: inherit;
`

const SubHeader = styled.p`
  font-size: 1.5em
  color: #777
`

export default function Start() {
  const [counts, setCounts] = useState(0)
  const dispatch = useDispatch()
  async function fetchData() {
    // mbti 데이터 받아오는 코드
    const resMbtiData = await fetch('http://localhost:4000/data/getdata')
    if (resMbtiData.status === 200) {
      const mbtiData = await resMbtiData.json()
      console.log(mbtiData)
      if (mbtiData[0]) dispatch(init(mbtiData[0]))
    } else {
      console.log(await resMbtiData.json())
    }

    // 방문자 수 받아오는 코드
    const resGetCounts = await fetch('http://localhost:4000/data/getcount')
    if (resGetCounts.status === 200) {
      const countData = await resGetCounts.json()
      setCounts((cur) => countData.counts)
    } else {
      console.log(await resGetCounts.json())
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/jokebear_mbti.jpg" alt="main" />
      <SubHeader>
        개발자 MBTI 알아보기{'\n\n'} {counts}명 참여
      </SubHeader>
      <OrangeButton text="테스트 시작" clickEvent={() => dispatch(next())} />
    </>
  )
}
