import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC5D0FNPJcBuA4U-A_m57tVGbJDjVoUU5o",
    authDomain: "quizapp-366dc.firebaseapp.com",
    databaseURL: "https://quizapp-366dc.firebaseio.com",
    projectId: "quizapp-366dc",
    storageBucket: "quizapp-366dc.appspot.com",
    messagingSenderId: "822167048689",
    appId: "1:822167048689:web:285b18d1476187d8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;
