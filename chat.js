// chat.js
import { writeMessage, readMessages } from './database.js';

const roomId = "exampleRoom"; // 예시 채팅방 ID, 실제 구현에서는 동적으로 설정

// 메시지 전송 버튼 이벤트 리스너
document.getElementById('sendMessage').addEventListener('click', () => {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;
  writeMessage(roomId, { text: message, timestamp: Date.now() });
  messageInput.value = ''; // 입력 필드 초기화
});

// 메시지 실시간 읽기
readMessages(roomId, (messages) => {
  const messagesList = document.getElementById('messagesList');
  messagesList.innerHTML = ''; // 메시지 목록 초기화
  messages.forEach((msg) => {
    const li = document.createElement('li');
    li.textContent = msg.text;
    messagesList.appendChild(li);
  });
});
