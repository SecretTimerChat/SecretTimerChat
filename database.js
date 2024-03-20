// database.js
import { getDatabase, ref, push, onValue } from 'firebase/database';
import app from './firebaseConfig';

const database = getDatabase(app);

// 메시지를 Realtime Database에 쓰는 함수
function writeMessage(roomId, message) {
  const messagesRef = ref(database, `rooms/${roomId}/messages`);
  push(messagesRef, message);
}

// 채팅방의 메시지를 실시간으로 읽는 함수
function readMessages(roomId, callback) {
  const messagesRef = ref(database, `rooms/${roomId}/messages`);
  onValue(messagesRef, (snapshot) => {
    const messages = [];
    snapshot.forEach((childSnapshot) => {
      messages.push(childSnapshot.val());
    });
    callback(messages);
  });
}

export { writeMessage, readMessages };
