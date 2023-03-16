import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { TopSongContainer } from '../styles/pagestyle';


function TopArtistPage(){
    return (
        <TopSongContainer>
            <Head>
                <title>Top Songs | App</title>
                <meta
                name="description"
                content="Vejas os seus artistas mais ouvidos"
                />
            </Head>

            <Sidebar/>

            <div className="pl"> 

                <h1>Top Musicas</h1>

            </div>

        </TopSongContainer>
    );
}


export default TopArtistPage;
