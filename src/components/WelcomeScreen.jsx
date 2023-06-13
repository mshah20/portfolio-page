import './WelcomeScreen.css';
import '../FontsAndIcons.css';
import backgroundVideo from '../media/hexagonBackgroundVideo.mp4';

const WelcomeScreen = () => {
  return (
    <div id='welcome-screen' className='section'>
      <div className='background-video-container'>
        <video className="background-video"
          autoPlay loop muted
        >
          <source src={backgroundVideo} type='video/mp4' />
        </video>  
      </div>

      <div className='welcome-text-container'>
        <h1>Hi,
          <span className='welcome-text-highlight'> I'm Mueed</span>
        </h1>
        <p>a programmer</p>
      </div>

      <div className='arrow-text-bottom-container'>
        <p className='arrow-text'>View my work</p>
        <a href='#projects-screen'>
          <span className='material-symbols-outlined arrow-down' style={{fontSize: 40}}>expand_more</span>
        </a>
      </div>
    </div>
  );
}

export default WelcomeScreen;