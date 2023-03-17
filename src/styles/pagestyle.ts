import styled from 'styled-components';

export const TopArtistContainer = styled.div`

    padding: 5rem;

`;

export const TopSongContainer = styled.div`

    padding: 5rem;

`;

export const RecentlyContainer = styled.div`

    padding: 5rem;

`;

export const PlaylistsContainer = styled.div`

    padding: 5rem;

`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    min-width: 100%;
    min-height: 100vh;
    padding: 5rem;
    gap: 2rem;

    > i {
        font-size: 7rem;
        color: ${({theme}) => theme.colors.primary};
    }

    .login_button {
        background-color: ${({theme}) => theme.colors.primary};
        padding: 1rem 1.5rem;
        border-radius: 1.6rem;
        color: ${({theme}) => theme.colors.textLight};
        cursor: pointer;
        transition: .3s;
    }

    .login_button:hover {
        background-color: ${({theme}) => theme.colors.primaryLight};
        transition: .3s;
    }
    
`;