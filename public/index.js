var x = document.getElementById('output');
function getLocation(){
   if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(showPosition);
   } else{
       x.innerHTML = "Browser not supporting"
   }
}
function showPosition(position){
    // x.innerHTML = "latitude = "+position.coords.latitude;
    // x.innerHTML += "<br >"
    // x.innerHTML += "Longitude = "+position.coords.longitude;

    var locAPI = "https://api.opencagedata.com/geocode/v1/json?q="+position.coords.latitude+"+"+position.coords.longitude+"&key=9d2e1fe558264a7ebc4947168caf1f27";
    // x.innerHTML = locAPI;
    $.get({
        url : locAPI,
        success: function(data){
            console.log(data);
            x.innerHTML = data.results[0].components.city; 
            x.innerHTML += ", "
            x.innerHTML += data.results[0].components.state;
            

          if( data.results[0].components.city === "Mumbai"){
            $(function(){
                $("#DivContent").load("content.html"); 
              });
              
          } 
           else if(data.results[0].components.city === "Navi Mumbai"){
            $(function(){
                $("#DivContent").load("navimumbai.html"); 
              });
           }
           else if(data.results[0].components.city === "Thane"){
            $(function(){
                $("#DivContent").load("thane.html"); 
              });
           }
           else if(data.results[0].components.city === "Pune"){
            $(function(){
                $("#DivContent").load("pune.html"); 
              });
           }
          else{
              console.log("not");
              
          }
          
                
        

        }
    
        

        })
        
    }
    function myFunction() {
        document.getElementById("bt").style.opacity = "1";
    }
    function myClick() {
        alert("Thank you! We will add it to our data set once the information has been verified.")
    }

    function myCity1(){
        $(function(){
            $("#DivContent").load("content.html"); 
          });
    }
    function myCity2(){
        $(function(){
            $("#DivContent").load("navimumbai.html"); 
          });
    }
    function myCity3(){
        $(function(){
            $("#DivContent").load("thane.html"); 
          });
    }
    function myCity4(){
        $(function(){
            $("#DivContent").load("pune.html"); 
          });
    }