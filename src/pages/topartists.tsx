import Head from "next/head";
import { useState } from "react";
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


            <div>
            <div>
                <h1>Faça login no Spotify</h1>
                <a href={'/authentication'}>LOGIN COM O SPOTIFY</a>
            </div>
            
            </div>


        </div>

        </TopArtistContainer>
    );
}


export default TopArtistPage;
