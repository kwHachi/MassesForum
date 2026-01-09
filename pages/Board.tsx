import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {BOARDS, MOCK_THREADS} from '../constants'

const Board: React.FC = () => {
    const {boardId} = useParams<{ boardId: string }>()
    const board = BOARDS.find(b => b.id === boardId)
    const threads = MOCK_THREADS.filter(t => t.boardId === boardId)

    if (!board) return <div>板块不存在</div>

    const newThread = () => alert('系统繁忙')

    return (
        <div>
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-red-800">{board.name}</h2>
                <p className="text-sm text-gray-600">{board.description}</p>
            </div>

            <div className="bg-[#efefef] border border-gray-400 p-1 mb-4 flex space-x-4 text-sm font-bold">
                <button onClick={newThread} className="hover:underline">新建话题</button>
                <button className="hover:underline">刷新</button>
            </div>

            <table className="w-full text-sm border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                <tr>
                    <th className="border border-gray-300 p-1 text-left">主题</th>
                    <th className="border border-gray-300 p-1 w-24">作者</th>
                    <th className="border border-gray-300 p-1 w-16">回复</th>
                    <th className="border border-gray-300 p-1 w-32">最后活跃</th>
                </tr>
                </thead>
                <tbody>
                {threads.length > 0 ? (
                    threads.map(thread => (
                        <tr key={thread.id} className="hover:bg-blue-50">
                            <td className="border border-gray-300 p-1">
                                <Link to={`/thread/${thread.id}`} className="forum-link">
                                    {thread.title}
                                </Link>
                            </td>
                            <td className="border border-gray-300 p-1 text-center">{thread.author}</td>
                            <td className="border border-gray-300 p-1 text-center">{thread.posts.length}</td>
                            <td className="border border-gray-300 p-1 text-center text-xs">{thread.lastActive}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4} className="border border-gray-300 p-4 text-center text-gray-400">
                            该板块暂无内容，期待您的发言
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default Board
