//  (function (){
//     let newtext=document.querySelector(".changetext")
//     console.log(newtext)
//     newtext.innerText="Hello World"
//     newtext.style.color="purple"
//  })()
  
// const changeText = document.querySelector("#change-text"); 
// changeText.addEventListener("click", function() {
//      changeText.textContent = "Hello World"; 
     
//     });


function replace(){
    let newtext1=document.getElementById("change-text1")
    newtext1.innerText="Welcome to Elevation Academy"
    newtext1.style.color="RED"
}

  let h1text=document.getElementsByClassName("h1text")
  h1text[0].setAttribute("style","color:red");
  h1text[0].setAttribute("id","heading");

  function changedirection(){
  document.querySelector(".parent").style.flexDirection="column";
  }



