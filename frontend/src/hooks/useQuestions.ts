import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Question } from '../types';

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
