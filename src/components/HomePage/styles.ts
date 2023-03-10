import styled from 'styled-components';

export const Container = styled.div`
    padding: 5rem;
    display: flex;
    justify-content: center;

    .home_header {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        color: #fff;
        gap: 1.5rem;
    }

    .avatar_icon {
        font-size: 8rem;
        padding: 1rem;
        border: 2px solid;
        border-radius: 50%;
    }

    .username_home {
        font-size: 2.5rem;
        font-weight: 700;
    }
    .username_home:hover {
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
    }

    .folowers_section {
        display: flex;
        gap: 1rem;
    }

    .followers_item {
        width: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .3rem;

        > h1 {
            font-size: 1rem;
            color: ${props => props.theme.colors.primary};
        }

        > label {
            font-size: 0.7rem;
            text-transform: uppercase;
            color: ${props => props.theme.colors.text};
        }
    }

    .user_preview {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 6rem;
        gap: 4rem;
    }

    .top_artist_item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 4rem;
        width: 100%;
        color: ${props => props.theme.colors.textLight};
        gap: 1rem;
        padding: .5rem;
        cursor: pointer;
        border-radius: .4rem;

        > img {
            border-radius: 100%;
            width: max-content;
            height: 100%;
        }
    }

    .top_track_item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 4rem;
        width: 100%;
        color: ${props => props.theme.colors.textLight};
        gap: 1rem;
        padding: .5rem;
        cursor: pointer;
        border-radius: .4rem;

        > img {
            width: max-content;
            height: 100%;
        }
    }

    .top_track_itemName {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    .top_track_labels {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    
    .top_preview_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: ${props => props.theme.colors.textLight};
        font-size: 1.2rem;
        font-weight: 600;
    }


    @media screen and (max-width: 770px) {

        padding: 2rem 1rem;
        overflow: hidden;

        .user_preview {
            margin-top: 4rem;
            gap: 1rem;
        }

        .top_artist_item {
            height: 3rem;
            width: 100%;
            > label {
                font-size: .2rem;
            }

        }

        .top_track_item {
            height: 3rem;
            width: 100%;
            font-size: 0.8em;
        }

        .top_preview_header {
        color: ${props => props.theme.colors.textLight};
        font-size: 1rem;
        font-weight: 600;
    }

    }
`;
