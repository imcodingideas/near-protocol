import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type Question = {
  id: number;
  title: string;
  body: string;
};

export const useQuestions = () =>
  useQuery({
    queryKey: ['questions'],
    queryFn: async (): Promise<Array<Question>> => {
      const { data } = await axios.get<Array<Question>>(
        '/api/questions/'
      );
      return data;
    },
  });
