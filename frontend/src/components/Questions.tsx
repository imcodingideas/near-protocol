import React from 'react';
import { useQuestions } from '../hooks/useQuestions';

export const Questions = () => {
  const { data, isLoading } = useQuestions();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map((question) => (
        <div key={question.id}>
          <h3>{question.title}</h3>
          <p>{question.body}</p>
        </div>
      ))}
    </div>
  );
};
