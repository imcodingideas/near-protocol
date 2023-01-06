import React from 'react';
import { Card } from './Card';
import { Question as QuestionType } from '../hooks/useQuestions';
import { css } from '../utils';
import styles from './Question.module.css';

export const Question = ({ title, body }: QuestionType) => {
  return (
    <Card>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{body}</p>
      </div>
      <hr className={styles.division} />
      <div className={styles.footer}>
        <h4 className={styles.title}>Asked By:</h4>
        <div className={styles.profileDetails}>
          <img className={styles.avatar} src="https://i.pravatar.cc/48/48" alt="Avatar" />
          <div>
            <p className={css(styles.text, styles.profileDetailsTitle)}>Pseudo Near Expert</p>
            <p className={css(styles.text, styles.profileDetailsText)}>2 Answers . 1 Question</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
