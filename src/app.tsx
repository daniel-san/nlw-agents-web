import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateRoom } from '@/pages/create-room.tsx';
import { Room } from '@/pages/room.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecordRoomAudio } from '@/pages/record-room-audio.tsx';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room/:roomId" />
          <Route element={<RecordRoomAudio />} path="/room/:roomId/audio" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
