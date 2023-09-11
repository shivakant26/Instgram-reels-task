import React from "react";
import Video from "./components/Video/Video";
import "./App.css";
import { reelsData } from "./reeldata/reelsdata";

export default function App() {
  return (
    <div className="App">
      <center>
        <h3>Reel</h3>
        <div className="reels">
          <div className="video-container" id="video-container">
            {reelsData.map((list, i) => {
              return(
                <>
                  <Video
                    key={i}
                    channel={list.channel}
                    song={list.song}
                    url={list.media_url}
                    likes={list.likes}
                    comment={list.comments}
                    shares={list.shares}
                    user={list.user.username}
                    caption={list.caption}
                    songs={list.song}
                  />
                </>
              )
            }
            )}
          </div>
        </div>
      </center>
    </div>
  );
}
