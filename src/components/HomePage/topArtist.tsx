import ArtistTopItem from "./ArtistTopItem";
import { Container } from "./styles";


function TopArtist(){
    return (
        <div>
            <div className="top_preview_header">
                <label>Top artistas de todos os tempos</label>
                <button className="button1">
                    Ver mais
                </button>
            </div>
            <ArtistTopItem icon={'https://i.scdn.co/image/ab6761610000e5eb7e337e3ae445012b47152b48'} name="Supercombo"/>
            <ArtistTopItem icon={'https://i.scdn.co/image/ab6761610000e5eb7e337e3ae445012b47152b48'} name="Supercombo"/>
            <ArtistTopItem icon={'https://i.scdn.co/image/ab6761610000e5eb7e337e3ae445012b47152b48'} name="Supercombo"/>
            <ArtistTopItem icon={'https://i.scdn.co/image/ab6761610000e5eb7e337e3ae445012b47152b48'} name="Supercombo"/>
            <ArtistTopItem icon={'https://i.scdn.co/image/ab6761610000e5eb7e337e3ae445012b47152b48'} name="Supercombo"/>
            <ArtistTopItem icon={'https://i.scdn.co/image/ab6761610000e5eb7e337e3ae445012b47152b48'} name="Supercombo"/>
            <ArtistTopItem icon={'https://i.scdn.co/image/ab6761610000e5eb7e337e3ae445012b47152b48'} name="Supercombo"/>
            <ArtistTopItem icon={'https://i.scdn.co/image/ab6761610000e5eb7e337e3ae445012b47152b48'} name="Supercombo"/>
            <ArtistTopItem icon={'https://i.scdn.co/image/ab6761610000e5eb7e337e3ae445012b47152b48'} name="Supercombo"/>
        </div>
    );
}


export default TopArtist;
