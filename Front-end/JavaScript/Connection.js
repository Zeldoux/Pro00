// get element to open the connection window 

const loginbutton = document.getElementById("loginbutton");
const connectwindow = document.querySelector(".Connection_Window");


// show window when click on login button 
loginbutton.addEventListener("click",function () {
    connectwindow.classList.add("show-connectwindow");
})


// Function to close the connection window

function closeConnectionWindow() {
    connectwindow.classList.remove("show-connectwindow"); // visibility class removed from the connectionwindow 
  }

  
// close the connection window when click outside of it 
document.addEventListener("click",function(event) {
    if (!connectwindow.classList.contains("show-connectwindow")) return; // Skip if window is already hidden
    if (event.target === loginbutton || connectwindow.contains(event.target)) return;  // avoid closing window when  clicks on login button and inside the window
    closeConnectionWindow();
})