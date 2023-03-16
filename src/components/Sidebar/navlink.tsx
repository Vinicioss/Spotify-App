import { NavLinkContainer } from "./styles";

import Link from 'next/link';
import { useRouter } from 'next/router'
import { ReactNode } from "react";

interface Props {
    icon: ReactNode;
    title: string;
    path: string;
    includes?: boolean;
}

function Navlink({icon, title, path, includes = false} : Props){


    const router = useRouter();

    function verifyIfIsActive() {
        if(includes) {
            return router.pathname.includes(path);
        }
        return path === router.pathname;
    }
    
    const isActive = verifyIfIsActive();

    return (
        <Link href={path}>
            <NavLinkContainer isActive={isActive}>
                    <div className="navlink_item t_03s">
                            {icon}
                            <label>{title}</label>
                    </div>
            </NavLinkContainer>
        </Link>
    );
}


export default Navlink;
