function room(){
    User = document.getElementById("Name").value;
    localStorage.setItem("User" , User);
    window.location="Kinstagram_room.html";
}
