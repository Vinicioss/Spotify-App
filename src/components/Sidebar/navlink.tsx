import { Container } from "./styles";


function Navlink({icon, title}){
    return (
        <Container className="wh_100">
                <li className="navlink_item t_03s">
                    {icon}
                    <label>{title}</label>
                </li>
        </Container>
    );
}


export default Navlink;
