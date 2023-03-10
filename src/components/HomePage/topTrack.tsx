import TrackTopItem from "./TrackTopItem";

function TopTrack(){
    return (
        <div>
            <div className="top_preview_header">
                <label>Top musicas de todos os tempos</label>
                <button className="button1">
                    Ver mais
                </button>
            </div>
            <TrackTopItem icon={'https://i.scdn.co/image/ab6761610000e5eb7e337e3ae445012b47152b48'} 
            songName="Amianto" 
            artistName="Supercombo" 
            time="2:32"/>
            <TrackTopItem icon={'https://i.scdn.co/image/ab6761610000e5eb7e337e3ae445012b47152b48'} 
            songName="Amianto" 
            artistName="Supercombo" 
            time="2:32"/>
        </div>
    );
}


export default TopTrack;
