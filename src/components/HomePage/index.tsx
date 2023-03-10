import { Container } from "./styles";
import { BsPerson } from "react-icons/bs";
import TopTrack from "./topTrack";
import TopArtist from "./topArtist";

function HomePage(){
    return (
        <Container className="f_c">
            <section className="home_header">
                <BsPerson className="avatar_icon"/>

                <a href="https://open.spotify.com/user/vinicioss1592?si=285d35b2aace4929" 
                className="username_home t_03s">vinicioss1592</a>

                <div className="folowers_section">
                    <div className="followers_item">
                        <h1>0</h1>
                        <label>Seguidores</label>
                    </div>
                    <div className="followers_item">
                        <h1>20</h1>
                        <label>Seguindo</label>
                    </div>
                    <div className="followers_item">
                        <h1>61</h1>
                        <label>Playlists</label>
                    </div>
                </div>
                <button className="button1 t_03s">Logout</button>
            </section>
            <section className="user_preview">
                <TopArtist/>
                <TopTrack/>
            </section>
        </Container>
    );
}


export default HomePage;
