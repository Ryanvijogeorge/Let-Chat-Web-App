//Firebase Links
var firebaseConfig = {
  apiKey: "AIzaSyBUiVUixm6hmIb21t6HN3gcL2c7l5Ui7gk",
  authDomain: "let-chat-web-app-6e684.firebaseapp.com",
  databaseURL: "https://let-chat-web-app-6e684-default-rtdb.firebaseio.com",
  projectId: "let-chat-web-app-6e684",
  storageBucket: "let-chat-web-app-6e684.appspot.com",
  messagingSenderId: "356589090997",
  appId: "1:356589090997:web:6746b07e8ea942aa0fe6fc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding Room Name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}


function getData() {
  firebase.database().ref("/").on('value',
    function (snapshot) {
      document.getElementById("output").innerHTML =
        "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class = 'room_name' id =" + Room_names + " onclick = 'redirectToRoomName(this.id)' ># " + Room_names + "</div><hr>"; //End code
        document.getElementById("output").innerHTML += row;
        //End code
      });
    });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html;"
}