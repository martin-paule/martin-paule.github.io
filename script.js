document.addEventListener('DOMContentLoaded', () => {

  const projectTemplate = document.getElementById('project-template');
  const projectsContainer = document.getElementById('projects-container');

  const projectsData = [
    {
      title: 'Super-Serious-Space-Shooter (2019)',
      mainFocus: 'Creating a simple game slice.',
      developmentEnvironment: 'C++, SFML library',
      description: 'SSSS is an original game, made as a final project in the 1st year at Abertay University. It is purely written in C++, without the use of any engines.',
      notableFeatures: 'Original audio & sprites',
      downloadLink: 'https://github.com/martin-paule/Super-Serious-Space-Shooter',
      media: {
        images: [
          'images/SSSS/Main_Menu.png',
          'images/SSSS/in_game.png',
          'images/SSSS/Upgrade_Screen.png'
        ],
        video: 'videos/ssss.mp4'
      }
    },
    {
      title: 'Genetic Learning (2020)',
      mainFocus: 'AI.',
      developmentEnvironment: 'C#, Unity',
      description: 'AIIIIIIIIIIIIIIIIIIIIII',
      notableFeatures: 'Data Recording, AI',
      downloadLink: 'https://github.com/TheBigPaws/AR_Application',
      media: {
        images: [
          'images/SSSS/Main_Menu.png',
          'images/SSSS/in_game.png',
          'images/SSSS/Upgrade_Screen.png'
        ],
        video: 'https://www.youtube.com/watch?v=BHOS4hi0oZc'
      }
    },
  ];

  /*function for setting  data of projects's data element*/
  const setProjectData = (element, value) => {
    if (element) {
      element.textContent = value;
    }
  };
  
  /*set all project#s data from array above*/
  projectsData.forEach((projectData) => {
    const projectClone = projectTemplate.content.cloneNode(true);

    setProjectData(projectClone.querySelector('.project-title'), projectData.title);
    setProjectData(projectClone.querySelector('.main-focus'), projectData.mainFocus);
    setProjectData(projectClone.querySelector('.development-environment'), projectData.developmentEnvironment);
    setProjectData(projectClone.querySelector('.description'), projectData.description);
    setProjectData(projectClone.querySelector('.notable-features'), projectData.notableFeatures);
    setProjectData(projectClone.querySelector('.info-tooltip'), '?');


    
    
    const downloadButton = projectClone.querySelector('.download-button');
    if (downloadButton) {
      downloadButton.href = projectData.downloadLink;
      downloadButton.textContent = 'Download';
    }

    const projectMedia = projectClone.querySelector('.project-media');
    if (projectMedia && projectData.media && projectData.media.images) {
      projectData.media.images.forEach((imagePath) => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = 'Project Image';
        projectMedia.appendChild(img);
      });
    }

    if (projectMedia && projectData.media && projectData.media.video) {
      const video = document.createElement('video');
      video.controls = true;
      const source = document.createElement('source');
      source.src = projectData.media.video;
      source.type = 'video/mp4';
      video.appendChild(source);
      projectMedia.appendChild(video);
    }

    projectsContainer.appendChild(projectClone);
  });

  /* HANDLE RESIZING OF IMAGES WITH CLICK*/
  const projectDivs = document.querySelectorAll('.project');
  projectDivs.forEach((projectDiv) => {
    const collapseButton = projectDiv.querySelector('.collapse-button');
    const details = projectDiv.querySelector('.project-details');

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






