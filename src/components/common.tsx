import styled from 'styled-components';


export const getSortedPlayerList = (item: string|null, 
                                    players: object[], 
                                    recordPosition: string, 
                                    filterSmallGame: boolean, 
                                    sortCondition: {stat: string, asc: boolean}[]|null) => {
    
    if(filterSmallGame){
        const maxGames = Math.max.apply(Math, players.map((p: any) => {return p.Games}));
        players = players.filter((p: any) => p.Games >= maxGames*0.25);
    }

    if(recordPosition){
        players = players.filter((p: any) => p.Position === recordPosition);
    }
    
    if(item !== null && sortCondition === null){
        return players.sort((p1: any, p2: any) => {
            if(p1[item] === '-') p1[item] = 0;
            if(p2[item] === '-') p2[item] = 0;

            if(typeof(p1[item]) === 'string' ? Number(p1[item].replace(/[^0-9.]/g, '')) > Number(p2[item].replace(/[^0-9.]/g, '')) : p1[item] > p2[item])
                return -1;
            else if(typeof(p1[item]) === 'string' ? Number(p1[item].replace(/[^0-9.]/g, '')) < Number(p2[item].replace(/[^0-9.]/g, '')) : p1[item] < p2[item])    
                return 1;
            else return 0;
        });
    }
    else if(item === null && sortCondition !== null){
        for(let i=0; i<sortCondition.length; i++){
            players.sort((p1: any, p2: any) => {
                let sortArr = [];
                if(sortCondition[i].asc)    sortArr = [1, -1, 0];
                else                        sortArr = [-1, 1, 0];

                if(p1[sortCondition[i].stat] === '-') p1[sortCondition[i].stat] = 0;
                if(p2[sortCondition[i].stat] === '-') p2[sortCondition[i].stat] = 0;

                if(sortCondition[i].stat === 'Player' || sortCondition[i].stat === 'Position'){
                    if(p1[sortCondition[i].stat] > p2[sortCondition[i].stat])   return sortArr[0];
                    else if(p1[sortCondition[i].stat] < p2[sortCondition[i].stat])  return sortArr[1];
                    else    return sortArr[2];
                }
                else if(typeof(p1[sortCondition[i].stat]) === 'string' 
                    ? Number(p1[sortCondition[i].stat].replace(/[^0-9.]/g, '')) > Number(p2[sortCondition[i].stat].replace(/[^0-9.]/g, '')) 
                    : p1[sortCondition[i].stat] > p2[sortCondition[i].stat])
                    return sortArr[0];
                else if(typeof(p1[sortCondition[i].stat]) === 'string' 
                    ? Number(p1[sortCondition[i].stat].replace(/[^0-9.]/g, '')) < Number(p2[sortCondition[i].stat].replace(/[^0-9.]/g, '')) 
                    : p1[sortCondition[i].stat] < p2[sortCondition[i].stat])    
                    return sortArr[1];
                else return sortArr[2];
            });
        }
        return players;
    }
    else return [];
}


export const getSortCondition = (stat: string, sortCondition: {stat: string, asc: boolean}[]): string => {
    let sortMark: string = '';
    if(sortCondition.find((o: {stat: string, asc: boolean}) => stat === o.stat && o.asc))  sortMark = '↑';
    else if(sortCondition.find((o: {stat: string, asc: boolean}) => stat === o.stat && !o.asc))    sortMark = '↓';
    return sortMark;
}

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