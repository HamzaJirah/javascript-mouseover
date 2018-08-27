//select elements and save to a variable
var lis = document.querySelectorAll("li");

//ADD EVENT LISTENER
//loop through the list items
for(var i = 0; i < lis.length; i++){
  //add mouseover event
  lis[i].addEventListener("mouseover", function(){
    //what happens when mouseoover event is triggered
    this.style.color = "green";
  })
  //add mouseout event
  lis[i].addEventListener("mouseout", function(){

  })
}