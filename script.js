document.addEventListener('DOMContentLoaded', () => {
    const projectDivs = document.querySelectorAll('.project');

  const circle = new Circle('circle', 5, 50);

  document.head.appendChild(circleScript);



    projectDivs.forEach((projectDiv) => {
      const header = projectDiv.querySelector('.project-header');
      const details = projectDiv.querySelector('.project-details');
      const media = projectDiv.querySelector('.project-media');
      const collapseButton = projectDiv.querySelector('.collapse-button');
  
      // Add the collapsed class to the elements by default
      projectDiv.classList.add('collapsed');
      details.classList.add('collapsed');
      collapseButton.classList.add('collapsed');
  
      collapseButton.addEventListener('click', () => {
        projectDiv.classList.toggle('collapsed');
        details.classList.toggle('collapsed');
        collapseButton.classList.toggle('collapsed');
      });
      
      const mediaItems = projectDiv.querySelectorAll('.project-media img, .project-media video');

        mediaItems.forEach((mediaItem) => {
        mediaItem.addEventListener('click', () => {
        mediaItem.classList.toggle('maximized');
        projectDiv.classList.toggle('media-maximized');
        document.body.classList.toggle('no-scroll');
      });
    });
      
    });

    
  });
  