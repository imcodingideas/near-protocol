import React from 'react';
import { Question } from './Question';
import { useQuestions } from '../hooks/useQuestions';

export const Questions = () => {
  const { data, isLoading } = useQuestions();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {data?.map((question) => <Question key={question.id} {...question} />)}
    </>
  );
};
