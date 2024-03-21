// chat.js
import { getDatabase, ref, push, onValue } from "firebase/database";
import { app } from "./firebaseConfig.js"; // Firebase 앱 임포트

const database = getDatabase(app);

// 메시지 전송 함수
function sendMessage(message) {
  const messagesRef = ref(database, 'messages');
  push(messagesRef, { text: message });
}

// 메시지 실시간 수신 함수
function receiveMessages(callback) {
  const messagesRef = ref(database, 'messages');
  onValue(messagesRef, (snapshot) => {
    const messages = snapshot.val();
    callback(messages);
  });
}

export { sendMessage, receiveMessages };
