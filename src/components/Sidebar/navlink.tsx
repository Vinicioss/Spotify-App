import { Container } from "./styles";


function Navlink({icon, title}){
    return (
        <Container>
            <section>
                <div className="navlink_item t_03s">
                    {icon}
                    <label>{title}</label>
                </div>
            </section>
        </Container>
    );
}


export default Navlink;
