const bindEvents = ()  => {
    /* add event listeners*/
  const projectDivs = document.querySelectorAll('.project');
  projectDivs.forEach((projectDiv) => {
    const collapseButton = projectDiv.querySelector('.collapse-button');
    const details = projectDiv.querySelector('.project-details');

    collapseButton.addEventListener('click', () => {

      projectDiv.classList.toggle('collapsed');
      details.classList.toggle('collapsed');
      collapseButton.classList.toggle('collapsed');

    });

    
  });

}