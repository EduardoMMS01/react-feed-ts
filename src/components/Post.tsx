import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Author {
    name: string,
    role: string,
    avatarUrl: string
}

interface Content {
    type: string,
    content: string
}

interface PostProps {
    author: Author,
    publishedAt: Date,
    content: Content[]
}

export const Post = ({ author, content, publishedAt }: PostProps) => {

    const [comments, setComments] = useState([
        "Post muito bacana!!"
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormat = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt)


    function handleNewComments (e: FormEvent) {
        e.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange (e: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(e.target.value)
    }

    function deleteComment (itemToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(item => {
            return item !== itemToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt="Foto de perfil" />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time>
                    {publishedDateFormat}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(item => {
                    if (item.type === "paragraph") {
                        return (
                            <p key={item.content}>{item.content}</p>
                        )
                    } else if (item.type === "link") {
                        return (
                            <p key={item.content}><a href="https://eduardomms01.github.io/dark-mode-presentation/" target='_blank'>{item.content}</a></p>
                        )
                    }
                })}
            </div>

            <form onSubmit={handleNewComments} className={styles.commentForm}>
                <textarea 
                    onChange={handleNewCommentChange} 
                    value={newCommentText} name='comment' 
                    placeholder='Deixe seu comentário :)' 
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(item => {
                    return (
                        <Comment key={item} content={item} onDeleteComment={deleteComment}/>
                    )
                })}
            </div>
        </article>
    )
}