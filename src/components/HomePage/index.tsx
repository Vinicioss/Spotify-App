import { Container } from "./styles";
import { BsPerson } from "react-icons/bs";

function HomePage(){
    return (
        <Container>
            <section className="home_main">
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
        </Container>
    );
}


export default HomePage;
