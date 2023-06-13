import './ProjectsScreen.css';
import marketingTemplate from '../media/product-landing-page.png';
import animalCrossing from '../media/animal-crossing-collection.png';
import financeTracker from '../media/finance-app.png';
import jeopardyQuestions from '../media/jeopardy-questions.png';
import weatherSearch from '../media/weather-search.png';
import portfolioExample from '../media/portfolio-example.png';

const projects = [
  {
    name: "Marketing Template",
    imageURL: marketingTemplate,
    skills: ["HTML", "CSS"],
    githubURL: "https://github.com/mshah20/product-page"
  },
  {
    name: "Animal Crossing Collection",
    imageURL: animalCrossing,
    skills: ["React", "Node.js", "Express", "Javascript", "CSS"],
    githubURL: "https://github.com/mshah20/animal-crossing-collection"
  },
  {
    name: "Finance Tracker",
    imageURL: financeTracker,
    skills: ["React", "Node.js", "Express", "CSS", "PostgreSQL", "pgAdmin4"],
    githubURL: "https://github.com/mshah20/finance-app"
  },
  {
    name: "Jeopardy Questions",
    imageURL: jeopardyQuestions,
    skills: ["React", "Javascript", "Axios"],
    githubURL: "https://github.com/mshah20/random-jeopardy-questions"
  },
  {
    name: "Weather Search",
    imageURL: weatherSearch,
    skills: ["React", "Javascript", "Axios", "CSS"],
    githubURL: "https://github.com/mshah20/weather-app",
    URL: "https://mshah20.github.io/weather-app/"
  },
  {
    name: "Portfolio Example",
    imageURL: portfolioExample,
    skills: ["React", "CSS", "Javascript"],
    githubURL: "https://github.com/mshah20/personal-webpage",
    URL: "https://mshah20.github.io/personal-webpage"
  },
]

const ProjectsScreen = () => {
  return (
    <div id='projects-screen' className='section'>
      <div className='arrow-text-top-container'>
        <p className='arrow-text'>Home</p>
        <a href='#welcome-screen'>
          <span className='material-symbols-outlined arrow-up' style={{fontSize: 40}}>expand_more</span>
        </a>
      </div>

      <div className='projects-container centered'>
        {projects.map( project => 
          <div className='project-window'
            key={project.name}
          >
            <div className='project-image'
              style={{backgroundImage: `url(${project.imageURL})`}}
            /> 
            
            <p className='project-title'>{project.name}</p>
            
            {project.URL && 
              <div className='visit-container'>
                <a href={project.URL} target='_blank' rel='noreferrer'>
                  <span className="material-symbols-outlined visit-icon">open_in_new</span>
                  <div className='icon-text-container'>
                    <p className='icon-text centered'>Visit webpage</p>
                  </div>
                </a>
              </div>
              
            }
            
            <div className='github-container'>
              <a href={project.githubURL} target='_blank' rel='noreferrer'>
                <svg className="github-icon" viewBox="0 0 512 512">
                  <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"
                  />
                </svg>
                <div className='icon-text-container'>
                  <p className='icon-text centered'>View on Github</p>
                </div>
              </a>
            </div>
            <div className='project-skills-container'>
              {project.skills.map(skill => 
                <p className='project-skills' key={skill}>{skill}</p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className='arrow-text-bottom-container'>
        <p className='arrow-text'>About Me</p>
        <a href='#about-screen'>
          <span className='material-symbols-outlined arrow-down' style={{fontSize: 40}}>expand_more</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectsScreen;