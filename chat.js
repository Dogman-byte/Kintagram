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
  
  var roomname = localStorage.getItem("room_name");
  var user = localStorage.getItem ("User");

  function sendmessage(){
    var message = document.getElementById("message").value;
    firebase.database().ref(roomname).push({
      name:user,
      message:message,
      like : 0
    });
    document.getElementById("message").value=(" ");
  }

  function getData() { 
    firebase.database().ref("/"+roomname).on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function(childSnapshot) {
        childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
          firebase_message_id = childKey; 
          message_data = childData;
        console.log(firebase_message_id);
        console.log(message_data);
        name2 = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        name2_with_tag ="<h4>"+name2+ "<img class='user_tick' src='tick.png'> </h4>";
        message_with_tag = "<h4>"+message+"</h4>";
        like_with_button = "<button class='btn btn-warning' id = " + firebase_message_id+" value = "+like+ " onclick='updatelikes(this.id)' >";
        span = "<span class = 'glyphicon glyphicon-thumbs-up' >like:"+like+ " </span></button><hr>";
        row = name2_with_tag + message_with_tag + like_with_button + span;
        document.getElementById("output").innerHTML += row;
        }});});}

        getData();

        function updatelikes(message_id){
          buttonid = message_id;
          likes = document.getElementById(buttonid).value;
          updatelike= Number(likes)+1;
          firebase.database().ref(roomname).child(message_id).update({
            like: updatelike
          });
        }