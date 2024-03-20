// database.js
import { getDatabase, ref, push, onValue } from "firebase/database";
import { app } from "./firebaseConfig";

const database = getDatabase(app);

function sendMessage(roomId, message) {
  push(ref(database, `rooms/${roomId}/messages`), message);
}

function receiveMessages(roomId, callback) {
  onValue(ref(database, `rooms/${roomId}/messages`), (snapshot) => {
    const messages = [];
    snapshot.forEach((child) => {
      messages.push(child.val());
    });
    callback(messages);
  });
}

export { sendMessage, receiveMessages };
