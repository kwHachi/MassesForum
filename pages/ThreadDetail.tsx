import React, {useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {BOARDS, MOCK_THREADS} from '../constants'
import {Post} from '../types'

const ThreadDetail: React.FC = () => {
    const {threadId} = useParams<{ threadId: string }>()
    const thread = MOCK_THREADS.find(t => t.id === threadId)
    const [replyText, setReplyText] = useState('')

    if (!thread) return <div>话题未找到或被移除</div>

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('回复已提交，正在审批中...')
        setReplyText('')
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-4 text-xs">
                <Link to="/" className="forum-link">首页</Link> &gt;
                <Link to={`/board/${thread.boardId}`} className="forum-link ml-1">{BOARDS.find(it => it.id === thread.boardId).name}</Link>
            </div>

            <h1 className="text-xl font-bold border-b-2 border-red-800 pb-2 mb-4">
                【{thread.id}】 {thread.title}
            </h1>

            <div className="space-y-4">
                {thread.posts.map((post: Post) => (
                    <div key={post.id} id={`p${post.number}`} className="post-container">
                        <div className="post-header text-xs flex justify-between">
              <span>
                {post.number} ： <span className="text-[#228b22]">名前：{post.author}</span> Trip:{post.tripcode || '◆NANBU/NET'} ：{post.timestamp} ID:Progressor_{post.id}00X
              </span>
                            <a href={`#p${post.number}`} className="text-gray-400 hover:underline">#{post.number}</a>
                        </div>
                        <div className="mt-2 text-sm whitespace-pre-wrap leading-relaxed">
                            {post.content}
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Reply Form */}
            <div className="mt-8 p-4 bg-[#f9f9f9] border border-gray-300">
                <h3 className="font-bold text-sm mb-2">回复本话题</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="block text-xs font-bold mb-1">姓名 (默认: 进步者)</label>
                        <input
                            type="text"
                            placeholder="進歩者"
                            className="w-full md:w-1/2 p-1 border border-gray-400 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold mb-1">内容</label>
                        <textarea
                            rows={4}
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            className="w-full p-2 border border-gray-400 text-sm"
                            placeholder="请发表您的见解..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-gray-200 border-2 border-retro px-4 py-1 text-sm font-bold hover:bg-gray-300 active:bg-gray-400"
                    >
                        提交评论
                    </button>
                </form>
            </div>

            <div className="mt-4 text-center">
                <Link to={`/board/${thread.boardId}`} className="forum-link text-sm">返回板块列表</Link>
            </div>
        </div>
    )
}

export default ThreadDetail
