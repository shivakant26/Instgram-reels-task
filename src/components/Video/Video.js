import React, { useState, useRef, useEffect } from "react";
import "./Video.css"; // Import your CSS styles here
import { BiSolidVolumeMute } from "react-icons/bi";
import { GoVolume } from "react-icons/go";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Video = ({ url, likes, comment, shares, caption, song, user }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoClick = () => {
    toggleMute();
  };

  useEffect(() => {
    const video = videoRef.current;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isPlaying) {
            video?.play();
            setIsPlaying(true);
          }
        } else {
          if (isPlaying) {
            video.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (video) {
      observer.observe(video);
    }

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, [isPlaying , isMuted]);

  return (
    <div className="video-container">
      <Header />
      <video
        ref={videoRef}
        src={url}
        autoPlay
        loop
        muted={isMuted}
        className="video-player"
        onClick={handleVideoClick}
      ></video>
      <div className="mute-button">
        {isMuted ? (
          <BiSolidVolumeMute />
        ) : (
          // <GoVolume />""
          ""
        )}
      </div>
      <Footer likes={likes} comment={comment} shares={shares} caption={caption} song={song} user={user} />
    </div>
  );
}

export default Video;