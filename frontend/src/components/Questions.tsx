import React from 'react';
import { Card } from './Card';
import { useQuestions } from '../hooks/useQuestions';

export const Questions = () => {
  const { data, isLoading } = useQuestions();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data?.map((question) => (
        <Card key={question.id}>
          <h3>{question.title}</h3>
          <p>{question.body}</p>
        </Card>
      ))}
    </>
  );
};
