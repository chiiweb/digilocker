const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCtGApaxj06_cqPMzXXTtxORA08Z5t9ZuU",
  authDomain: "attendanceweb-37841.firebaseapp.com",
  databaseURL: "https://attendanceweb-37841-default-rtdb.firebaseio.com",
  projectId: "attendanceweb-37841",
  storageBucket: "attendanceweb-37841.firebasestorage.app",
  messagingSenderId: "921662905640",
  appId: "1:921662905640:web:d9af8e426adb2cbad0c41d",
  measurementId: "G-VZ370BF40V"
};

(function () {
  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    window.firebaseAuth = firebase.auth();
    window.firebaseDb = firebase.firestore();
    window.FIREBASE_READY = true;
    console.log("Firebase initialized");
  } catch (e) {
    console.warn("Firebase init failed:", e);
    window.FIREBASE_READY = false;
  }
})();