import axios from 'axios';
import {Platform} from '../hooks/useGames';
import {Genre} from '../hooks/useGenres';

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c7b18323a47d40c394ea5b019646b1f5',
    },
});

const allGames = async () => {
    const response = await apiClient.get<GameQuery[]>('/games');
    return response.data;
};


const expoertedFunctions = {
    allGames,
};

export default expoertedFunctions;
