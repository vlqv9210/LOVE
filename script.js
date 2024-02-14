const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  if (e.target.matches('.next')) {
    slider.append(items[0]);
  }
  if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]);
  }
}
function toggleValentineCard() {
  var card = document.getElementById('valentineCard');
  card.style.display = (card.style.display === 'none') ? 'block' : 'none';
}

document.getElementById('valentineCardButton').addEventListener('click', toggleValentineCard);

function showFullScreenSweaterImage() {
  var sweaterImage = document.getElementById("sweaterImage");
  sweaterImage.style.display = "block";
  if (sweaterImage.requestFullscreen) {
    sweaterImage.requestFullscreen();
  } else if (sweaterImage.webkitRequestFullscreen) { /* Safari */
    sweaterImage.webkitRequestFullscreen();
  } else if (sweaterImage.msRequestFullscreen) { /* IE11 */
    sweaterImage.msRequestFullscreen();
  }
}
function showFullScreenFunkoImage() {
  var sweaterImage = document.getElementById("FunkoImage");
  sweaterImage.style.display = "block";
  if (sweaterImage.requestFullscreen) {
    sweaterImage.requestFullscreen();
  } else if (sweaterImage.webkitRequestFullscreen) { /* Safari */
    sweaterImage.webkitRequestFullscreen();
  } else if (sweaterImage.msRequestFullscreen) { /* IE11 */
    sweaterImage.msRequestFullscreen();
  }
}

function playFullScreenVideoExtraCredit() {
  var video = document.getElementById("bubbleVideo");
  video.style.display = "block";
  video.play();
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { /* Safari */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE11 */
    video.msRequestFullscreen();
  }
}

function playFullScreenVideo() {
  var video = document.getElementById("myVideo");
  video.style.display = "block";
  video.play();
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { /* Safari */
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) { /* IE11 */
    video.msRequestFullscreen();
  }
}
document.getElementById("valentineCardButton").addEventListener("click", function() {
  // Create the Valentine's Day card element
  var valentineCard = document.createElement("div");
  valentineCard.className = "valentineCard";
  valentineCard.innerHTML = `
    <div class="happy-valentines">
      <div class="valentineCard">
        <div class="clouds"></div>
        <div class="hearts">
          <div class="heartOne">
            <div class="left-side"></div>
            <div class="right-side"></div>
          </div>
          <div class="heartTwo">
            <div class="left-side"></div>
            <div class="right-side"></div>
          </div>
          <div class="heartThree">
            <div class="left-side"></div>
            <div class="right-side"></div>
          </div>
          <div class="heartFour">
            <div class="left-side"></div>
            <div class="right-side"></div>
          </div>
          <div class="heartFive">
            <div class="left-side"></div>
            <div class="right-side"></div>
          </div>
        </div>
        <div class="text"><span>Happy Valentine's Day!</span></div>
        <p class="hover">- hover over the text -</p>
      </div>
    </div>
  `;
  
  // Insert the card after the button
  var button = document.getElementById("valentineCardButton");
  button.parentNode.insertBefore(valentineCard, button.nextSibling);

  // Toggle full screen mode for the card
  toggleFullScreen(valentineCard);

  // Adjust text size dynamically based on full screen mode
  var text = document.querySelector(".text");
  var span = document.querySelector(".text span");
  if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
    span.style.fontSize = "6vw"; // Adjust font size for full screen
  } else {
    span.style.fontSize = "30px"; // Default font size
  }
});

// Function to toggle full screen mode
function toggleFullScreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) { /* Safari */
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { /* IE11 */
    element.msRequestFullscreen();
  }
}


document.addEventListener('click', activate, false);
document.addEventListener('click', activate, false);
