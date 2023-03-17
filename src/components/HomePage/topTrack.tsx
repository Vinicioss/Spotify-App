import TrackTopItem from "./TrackTopItem";

function TopTrack(){
    return (
        <section className="top_container">
            <div className="top_preview_header">
                <span>Top musicas de todos os tempos</span>
                <button type="button" className="button1">
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
        </section>
    );
}


export default TopTrack;
