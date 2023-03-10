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
        flex-direction: column;
        width: 100%;
    }

    .navlink_item {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: .8rem 0;
        font-size: 1.4rem;
        gap: .3rem;
        border-left: 5px solid transparent;
        cursor: pointer;
        > label {
            font-size: .75rem;
            cursor: pointer;
        }
    }

    .navlink_item:hover {
        background-color: ${({ theme }) => theme.colors.lightbackground};
        color: ${({ theme }) => theme.colors.textLight};
        border-left: 5px solid ${({ theme }) => theme.colors.primary};
    }

    @media (max-width: 770px) {
        .sidebar_container {
            top: auto;
            bottom: 0;
            width: 100%;
            min-height: 4.5rem;
            height: 4.5rem;
            flex-direction: row;
            padding: 0;
        }

        .spotify_icon,
        .git_icon {
            display: none;
        }

        .navlink_container {
            height: 100%;
            width: 100%;
            flex-direction: row;
            justify-content: center;
            align-items: flex-end;
        }
        .navlink_item {
            align-items: center;
            justify-content: center;
            flex-grow: 1;
            flex-basis: 100%;
            height: 100%;  
            padding: 0px; 
            border-left: 0px;
            border-top: 5px solid transparent;
        }
        .navlink_item:hover {
            background-color: ${({ theme }) => theme.colors.lightbackground};
            color: ${({ theme }) => theme.colors.textLight};
            border-left: 0px;
            border-top: 5px solid ${({ theme }) => theme.colors.primary};
        }   

        @media (max-width: 400px) {

            .navlink_item {
                > label {
                    font-size: .6rem;
                }
            }

        }
    }

    

`;
