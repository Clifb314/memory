import React, { useState } from "react";
import CardDB from "./cardDB";
import scoreBoard from "./score";

const DisplayCards = () => {
    //array of what player picked already
    const [player, setPlayer] = useState([])
    const [score, setScore] = useState(0)
    const [best, setBest] = useState(0)
    const [rands, setRands] = useState([])

    //I think useEffect could help here. Tie it to change in score?
    const genRands = () => {
        let list = []

        while (list.length < 6) {
            let number = Math.floor(Math.random() * 20)
            if (!list.includes(number)) {
                list.push(number)
            }
        }

        //setRands([...list])

        let picks = list.map(pic => {
            return (
                <CardDB index={pic} onClick={handleClick} />
            )
        })

        return {picks}
    }

    const handleClick = (e) => {
        let id = e.target.id
        if (!player.includes(id)) {
            setPlayer([...player, id])
            setScore(score + 1)
        } else {
            //trigger loss
            handleLoss()
        }
        //regen cards
    }

    const handleLoss = () => {
        if (score > best) {
            setBest(score)
        }
        setScore(0)
    }


    return (
        <div class="game">
            <scoreBoard score={score} best={best} />
            <div className="card">
            </div>
        </div>
    )
}

export default DisplayCards