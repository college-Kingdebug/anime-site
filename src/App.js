import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './App.css';

function VideoPlayer({ src }) {
  const videoRef = React.useRef(null);
  React.useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      width: 300,
    });
    return () => player.dispose();
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

function App() {
  const episodes = [
    { title: "One Punch Man - 01", link: "https://1024terabox.com/s/12vRG2r904gQ3omqOtZFHsA" },
    { title: "One Punch Man - 02", link: "https://1024terabox.com/s/1AQfTAEzpVMC-FPTKsqBuBA" },
    { title: "One Punch Man - 03", link: "https://1024terabox.com/s/1esJP83_VxBXwJVBlc6BCXQ" },
    { title: "One Punch Man - 04", link: "https://1024terabox.com/s/13qmgSCF1uOrChsbMQWdHkQ" },
    { title: "One Punch Man - 05", link: "https://1024terabox.com/s/1jebzUD0L6tHvj8YVy2LQzA" },
    { title: "One Punch Man - 06", link: "https://1024terabox.com/s/1z25glQAmVsOF4OOnj6IREQ" },
    { title: "One Punch Man - 07", link: "https://1024terabox.com/s/1-UFbkbtafUnKdWJ--H77YQ" },
    { title: "One Punch Man - 08", link: "https://1024terabox.com/s/1krb4IDQyiMbETRbAwXKyMg" },
    { title: "One Punch Man - 09", link: "https://1024terabox.com/s/1DkeV43etV0bBzKgttO-fYQ" },
    { title: "One Punch Man - 10", link: "https://1024terabox.com/s/1k9oHr7Dc6QcvPu1yoyO02g" },
    { title: "One Punch Man - 11", link: "https://1024terabox.com/s/1rPrUD61L8yEXYUCtZUHdrg" },
    { title: "One Punch Man - 12", link: "https://1024terabox.com/s/1FnUbzosLQbgpjB4f1zQqFg" },
  ];

  return (
    <div style={{ background: '#1a1a1a', color: '#fff', padding: '20px' }}>
      <h1>Anime Site</h1>
      <input type="text" placeholder="Search anime..." style={{ padding: '5px', width: '200px' }} />
      <h2>One Punch Man - Season 1</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
        {episodes.map((ep, index) => (
          <div key={index}>
            <h3>{ep.title}</h3>
            <VideoPlayer src={ep.link} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;