import React, { useState } from "react";
import "./Footer.css";
import { FaHeart, FaRegComment, FaRegHeart , FaMusic} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

import ProfileImage from "../../assets/images/download.jpeg";
import Comment from "../comments/Comment";
import Share from "../share/Share";

export default function Footer({ likes, comment, shares, caption , song ,user}) {
  const [showLike, setShowLike] = useState(true)
  const [like, setLikes] = useState(likes);
  const [showComments, setShowComments] = useState(false);
  const [showShare , setShowShare] = useState(false)
  const handleLike = () => {
    if (showLike) {
      setLikes(like + 1);
    } else {
      setLikes(like - 1);
    }
    setShowLike(!showLike);
  };
  const toggleComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

  const toggleShare = () =>{
    setShowShare(!showShare)
  }
  return (
    <>
      <div className='reels-footer'>
        <div className='reels-footer-left w-80'>
          <div className='user-profile'>
            <div className='user-profile-info'>
              <div>
                <img src={ProfileImage} alt='profile_image' />
              </div>
              <div>{user}</div>
              <div className='follow'>follow</div>
            </div>
          </div>
          <div className='reels_title'>
            <p>{caption}</p>
          </div>
          <div className="songs">
            <span><FaMusic/></span><marquee>{song}</marquee>
          </div>
        </div>
        <div className='reels-footer-right w-20'>
          <div className="reel-actions">
            <div className="reels-action d-flex" onClick={handleLike}>
              {showLike ? <FaRegHeart /> : <FaHeart style={{ color: "red" }} />}
              {like}
            </div>
            <div className="reels-action d-flex" onClick={toggleComments}>
              <FaRegComment />
              {comment?.length}
            </div>
            <div className="reels-action d-flex" onClick={toggleShare}>
              <FiSend />
              {shares}
            </div>
            <div className="reels-action d-flex">
              <BsThreeDotsVertical />
            </div>
            <div className="reels-action profile-img">
              <img src={ProfileImage} alt='profile_image' />
            </div>
          </div>
        </div>
      </div>
        {showComments && <Comment comment={comment} toggleComments={toggleComments}/>}
        {showShare && <Share  comment={comment} toggleShare={toggleShare} />}
    </>
  );
}
