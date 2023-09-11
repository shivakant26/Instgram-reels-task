import DrawyerHeader from "../comments/DrHeader";

const Share = ({comment, toggleShare }) => {
    return (
        <>
            <div className="show-comment">
                <DrawyerHeader toggleShare={toggleShare} id="share" />
                <div className="comments-content">
                    {
                        comment?.map((item, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="user-comment">
                                        <span><img src={item.user.profile_picture} /></span>
                                        <span>{item.user.username}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Share;