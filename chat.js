// Firebase 앱 초기화를 위한 Import
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

// Firebase 설정
const firebaseConfig = {
    apiKey: "AIzaSyCv18vPy6A--AmTWH-x1oATyA86c-885FY",
    authDomain: "my-chat-app-2023-unique.firebaseapp.com",
    databaseURL: "https://my-chat-app-2023-unique-default-rtdb.firebaseio.com",
    projectId: "my-chat-app-2023-unique",
    storageBucket: "my-chat-app-2023-unique.appspot.com",
    messagingSenderId: "605615448354",
    appId: "1:605615448354:web:9f2f8a41fdd955b08cc57b"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase Realtime Database 인스턴스 가져오기
const database = getDatabase(app);

// 메시지 전송 함수
function sendMessage(roomId, message) {
    const messagesRef = ref(database, `rooms/${roomId}/messages`);
    push(messagesRef, {
        message,
        timestamp: Date.now()
    });
}

// 메시지 실시간 수신 함수
function receiveMessages(roomId) {
    const messagesRef = ref(database, `rooms/${roomId}/messages`);
    onValue(messagesRef, (snapshot) => {
        const messages = snapshot.val();
        if (messages) {
            // 메시지 표시 로직
            // 예: document.getElementById('messagesList').innerHTML = ...
            console.log(messages);
        }
    });
}

// 예제 사용법
const roomId = "exampleRoomId"; // 적절한 방 ID 설정
document.getElementById('sendMessage').addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    sendMessage(roomId, message);
    messageInput.value = ''; // 입력 필드 초기화
});

// 메시지 수신 시작
receiveMessages(roomId);
