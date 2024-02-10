function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    
    noButton.style.position = "absolute";

    
    document.getElementsByClassName("image")[0].src = "8fczav.jpg";

    
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    
    document.getElementById("question").textContent =
      "Can't believe you chose no but the no button is just for visuals";
    document.getElementById("name").style.display = "none";

    
  }

  if (response === "Yes") {
    
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "LESGOOO see you on the 14th babe😘😘";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "giphy.gif";

    yesMessage.style.animation = "slide-in 1s forwards";
  
    

    
    document.getElementById("yesButton").remove();
  }
}
