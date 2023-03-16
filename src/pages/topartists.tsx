import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { TopArtistContainer } from '../styles/pagestyle';


function TopArtistPage(){
    return (
        <TopArtistContainer>
            <Head>
                <title>Top Artistas | App</title>
                <meta
                name="description"
                content="Vejas os seus artistas mais ouvidos"
                />
            </Head>

            <Sidebar/>

        <div className="pl"> 

            <h1>Top Artistas</h1>

        </div>

        </TopArtistContainer>
    );
}


export default TopArtistPage;
