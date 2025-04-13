import { useState, useEffect, useRef } from 'react';

export default function AudioPlayer({ audioSrc, autoPlay = false, startTime = 0 }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  
  useEffect(() => {
    if (audioRef.current && autoPlay) {
      audioRef.current.currentTime = startTime;
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(error => {
            console.log('자동 재생 실패:', error);
            setIsPlaying(false);
          });
      }
    }
  }, [autoPlay, startTime]);
  
  const togglePlay = () => {
    const audio = audioRef.current;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => {
          console.log('재생 실패:', error);
        });
    }
  };
  
  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };
  
  return (
    <div className="audio-player">
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        muted={isMuted}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="controls">
        <p className="music_info">이다능 - 세상 그 누구보다 소중해</p>
        <button onClick={togglePlay}>
          {isPlaying ? '일시정지' : '재생'}
        </button>
        
        <button onClick={toggleMute}>
          {isMuted ? '음소거 해제' : '음소거'}
        </button>
      </div>
    </div>
  );
}
