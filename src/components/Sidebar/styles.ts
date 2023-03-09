import styled from 'styled-components';

export const Container = styled.div`

    .sidebar_container {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 6rem;
        top: 0;
        left: 0;
        height: 100%;
        padding: 1rem 0;
        background-color: ${({ theme }) => theme.colors.background};
        box-shadow: rgb(0 0 0 / 30%) 0px 0px 10px;
    }

    .spotify_icon {
        font-size: 4rem;
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
        transition: color .3s;
    }
    .spotify_icon:hover {
            color: ${({ theme }) => theme.colors.primaryLight};
            transition: color .3s;
    }

    .git_icon {
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.text};
        cursor: pointer;
        transition: color .3s;
    }
    .git_icon:hover {
            color: ${({ theme }) => theme.colors.textLight};
            transition: color .3s;
    }

    .navlink_container {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 0.8rem;
        padding: 0;
        margin: 0;
        align-items: center;
        cursor: pointer;
    }

    .navlink_item {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: .5rem;
        font-size: 1.3rem;
        gap: .3rem;
        border-left: 3px solid ${({ theme }) => theme.colors.background};
        > label {
            font-size: .75rem;
        }
    }

    .navlink_item:hover {
        background-color: ${({ theme }) => theme.colors.lightbackground};
        color: ${({ theme }) => theme.colors.textLight};
        border-left: 3px solid ${({ theme }) => theme.colors.primary};
    }

    

`;
