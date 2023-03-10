
function TrackTopItem({icon, songName, artistName, time}){
    return (
        <div className="top_track_item">
            <img src={icon}/>
            <div className="top_track_labels">
                <div className="top_track_itemName">
                    <label>{songName}</label>
                    <label>{artistName}</label>
                </div>
                <span>{time}</span>
            </div>
        </div>
    );
}


export default TrackTopItem;
