import { Container } from "./styles";
import { BsPerson } from "react-icons/bs";

function HomePage(){
    return (
        <Container>
            <section className="home_main">
                <BsPerson className="avatar_icon"/>
                <a href="https://open.spotify.com/user/vinicioss1592?si=285d35b2aace4929" className="username_home t_03s">vinicioss1592</a>
            </section>
        </Container>
    );
}


export default HomePage;
