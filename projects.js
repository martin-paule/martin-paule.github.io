


const projectsData = [
    {
      title: 'Super-Serious-Space-Shooter (2019)',
      mainFocus: 'Creating a simple game slice.',
      developmentEnvironment: 'C++, SFML library',
      description: 'SSSS is a game made in 1st year at Abertay University. It is entirely made in C++, without the use of any engines.',
      notableFeatures: 'Original audio & sprites, endless wave & upgrade systems',
      downloadVers: 'Github Download (Source Code & Executable):',
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
      title: 'PixelMazed (2021)',
      mainFocus: 'Implement 3D collisions by utilizing 2D boxes.',
      developmentEnvironment: 'OpenGL (SDL)',
      description: 'PixelMazed is an original game, made in 2nd year at Abertay University. It is done entirely in c++ and there various notable features done in addition ofthe original scope of the project.',
      notableFeatures: 'Randomly generated dungeon, Minimap updating in real-time, Original audio & sprites',
      downloadVers: 'Github Download (Source Code):',
      downloadLink: 'https://github.com/martin-paule/PixelMazed',
      media: {
        images: [
          'images/SSSS/Main_Menu.png',
          'images/SSSS/in_game.png',
          'images/SSSS/Upgrade_Screen.png'
        ],
        video: 'https://www.youtube.com/watch?v=BHOS4hi0oZc'
      }
    },
    {
      title: 'Genetic Learning (2020)',
      mainFocus: 'AI.',
      developmentEnvironment: 'C#, Unity',
      description: 'AIIIIIIIIIIIIIIIIIIIIII',
      notableFeatures: 'Data Recording, AI',
      downloadVers: 'Github Download (Source Code):',
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
    {
      title: 'AR Adventures (2022)',
      mainFocus: 'Augmented Reality',
      developmentEnvironment: 'Unreal Engine, C++',
      description: 'Project made during the final year at Abertay University. Because this application was developed using the Google Pixel 4 and deployability for other platforms has not yet been explored, there is no official phone executable. However, the source code is publically available, which can be then built into an executable manually.',
      notableFeatures: 'Augmented Reality, Resource Managment, Visual Effects',
      downloadVers: 'Github Download (Source Code):',
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
  
  const populateProjects = ()  => {

    const projectTemplate = document.getElementById('project-template');
    const projectsContainer = document.getElementById('projects-container');
  

    /*set all project's text data*/
    projectsData.forEach((projectData) => {
    const projectClone = projectTemplate.content.cloneNode(true);

    setProjectData(projectClone.querySelector('.project-title'), projectData.title);
    setProjectData(projectClone.querySelector('.main-focus'), projectData.mainFocus);
    setProjectData(projectClone.querySelector('.development-environment'), projectData.developmentEnvironment);
    setProjectData(projectClone.querySelector('.description'), projectData.description);
    setProjectData(projectClone.querySelector('.notable-features'), projectData.notableFeatures);
    setProjectData(projectClone.querySelector('.download-vers'), projectData.downloadVers);

    
    /*set all project's download*/
    const downloadButton = projectClone.querySelector('.download-button');
    if (downloadButton) {
      downloadButton.href = projectData.downloadLink;
      downloadButton.textContent = 'Download';
    }

    /*set all project's media data*/
    const projectMedia = projectClone.querySelector('.project-media');
    if (projectMedia && projectData.media && projectData.media.video) {
      const video = document.createElement('video');
      video.controls = true;
      const source = document.createElement('source');
      source.src = projectData.media.video;
      source.type = 'video/mp4';
      video.appendChild(source);
      projectMedia.appendChild(video);
    }

    if (projectMedia && projectData.media && projectData.media.images) {
      projectData.media.images.forEach((imagePath) => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = 'Project Image';
        projectMedia.appendChild(img);
      });
    }

    projectsContainer.appendChild(projectClone);
  });
};