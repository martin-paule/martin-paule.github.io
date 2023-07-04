// Circle class
class Circle {
    constructor(elementId, speed, range) {
      this.circle = document.getElementById(elementId);
      this.circleX = 0;
      this.circleY = 0;
      this.speed = speed;
      this.range = range;
  
      // Attach the updateCirclePosition function to the 'mousemove' event
      document.addEventListener('mousemove', this.updateCirclePosition.bind(this));
    }
  
    // Update the circle's position based on the cursor position
    updateCirclePosition(event) {
      // Get the cursor's position
      const cursorX = event.clientX;
      const cursorY = event.clientY;
  
      // Calculate the distance between the circle and the cursor
      const distance = Math.sqrt(
        Math.pow(this.circleX - cursorX, 2) + Math.pow(this.circleY - cursorY, 2)
      );
  
      // Update the circle's position
      if (distance > this.range) {
        // Calculate the angle between the circle and the cursor
        const angle = Math.atan2(cursorY - this.circleY, cursorX - this.circleX);
  
        // Calculate the new position of the circle
        this.circleX += Math.cos(angle) * this.speed;
        this.circleY += Math.sin(angle) * this.speed;
  
        // Set the new position of the circle
        this.circle.style.left = this.circleX + 'px';
        this.circle.style.top = this.circleY + 'px';
  
        // Change the circle's color to red
        this.circle.style.backgroundColor = 'red';
      } else {
        // Change the circle's color to green
        this.circle.style.backgroundColor = 'green';
      }
    }
  }
  