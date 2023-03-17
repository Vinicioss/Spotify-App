function ArtistTopItem({ icon, name }){
    return (
        <div className="top_artist_item">
            <img src={ icon }/>
            { name }
        </div>
    );
}


export default ArtistTopItem;
