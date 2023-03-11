import { Avatar } from "./Avatar";

import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./Comment.module.css";
import { useState } from "react";

export function Comment({ content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0)
  
  function handleDeleteComment() {

    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(state => {
      return state + 1;
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/nakaharaz.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Enzo Nakahara</strong>
              <time
                title="7 de maio de 2004 5:06h"
                dateTime="2004-05-07 05:06:00"
              >
                Cerca de 18 anos e 10 meses atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
