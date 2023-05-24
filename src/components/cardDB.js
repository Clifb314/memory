import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const CardDB = ({ index, onClick }) => {
    const [momoList, SetMomoList] = useState([])
    const { momo, id } = momoList[index]

    function importAll(r) {
        return r.keys().map(r);
      }
      
    const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));
    //this for loop is prob not needed
    for (let x = 0; x < images.length(); x++) {
        if (x > 0) {
            //can use ...momoList instead of prevState
            SetMomoList(prevState => ([
                ...prevState,
                {momo: images[x], id: uuid()}
            ]))
        } else {
            SetMomoList([{momo: images[0], id: uuid()}])
        }
    }
    
    return (
        <img src={momo} key={id} className="momoCard" onClick={onClick} />
    )

}


export default CardDB