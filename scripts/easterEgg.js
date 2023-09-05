const setupEasterEgg = ()  => {

    const toggleBtn = document.getElementById('toggleBtn');
    const btnImg = document.getElementById('btnImg');
    let isHammerCursor = false;

    //cursor swapping function
    function swapCursors(){
        if (isHammerCursor) {
          document.body.style.cursor = "auto";
          btnImg.src = 'images/Hammer.png';
      } else {
          document.body.style.cursor = `url('images/HammerSmall.png') 16 16, auto`;
          btnImg.src = 'images/Pointer.png';
      }
      isHammerCursor = !isHammerCursor;
      
    }

    //binding cursor swapping function
    toggleBtn.addEventListener('click', () => {
      swapCursors();

  });
  


  //function handling letters falling apart
  function animateLetterFall(letter, initialX, initialY) {
    const startTime = performance.now();
    const duration = 2000; // duration of the animation in milliseconds
    const acceleration = 4; // controls the rate of acceleration

    function animate(time) {
        const elapsed = (time - startTime) / 1000;  // time elapsed in seconds

        const newY = initialY + acceleration * elapsed * elapsed * 500; // Using kinematic equation for uniformly accelerated motion: d = 0.5 * a * t^2
        letter.style.transform = `translate(${initialX}px, ${newY}px)`;

        if (elapsed < duration / 1000) {
            requestAnimationFrame(animate);
        } else {
            letter.remove();
        }
    }

    requestAnimationFrame(animate);
}

//binding the text breaking
document.body.addEventListener('mousedown', function(e) {
  if (isHammerCursor) {
      const element = e.target;
      const validElements = ['H1', 'H2', 'H3', 'H4', 'P'];

      if (validElements.includes(element.tagName) && element.textContent.trim() !== '') {
          const textContent = element.textContent.trim();
          
          // Get the styles of the clicked text
          const computedStyle = window.getComputedStyle(element);
          const fontSize = computedStyle.getPropertyValue('font-size');
          const fontFamily = computedStyle.getPropertyValue('font-family');
          const fontWeight = computedStyle.getPropertyValue('font-weight');
          const fontStyle = computedStyle.getPropertyValue('font-style');
          const color = computedStyle.getPropertyValue('color');
          
          // Container to store positions of each character
          let positions = [];

          // Temporary place each character in a span and get its position
          element.innerHTML = Array.from(textContent).map(letter => `<span style="position: relative; display: inline-block;">${letter}</span>`).join('');

          element.childNodes.forEach(child => {
              const rect = child.getBoundingClientRect();
              positions.push({
                  left: rect.left + window.scrollX,
                  top: rect.top + window.scrollY,
                  char: child.textContent
              });
          });

          // Clear out the element's content
          element.textContent = '';

          positions.forEach(pos => {
              const flyingLetter = document.createElement('span');
              flyingLetter.textContent = pos.char;
              flyingLetter.classList.add('flying-letter');
              flyingLetter.style.left = pos.left + "px";
              flyingLetter.style.top = pos.top + "px";

              // Apply the captured styles to the flying letters
              flyingLetter.style.fontSize = fontSize;
              flyingLetter.style.fontFamily = fontFamily;
              flyingLetter.style.fontWeight = fontWeight;
              flyingLetter.style.fontStyle = fontStyle;
              flyingLetter.style.color = color;

              // Randomly determine the transform (translation) values
              const randomX = (Math.random() - 0.5) * 800;
              const randomY = (Math.random() - 0.5) * 1000;

              animateLetterFall(flyingLetter, randomX, randomY);


              document.body.appendChild(flyingLetter);
          });
      }
  }
});


const easterEgg = document.getElementById('easterEgg');
//function for breaking the egg 
function animateEggHalf(half, initialX, initialY,rotDir) {
  const startTime = performance.now();
  const duration = 2000; 
  const acceleration = 1; 
  const rotationSpeed = 250 + Math.random()*100; 

  function animate(time) {
      const elapsed = (time - startTime) / 1000; 

      const newY = initialY + (0.5 * acceleration * elapsed * elapsed * 500);
      half.style.transform = `translate(${initialX * elapsed}px, ${newY}px) rotate(${rotationSpeed * elapsed*rotDir}deg)`;

      if (elapsed < duration / 1000) {
          requestAnimationFrame(animate);
      } else {
          half.remove();
      }
  }

  requestAnimationFrame(animate);
}


//click bind for breaking the egg
easterEgg.addEventListener('click', function() {
    const rect = easterEgg.getBoundingClientRect();
    const imgSrc = easterEgg.src;

    for (let i = 0; i < 2; i++) {
        const half = document.createElement('div');
        half.classList.add('flying-egg-half');
        half.style.left = `${rect.left + window.pageXOffset + i * rect.width / 2}px`;
        half.style.top = `${rect.top + window.pageYOffset}px`;
        half.style.width = `${rect.width / 2}px`;
        half.style.height = `${rect.height}px`;
        half.style.backgroundImage = `url(${imgSrc})`;
        half.style.backgroundPosition = i === 0 ? '0% 0%' : '-100% 0%';

        const direction = i === 0 ? 0.2 : 1;  // 20% speed for the left half

        animateEggHalf(half, direction * 100, (Math.random() - 0.5) * 200,(i*2)-1); 

        document.body.appendChild(half);
    }

    easterEgg.remove();

    const toggleButton = document.getElementById('toggleBtn');
    toggleButton.querySelector('#btnImg').style.display = 'block';
    swapCursors();//must be called to negate the fact that breaking the egg also swaps cursors
  

    // Create the "You found it!" message
    const message = document.createElement('div');
    message.innerText = "You found the text breaker! \n Now equip and use it!";
    message.style.position = "absolute";
    message.style.left = `${rect.left + window.pageXOffset}px`;
    message.style.top = `${rect.top + window.pageYOffset + rect.height + 10}px`;
    message.style.opacity = "1";
    message.style.transition = "opacity 1s ease 2s";
    message.style.animation = "moveUpAndFade 4s forwards";
    document.body.appendChild(message);

    //set the styles
    message.style.color = "white";
    message.style.fontSize = "24px";  // You can adjust the size as per your preference

    // Remove the message after 3 seconds
    setTimeout(() => {
        message.remove();
    }, 3000);

});


};