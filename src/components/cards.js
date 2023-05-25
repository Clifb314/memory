import React, { useState } from "react";
import CardDB from "./cardDB";
import ScoreBoard from "./score";
import { v4 as uuid } from "uuid";

const DisplayCards = () => {
    //array of what player picked already
    const [player, setPlayer] = useState([])
    const [score, setScore] = useState(0)
    const [best, setBest] = useState(0)
    const [rands, setRands] = useState([1, 2, 3, 4, 5, 6])



    const handleClick = (e) => {
        let id = e.target.id
        console.log(id)
        console.log(player)
        if (!player.includes(id)) {
            setPlayer([...player, id])
            setScore(score + 1)
        } else {
            //trigger loss
            handleLoss()
        }
        //regen cards
        genRands()
    }

    const handleLoss = () => {
        if (score > best) {
            setBest(score)
        }
        setPlayer([])
        setScore(0)
        genRands()
    }


    //I think useEffect could help here. Tie it to change in score?
    const genRands = () => {
        let list = []

        while (list.length < 6) {
            let number = Math.floor(Math.random() * 18)
            if (!list.includes(number)) {
                list.push(number)
            }
        }

        setRands([...list])
    }

    const randCards = () => {
        let picks = rands.map(pic => {
            return (
                <CardDB index={pic} onClick={handleClick} key={uuid()} />
            )
        })

        return picks
    }

    const cards = randCards()


    return (
        <div className="game">
            <ScoreBoard score={score} best={best} />
            <div className="card">
                {cards}
            </div>
        </div>
    )
}

export default DisplayCards