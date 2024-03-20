// chatRoomManagement.js
import { getDatabase, ref, push, set, get, child } from 'firebase/database';
import app from './firebaseConfig';

const database = getDatabase(app);

// 채팅방 만들기 함수
function createRoom(roomName, callback) {
  const roomRef = ref(database, 'rooms/' + roomName);
  get(child(roomRef, '/')).then((snapshot) => {
    if (snapshot.exists()) {
      alert("Room already exists.");
    } else {
      set(roomRef, { name: roomName });
      callback(roomName);
    }
  });
}

// 채팅방 참여하기 함수
function joinRoom(roomName, callback) {
  const roomRef = ref(database, 'rooms/' + roomName);
  get(child(roomRef, '/')).then((snapshot) => {
    if (snapshot.exists()) {
      callback(roomName);
    } else {
      alert("Room does not exist.");
    }
  });
}

export { createRoom, joinRoom };
