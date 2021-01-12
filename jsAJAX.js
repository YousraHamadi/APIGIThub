// fonctionnement de barsearch 
function get(){
    var username= document.getElementById("username").value;
    console.log("https://api.github.com/users/"+username);
    var arr = new XMLHttpRequest;
    var DATA = "https://api.github.com/users/"+username;
    
    arr.open("GET",DATA,true);
    
    var objGet;
     arr.onload = function(){
     if (this.status == 200){
        jsonArr = JSON.parse(this.responseText);
       objGet = {
       login:jsonArr.login,
       avatar:jsonArr.avatar_url,
       repos:jsonArr.public_repos,
       followers:jsonArr.followers
     }

     document.getElementById("avatar").src= objGet.avatar;	
     document.getElementById("Nom").innerHTML= objGet.login;	
     document.getElementById("Followers").innerHTML= objGet.followers	;
     document.getElementById("repos").innerHTML= objGet.repos	;	
     document.getElementById("link").href= "https://github.com/"+objGet.login;  
   } else{
     document.getElementById("avatar").src= "404.jpg";	
     document.getElementById("Nom").innerHTML= "Profile not found ! ";	
     document.getElementById("followers").innerHTML= "00";
     document.getElementById("repos").innerHTML= "00";
    document.getElementById("link").href= "#";
      

     }  
    }
    arr.send();
} 
// getAll1 function pour refrecher body et ramener quatre utilisateurs

function getALL1() {
  var array=[];
  var objDis;
  var nom= document.getElementsByClassName("users");
  var pictur= document.getElementsByClassName("image");

  fetch('https://api.github.com/users')
      .then(res => res.json())
        .then(data => {
          for (var i=0;i<4;i++){

            objDis={
              UserName: data[i].login,
              UserPicture: data[i].avatar_url
                     }
            array.push(objDis);
            nom.item(i).innerHTML= array[i].UserName;
            pictur.item(i).src=array[i].UserPicture;
         } });
        }