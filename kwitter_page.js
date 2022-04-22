//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDgqS79EX9wvvhAnwqKWIpnSloeETTNor8",
      authDomain: "kwitter-a55aa.firebaseapp.com",
      databaseURL: "https://kwitter-a55aa-default-rtdb.firebaseio.com",
      projectId: "kwitter-a55aa",
      storageBucket: "kwitter-a55aa.appspot.com",
      messagingSenderId: "355150191687",
      appId: "1:355150191687:web:82a3f570f354481d93e562"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
