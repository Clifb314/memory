import React, { useState } from "react";
import CardDB from "./cardDB";


const DisplayCards = () => {
    //array of what player picked already
    const [player, setPlayer] = useState([])
    const [score, setScore] = useState(0)
    const [best, setBest] = useState(0)
    const [rands, setRands] = useState([])


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
                <CardDB index={pic} />
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
        }

    }


    return (
        <div className="card">

        </div>
    )
}

export default DisplayCards