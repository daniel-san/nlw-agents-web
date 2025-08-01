import { RoomList } from '@/components/ui/room-list.tsx';
import { CreateRoomForm } from '@/components/create-room-form.tsx';

export function CreateRoom() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <CreateRoomForm />

          <RoomList />
        </div>
      </div>
    </div>
  );
}
