

// get the navbar and the navbar offset Top 
const navbar = document.querySelector(".navbar");
const sticky = navbar.offsetTop;
window.addEventListener("scroll",function() {
    if (window.scrollY >= sticky ) { // 135 added to adjust time when navbar get "sticky"
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
});


// function to open the connection window 

const loginbutton = document.getElementById("loginbutton");
const connectwindow = document.querySelector(".Connection_Window");
loginbutton.addEventListener("click",function () {
    connectwindow.classList.add("show-connectwindow");
})

// Function to close the connection window

function closeConnectionWindow() {
    connectwindow.classList.remove("show-connectwindow"); // Replace "show" with your visibility class
  }

// close the connection window when click outside of it 
document.addEventListener("click",function(event) {
    if (!connectwindow.classList.contains("show-connectwindow")) return; // Skip if window is already hidden
    if (event.target === loginbutton || connectwindow.contains(event.target)) return;  // Ignore clicks on login button and inside the window
    closeConnectionWindow();
})
