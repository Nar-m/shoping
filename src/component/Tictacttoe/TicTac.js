import { useState, useEffect } from "react"
import './tictact.css';
import Strike from "./Strike";
import Gameover from "./Gameover";

const playerX = "X";
const playerO = "0";

const gamestate = {
    gameX: "X",
    gameO: "0"
}

const conbinations = [
    { combo: [0, 1, 2], strikeclass: 'strike-row-1' },
    { combo: [3, 4, 5], strikeclass: 'strike-row-2' },
    { combo: [6, 7, 8], strikeclass: 'strike-row-3' },

    { combo: [0, 3, 6], strikeclass: 'strike-column-1' },
    { combo: [1, 4, 7], strikeclass: 'strike-column-2' },
    { combo: [2, 5, 8], strikeclass: 'strike-column-3' },

    { combo: [0, 4, 8], strikeclass: 'strike-skew-1' },
    { combo: [2, 4, 6], strikeclass: 'strike-skew-2' }
]

function Checkiner(tictact, setstrikeclass, setgameover) {
    for (const { combo, strikeclass } of conbinations) {
        const tilevalue1 = tictact[combo[0]]
        const tilevalue2 = tictact[combo[1]]
        const tilevalue3 = tictact[combo[2]]

        if (tilevalue1 !== null && tilevalue1 === tilevalue2 && tilevalue1 === tilevalue3) {
            setstrikeclass(strikeclass)
            if (tilevalue1 === playerX) {
                setgameover(gamestate.gameX)
            }
            else {
                setgameover(gamestate.gameO)
            }
        }
    }
}

export default function TicTact() {

    const [tictact, settictac] = useState(Array.from({ length: 9 }).fill(null));
    const [player, setplayer] = useState(playerX);
    const [strikeclass, setstrikeclass] = useState();
    const [gameover, setgameover] = useState();
    const [xnumber, setxnumber] = useState(0);
    const [onumber, setonumber] = useState(0)

    const Handleindex = (i) => {
        if (tictact[i] !== null) return;
        const newtiles = [...tictact];
        newtiles[i] = player;
        settictac(newtiles);
        if (player === playerX) {
            setxnumber((xnumber) => xnumber + 1)
            setplayer(playerO)
        }
        else {
            setonumber((onumber) => onumber + 1)
            setplayer(playerX)
        }
    }

    const Reset = () => {
        settictac(Array(9).fill(null))
        setxnumber(0)
        setonumber(0)
        setstrikeclass()
        setgameover()
    }

    useEffect(() => {
        Checkiner(tictact, setstrikeclass, setgameover)
    }, [tictact])

    return (
        <div className="flex justify-center items-center py-2 flex-col min-h-[30vw]">
            <div>
                <p>x: {xnumber}</p>
                <p>o: {onumber}</p>
            </div>
            <div className="tictact-conteiner">
                {tictact.map((el, i) => {
                    return <div className="block" onClick={() => Handleindex(i)} key={i}>{el}</div>
                })}
                <Strike strikeclass={strikeclass} />
            </div>
            <Gameover Reset={Reset} gameover={gameover} />
        </div>
    )
}