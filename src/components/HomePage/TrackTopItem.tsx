
function TrackTopItem({icon, songName, artistName, time}){
    return (
        <div className="top_track_item">
            <img src={icon}/>
            <div className="top_track_itemName">
                <label>{songName}</label>
                <label>{artistName}</label>
            </div>
            {time}
        </div>
    );
}


export default TrackTopItem;
