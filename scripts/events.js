const bindEvents = () => {
  const projectDivs = document.querySelectorAll('.project');
  projectDivs.forEach((projectDiv) => {
    //Bind collapse button logic
    const collapseButton = projectDiv.querySelector('.collapse-button');
    collapseButton.addEventListener('click', () => {
      
      projectDiv.style.maxHeight = projectDiv.scrollHeight + 'px';
      const details = projectDiv.querySelector('.project-details');
      const projectMedia = projectDiv.querySelectorAll('.project-media img, .project-media video');
      
      //toggle collapsed
      collapseButton.classList.toggle('collapsed');
      projectDiv.classList.toggle('collapsed');
      details.classList.toggle('collapsed');
      
      
      //gradual one by one anim bounce on media
      projectMedia.forEach((item, index) => {
        item.style.animationPlayState = 'running'; // Enable the animation for the first three projects
        item.style.setProperty('--delay-index', (index));

      });

      projectDiv.style.maxHeight = projectDiv.scrollHeight + 'px'; 

    });
  });

  
  //bind show more button
  const projects = document.querySelectorAll('.project');
    const showMoreButton = document.getElementById('show-projects-button');
    showMoreButton.addEventListener('click', () => {
      projects.forEach((project, index) => {
        if (index >= 3) {
          const a = project.classList.toggle('hidden');
          if(a){
            showMoreButton.textContent = 'Show More';
          }else{
            showMoreButton.textContent = 'Show Less';

          }
        }
      });
    });
  

    //tooltip logic
    const infoIcon = document.getElementById('info-icon');
    const tooltip = document.getElementById('tooltip');

    infoIcon.addEventListener('mouseover', () => {
      tooltip.style.display = 'block';
    });

    infoIcon.addEventListener('mouseout', () => {
      tooltip.style.display = 'none';
    });

    




};

  