
import React from 'react'
import { Link } from 'react-router-dom'
import { BOARDS, MOCK_THREADS } from '../constants'

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-bold bg-[#eee] p-1 border-b border-gray-400 mb-3">板块概览</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BOARDS.map(board => (
            <div key={board.id} className="p-2 border border-dotted border-gray-400">
              <Link to={`/board/${board.id}`} className="font-bold text-blue-700 underline">
                {board.name}
              </Link>
              <p className="text-xs text-gray-600 mt-1">{board.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold bg-[#eee] p-1 border-b border-gray-400 mb-3">今日热议</h2>
        <div className="space-y-2">
          {MOCK_THREADS.map(thread => (
            <div key={thread.id} className="flex justify-between items-center text-sm border-b border-gray-200 pb-1">
              <Link to={`/thread/${thread.id}`} className="forum-link truncate max-w-[70%]">
                {thread.title}
              </Link>
              <div className="text-xs text-gray-500 space-x-2">
                <span>回复: {thread.posts.length}</span>
                <span>最后活跃: {thread.lastActive}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-50 p-3 border border-yellow-200 text-xs italic">
        敬告：请在全联网发言时自觉遵守《南武全联网使用公约》，自觉抵制修正主义倾向，坚持极左立场
      </section>
    </div>
  )
}

export default Home
