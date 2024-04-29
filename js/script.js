var index = 0;
document.getElementById("buttonconfig").addEventListener("click", () => {
       var cores = ["red", "blue", "orange", "yellow", "green", "purple"];
       //
       document.getElementsByTagName("body")[0].style.background = cores[index++];
       //
       if (index > cores.length - 1) {
              index = 0;
       }
})