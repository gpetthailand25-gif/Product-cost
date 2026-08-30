// firebase-config.js
// ค่าคอนฟิก Firebase กลาง ใช้ร่วมกันทุกหน้าในระบบต้นทุน NPD
// (cost-detail.html, materials.html, dashboard.html, trade-terms.html,
//  overhead-allocation.html, recipes.html)
//
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUhiPBcVte_1bd4QPVMIIYSpC2ySkEZ3M",
  authDomain: "product-cost-312f4.firebaseapp.com",
  projectId: "product-cost-312f4",
  storageBucket: "product-cost-312f4.firebasestorage.app",
  messagingSenderId: "783638208544",
  appId: "1:783638208544:web:a7b7f1ba0f672d44f99c45",
  measurementId: "G-TGG1100Y69"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
