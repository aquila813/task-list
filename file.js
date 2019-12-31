
//First of all I am adding closeboxes on the right for all current to do's. Layout only, the below code will not remove the todo's
const dayByday = document.getElementsByTagName("LI");

for (i = 0; i < dayByday.length; i++) {
  const closebox = document.createElement("SPAN");
  const textType = document.createTextNode("x");
  closebox.className = "close";
  closebox.appendChild(textType);
  dayByday[i].appendChild(closebox);
}


//The below will allow removal of any to-do's. I opted for display: none instead of removing the elements.
const remove = document.getElementsByClassName("close");

for (i = 0; i < remove.length; i++) {
  remove[i].onclick = function() {
      this.parentElement.remove();
    }
  }

 

/* The below deals with new content being affixed to new to do's. The content variable is appended to textcontainer as content is set
to be anything put in as a value of the #myinput */
function newToDo() {
  const toDo = document.createElement("LI");
  const content = document.getElementById("myInput").value;
  const textContainer = document.createTextNode(content);
  toDo.appendChild(textContainer);

  if (content === '') {
      alert("You must write something!");
      } else {
      document.getElementById("myUL").appendChild(toDo);
    }

  //to make sure no value remains in the input field after adding a new toDo
  document.getElementById("myInput").value = "";



  //the following is to append a new closebox to new to do's, whereas the above was about appending content
  const closeNew = document.createElement("SPAN");
  const textNew = document.createTextNode("x");
  closeNew.className = "close";
  closeNew.appendChild(textNew);
  toDo.appendChild(closeNew);

  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      this.parentElement.remove();
    }
  }
}



// Lastly we shall focus on the change in style when a todo is completed. Toggling to a different class set with a tick and diff colours
const colours = document.getElementById("myUL");

colours.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
   }
 });
