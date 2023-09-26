import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from 'react'

interface CommentProps {
    content: string,
    onDeleteComment: (attr: string) => void
}

export const Comment = ({ content, onDeleteComment }:CommentProps) => {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment () {
        onDeleteComment(content)
    }

    function handleLikeComment () {
        setLikeCount((value) => {
            return value + 1
        })
    }

    return (
        <div className={styles.comment}>
            <img src="https://github.com/eduardomms01.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eduardo Marinho</strong>
                            <time title='18 de Setembro às 19:22:00' dateTime='2023-09-18 19:23:00'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={18}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}