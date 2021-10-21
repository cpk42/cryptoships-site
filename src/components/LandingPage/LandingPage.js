import Particles from 'react-particles-js';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-nav"></div>
      <h1 className="main-header text-header">Crypto Ships</h1>
    </div>
  );
}

/*       
<div id="landing-page-particles">
        <Particles params={{
          height: "100vh",
          width: "100vw",
          particles: {
            number: {
              value: 400,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            color: {
              value: '#fff'
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 3
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              speed: 0.2
            }
          }
        }} />
      </div>
       */