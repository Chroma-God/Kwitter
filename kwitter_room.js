
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBGXhJCqNcn8bWvoqiLlQERhDCcfyA_BSg",
      authDomain: "kwitter-4db6f.firebaseapp.com",
      databaseURL: "https://kwitter-4db6f-default-rtdb.firebaseio.com",
      projectId: "kwitter-4db6f",
      storageBucket: "kwitter-4db6f.appspot.com",
      messagingSenderId: "955799762780",
      appId: "1:955799762780:web:e816b64cb91dac60e87399"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
