import {useState} from 'react';
import produce from 'immer';
import './App.css';
import ExpandableText from './components/ExpandableText';

function App() {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: 'John',
        },
    });

    const handleClick = () => {
        setGame(
            produce(game, (draft) => {
                draft.player.name = 'Jane';
            }),
        );
    };

    return (
        <div className="App">
            <h1>Game ID: {game.id}</h1>
            <h2>Player Name: {game.player.name}</h2>
            <button onClick={handleClick}>Change Player Name</button>

            <ExpandableText
                text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        quis quisquam similique nostrum animi, earum doloremque nam dolor
        repellat ipsam omnis corrupti deserunt. Dolores vel vitae, fuga
        aspernatur ullam voluptas sapiente autem in consequatur nam porro harum
        fugit ipsam architecto facilis quod, quibusdam distinctio aliquid, iure
        facere! Sint consequatur tempora nisi, possimus dignissimos esse ab
        consectetur id aperiam nobis, veritatis adipisci magnam, recusandae ut.
        Explicabo rem quasi enim quaerat quisquam iste earum doloremque, error
        doloribus deleniti, odio officiis voluptas eum distinctio delectus porro
        tempore qui mollitia quam dolores quas nihil sit reiciendis impedit?
        Odit non quaerat culpa quo minus molestias."
            />
        </div>
    );
}

export default App;
