import './App.css'
import React from 'react'
import { Container } from '@material-ui/core'
import JavaBox from './components/JavaBox'
import NodeJsBox from './components/NodeJsBox'
import DevBox from './components/DevBox'
import Footer from './components/Footer'

export default function App() {

  const lang = navigator.language

  return (
    <>
      <Container maxWidth='md' style={{ minHeight: '95vh' }}>
        <DevBox lang={lang}></DevBox>
        <JavaBox lang={lang}></JavaBox>
        <NodeJsBox lang={lang}></NodeJsBox>
      </Container>
      <Footer></Footer>
    </>
  )
}
