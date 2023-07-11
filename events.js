const bindEvents = () => {
  const projectDivs = document.querySelectorAll('.project');
  projectDivs.forEach((projectDiv) => {

    const collapseButton = projectDiv.querySelector('.collapse-button');

    collapseButton.addEventListener('click', () => {
      const details = projectDiv.querySelector('.project-details');
      const projectMedia = projectDiv.querySelectorAll('.project-media img, .project-media video');

      

      
      projectDiv.classList.toggle('collapsed');
      details.classList.toggle('collapsed');
      collapseButton.classList.toggle('collapsed');
      



      projectMedia.forEach((item, index) => {
        item.style.setProperty('--delay-index', (index));
      });

      projectDiv.style.maxHeight = projectDiv.scrollHeight + 'px'; // Set max-height to the content's height
      

    });
  });
};

  