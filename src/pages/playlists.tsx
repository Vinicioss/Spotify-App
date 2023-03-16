import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { PlaylistsContainer } from '../styles/pagestyle';


function TopArtistPage(){
    return (
        <PlaylistsContainer>
            <Head>
                <title>Playlists | App</title>
                <meta
                name="description"
                content="Vejas os seus artistas mais ouvidos"
                />
            </Head>

            <Sidebar/>

            <div className="pl"> 

                <h1>Suas Playsists</h1>

            </div>

        </PlaylistsContainer>
    );
}


export default TopArtistPage;
