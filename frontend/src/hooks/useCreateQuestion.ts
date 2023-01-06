import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Question } from '../types';
import { CreateQuestionSchema } from '../validations/create-question.validation';

const createQuestion = async (data: CreateQuestionSchema) => {
    const { data: response } = await axios.post<Question>('/api/questions/create/', data, {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return response;
};

export const useCreateQuestion = (options?: Omit<UseMutationOptions<Question, AxiosError<Question>, CreateQuestionSchema, unknown>, "mutationFn">) => {
    return useMutation(createQuestion, options);
}
