
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Board from './pages/Board'
import ThreadDetail from './pages/ThreadDetail'

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/:boardId" element={<Board />} />
        <Route path="/thread/:threadId" element={<ThreadDetail />} />
      </Routes>
    </Layout>
  )
}

export default App
