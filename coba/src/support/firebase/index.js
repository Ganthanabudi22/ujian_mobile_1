import Frirebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCb36QGEFACOLzWc0Gw59l0vBzAJcK3BcE",
    authDomain: "managerapp-6975b.firebaseapp.com",
    databaseURL: "https://managerapp-6975b.firebaseio.com",
    projectId: "managerapp-6975b",
    storageBucket: "managerapp-6975b.appspot.com",
    messagingSenderId: "303146773922",
    appId: "1:303146773922:web:c8cbc4d59ddc75c0"
  };
export const Fire =Frirebase.initializeApp(firebaseConfig)