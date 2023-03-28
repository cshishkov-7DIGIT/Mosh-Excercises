import {SimpleGrid, Text} from '@chakra-ui/react';
import {Platform} from '../hooks/useGames';
import {Genre} from '../hooks/useGenres';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import {useQuery} from 'react-query';
import GameService from '../services/gameFetchApi';

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
    // const allGames = useQuery<GameQuery[]>({
    //   "allGames",
    //   async () => {
    //         return GameService.allGames();
    //   }
    // })

    const allGames = useQuery<GameQuery[], Error>('allGames', async () => {
        const data = await GameService.allGames();
        console.log(data.results);
        return data?.results;
    });

    // const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    // if (error) return <Text>{error}</Text>;

    if (allGames.isError) {
        return <Text>An error</Text>;
    }

    //allGames.data;

    return (
        <SimpleGrid
            columns={{sm: 1, md: 2, lg: 3, xl: 4}}
            padding="10px"
            spacing={6}
        >
            {allGames.isLoading &&
                skeletons.map((skeleton) => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                ))}
            {allGames.isFetched &&
                allGames.data?.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                ))}
        </SimpleGrid>
    );
};

export default GameGrid;
