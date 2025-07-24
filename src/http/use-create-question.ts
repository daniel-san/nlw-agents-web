import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateRoomRequest } from './types/create-room-request.ts';
import type { CreateRoomResponse } from './types/create-room-response.ts';
import type { CreateQuestionRequest } from '@/http/types/create-question-request.ts';
import type { CreateQuestionResponse } from '@/http/types/create-question-response.ts';

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result: CreateQuestionResponse = await response.json();

      return result;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-questions', roomId] });
    },
  });
}
