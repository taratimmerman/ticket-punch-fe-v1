import styled from 'styled-components';

// PAGE NEUTRAL/DYNAMIC STYLED COMPONENTS:

export const PageContainer = styled.section`
    padding: 30px 30px 0 100px;
    color: #677682;
        @media screen and (max-width: 500px) {
            padding: 30px;
        }
`;

export const Greeting = styled.h1`
    font-size: 2.5rem;
    color: dimgray;

    @media screen and (max-width: 500px) {
            font-size: 2rem;
        }
`;

export const PageTitleWrapper = styled.div`
    height: 50px;
    width: 100%;
    margin: 20px 0;
    border-bottom: 2px #677682 solid;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const PageTitle = styled.h2`

`;

export const NewProjectWrapper = styled.div`
    width: 90px;
    color: #551a8b;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledH5 = styled.h5`

`;

export const StatusCardWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    
    @media screen and (max-width: 500px) {
        flex-flow: column wrap;
        align-items: center;
    }
`;

export const StatusCardContent = styled.div`
    padding: 15px;
`;

export const Stuck = styled.div`
    background-color: #e9a2ad;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 15px;
`;

export const WorkingOnIt = styled.div`
    background-color: #fbe192;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 15px;
`;

export const Done = styled.div`
    background-color: #8dd7cf;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin-bottom: 15px;
`;

export const StatusTitle = styled.h3`
    color: #fff;
    padding-left: 15px;
    padding-bottom: 15px;

`;

export const CardTile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 5px;
    width: 275px;
`;

export const CardTitle = styled.h4`
    padding: 20px;
`;

export const CardActionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 45px;
    margin: 15px;
`;