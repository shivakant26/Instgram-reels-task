import { MdSend } from "react-icons/md";
import DrawyerHeader from "./DrHeader";

const Comment = ({ comment ,toggleComments}) => {
    return (
        <>
            <div className="show-comment">
                <div className="comments-contents">
                    <DrawyerHeader toggleComments={toggleComments}/>
                    <div className="comments-content">
                        {
                            comment?.map((item, index) => {
                                return (
                                    <div className="row" key={index}>
                                        <div className="user-comment">
                                            <span><img src={item.user.profile_picture} /></span>
                                            <span>{item.user.username}</span>
                                        </div>
                                        <div className="commt">{item.text}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="comment_input">
                        <span><img src={require("../../assets/images/download.jpeg")} /></span>
                        <span><input type="text" placeholder="write comment" /></span>
                        <span><MdSend /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment;