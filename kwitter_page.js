//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        msg = message_data['message'];
                        like = message_data['like'];
                        name_tag = '<h4>' + name + '<img class="user_tick" src="tick.png"> </h4>';
                        message_tag = '<h4 class="message_h4" >' + msg + '</h4>';
                        button_tag = '<button class="btn btn-warning" id="' + firebase_message_id + '" value="' + like + '" onclick="updateLikes(this.id)">';
                        span_tag = '<span class="glyphicon glyphicon-thumbs-up">like:' + like + '</span> </button> <hr>';
                        row=name_tag+message_tag+button_tag+span_tag;
                        document.getElementById("output").innerHTML+=row;
                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function send() {
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
function updateLikes(message_id){
      console.log(message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      update_like=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:update_like
      });
}