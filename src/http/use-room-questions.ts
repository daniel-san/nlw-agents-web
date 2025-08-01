import { useQuery } from '@tanstack/react-query';
import type { GetRoomQuestionsResponse } from '@/http/types/get-rooms-questions-response.ts';

export function useRoomsQuestions(roomId: string) {
  return useQuery({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`
      );
      const result: GetRoomQuestionsResponse = await response.json();

      return result;
    },
  });
}
