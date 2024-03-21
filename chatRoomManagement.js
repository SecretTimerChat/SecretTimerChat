// chatRoomManagement.js
import { getDatabase, ref, push, child, get, update } from "firebase/database";
import { app } from "./firebaseConfig.js"; // Firebase 앱 임포트

const database = getDatabase(app);

// 채팅방 생성 함수
function createRoom(roomName, callback) {
  const roomRef = push(ref(database, 'rooms'));
  set(roomRef, {
    name: roomName,
    createdAt: Date.now()
  }).then(() => callback(null, roomRef.key))
    .catch(error => callback(error, null));
}

// 채팅방 참여 함수
function joinRoom(roomId, callback) {
  const roomRef = ref(database, `rooms/${roomId}`);
  get(child(roomRef, '/')).then((snapshot) => {
    if (snapshot.exists()) {
      const roomData = snapshot.val();
      const updatedParticipants = (roomData.participants || 0) + 1;
      update(roomRef, { participants: updatedParticipants })
        .then(() => callback(null, roomId))
        .catch(error => callback(error, null));
    } else {
      callback(new Error("Room does not exist."), null);
    }
  });
}

export { createRoom, joinRoom };
