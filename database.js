// database.js
import { getDatabase, ref, push, onValue } from "firebase/database";
import { app } from "./firebaseConfig.js"; // Firebase 앱 임포트

const database = getDatabase(app);

// 데이터베이스에 데이터 쓰기
function writeData(path, data) {
  const dataRef = push(ref(database, path));
  set(dataRef, data);
}

// 데이터베이스에서 데이터 실시간 읽기
function readData(path, callback) {
  const dataRef = ref(database, path);
  onValue(dataRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
}

export { writeData, readData };
