import styled from 'styled-components';

export const Container = styled.div`
    padding: 3rem 6rem;
    display: flex;
    justify-content: center;

    .home_main {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        color: #fff;
        gap: 1rem;
    }

    .avatar_icon {
        font-size: 8rem;
        padding: 1rem;
        border: 2px solid;
        border-radius: 50%;
    }

    .username_home {
        font-size: 2rem;
        font-weight: 700;
    }
    .username_home:hover {
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
    }
`;
