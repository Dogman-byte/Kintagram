
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCFry0kVDkiDkO5F-BOEgldj2YSzR1ipHA",
      authDomain: "kinstagram-bd1d2.firebaseapp.com",
      databaseURL: "https://kinstagram-bd1d2-default-rtdb.firebaseio.com",
      projectId: "kinstagram-bd1d2",
      storageBucket: "kinstagram-bd1d2.appspot.com",
      messagingSenderId: "831695861558",
      appId: "1:831695861558:web:2dc1867bfb431d4157e597",
      measurementId: "G-55G1RPGWG6"
    };

    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
    var username = localStorage.getItem("User");
    document.getElementById("display_name").innerHTML = ("Welcome " + username );

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room name -" + Room_names);
       row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;    //Start code

      //End code
      });
   });
}
      
getData();

function Addroom(){
      var roomname = document.getElementById ("Room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name" , roomname);
      window.location=("chat.html");
}
function redirectToRoomName(name1){
      console.log(name1);
      localStorage.setItem("room_name", name1);
      window.location = "chat.html";
}