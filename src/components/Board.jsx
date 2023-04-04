import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

export default function Board() {
  return <>
    <Header/>
    <h1>게시판 페이지</h1>
    <Link to='1'>
      <h2>게시글1</h2>
    </Link>
    <Link to='2'>
      <h2>게시글2</h2>
    </Link>
  </>
}
