var firebaseConfig = {
      apiKey: "AIzaSyA4G7nz1BuioMRmKuuyIWaiyDIRgo6M_Mg",
      authDomain: "kwitter2-7e44a.firebaseapp.com",
      databaseURL: "https://kwitter2-7e44a-default-rtdb.firebaseio.com",
      projectId: "kwitter2-7e44a",
      storageBucket: "kwitter2-7e44a.appspot.com",
      messagingSenderId: "230475391395",
      appId: "1:230475391395:web:d9acf1463b0abf13cffa16"
    };
    
    firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
        
        purpose: "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
}
