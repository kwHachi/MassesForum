
import React from 'react'
import { Link } from 'react-router-dom'
import { BOARDS } from '../constants'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar - Board List */}
      <aside className="w-full md:w-64 bg-[#efefef] border-r border-[#ccc] p-4 text-sm">
        <div className="mb-6">
          <Link to="/" className="block">
            <h1 className="text-xl font-bold text-red-700 underline mb-1">群众网</h1>
            <p className="text-xs text-gray-600">在线群众论坛系统</p>
          </Link>
        </div>

        <nav>
          <h2 className="font-bold border-b border-gray-400 mb-2 pb-1">板块导航</h2>
          <ul className="space-y-1">
            {BOARDS.map(board => (
              <li key={board.id}>
                <Link to={`/board/${board.id}`} className="forum-link block py-1">
                  ■ {board.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 pt-4 border-t border-gray-400 text-xs text-gray-500">
          <p>当前全联网负荷: 正常</p>
          <p>您使用的节点：本部都红星区114W</p>
          <p>祝您工作与生活愉快</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-white p-4 overflow-y-auto">
        <header className="mb-4 bg-banner p-3 border-retro">
          <marquee behavior="scroll" direction="left" className="text-sm font-bold">
            【公告】坚忍奉公、联合奋斗！庆祝南武进步革命三十一周年盛大仪式筹备中
          </marquee>
        </header>
        {children}
      </main>
    </div>
  )
}

export default Layout
