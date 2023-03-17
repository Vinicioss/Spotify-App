import ArtistTopItem from "./ArtistTopItem";
import { useState, useEffect } from 'react';


function TopArtist(){

    return (
        <section className="top_container">
            <div className="top_preview_header">
                <span>Top artistas de todos os tempos</span>
                <button className="button1">
                    Ver mais
                </button>
            </div>
            
            <ul>

            </ul>
        </section>
    );
}


export default TopArtist;
