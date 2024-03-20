// chatRoomManagement.js
import { getDatabase, ref, push, set } from "firebase/database";
import { app } from "./firebaseConfig";

const database = getDatabase(app);

function createRoom(roomName) {
  const newRoomRef = push(ref(database, 'rooms'));
  set(newRoomRef, { name: roomName, createdAt: Date.now() });
}

function joinRoom(roomId) {
  // 여기서 roomId를 사용하여 특정 채팅방에 참여하는 로직 구현
  // 예: 존재하는 채팅방 찾기, 사용자 목록 업데이트 등
}

export { createRoom, joinRoom };
