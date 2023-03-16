import Navlink from "./navlink";
import { Container } from "./styles";
import { TbMicrophone2, TbMusic, TbPlaylist } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { MdOutlineHistory } from "react-icons/md";

function Sidebar(){
    return (
        <Container>
            <div className="sidebar_container">
                <div>
                    <a href="https://open.spotify.com/user/vinicioss1592?si=285d35b2aace4929" 
                    className="ri-spotify-fill spotify_icon"></a>
                </div>

                <ul className="navlink_container">
                    <Navlink icon={<BsPerson/>} title="Perfil" path="/"/>
                    <Navlink icon={<TbMicrophone2/>} title="Top Artistas" path="/topartists" includes/>
                    <Navlink icon={<TbMusic/>} title="Top Músicas" path="/topsongs" includes/>
                    <Navlink icon={<MdOutlineHistory/>} title="Recentes" path="/recently" includes/>
                    <Navlink icon={<TbPlaylist/>} title="Playlists" path="/playlists" includes/>
                </ul>
                
                <div>
                    <i className="ri-github-fill git_icon"></i>
                </div>
            </div>
        </Container>
    );
}


export default Sidebar;
