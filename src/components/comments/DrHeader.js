const DrawyerHeader = ({id , toggleComments , toggleShare}) => {
    return (
        <>
            <div className="commetns-header" onClick={toggleComments || toggleShare}>
                {
                    id === "share" ? "" : <span>comment</span>
                }
                
            </div>
        </>
    )
}

export default DrawyerHeader;