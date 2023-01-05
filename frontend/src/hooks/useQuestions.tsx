import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Question = {
  id: number;
  title: string;
  body: string;
};

export const useQuestions = () =>
  useQuery({
    queryKey: ['questions'],
    queryFn: async (): Promise<Array<Question>> => {
      const { data } = await axios.get<Array<Question>>(
        'http://127.0.0.1:8001/questions'
      );
      return data;
    },
  });
