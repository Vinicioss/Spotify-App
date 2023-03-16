import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { RecentlyContainer } from '../styles/pagestyle';


function TopArtistPage(){
    return (
        <RecentlyContainer>
            <Head>
                <title>Recentes | App</title>
                <meta
                name="description"
                content="Vejas os seus artistas mais ouvidos"
                />
            </Head>

            <Sidebar/>

            <div className="pl"> 

                <h1>Recem tocadas</h1>

            </div>

        </RecentlyContainer>
    );
}


export default TopArtistPage;
