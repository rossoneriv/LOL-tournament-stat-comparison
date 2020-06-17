import styled from 'styled-components';

// styled-components
export const MainContainer = styled.div`
    background-image: url('background.jpg');
    min-height: 85vh;
    background-color: #eae8e3;
    padding: 70px 10rem 1rem 10rem;
    overflow-y: auto;

    @media screen and (max-width: 1150px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    @media screen and (max-width: 842px) {
        padding-top: 94px;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    @media screen and (max-width: 500px) {
        padding-top: 124px;
        padding: 124px 0rem 1rem 0rem;
        flex-direction: column;
    }
`;

export const MainWrapper = styled.main`
    overflow-y: auto;
    padding: 1rem 1rem;
    background: white;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin: 0 auto;
    min-height: 500px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 825px) {
        padding: .15rem .15rem;
    }

    @media screen and (max-width: 500px) {
        padding: 0;
    }
`;

export const Footer = styled.div`
    min-height: 15vh;
    background: #343a40;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;