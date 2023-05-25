import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const CardDB = ({ index, onClick }) => {

    function importAll(r) {
        return r.keys().map(r);
      }
      
    const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));
    let output = []
    //this for loop is prob not needed
    for (let x = 0; x < images.length; x++) {
        if (x > 0) {
            output.push({momo: images[x], id: x})
        } 

    }

    
    return (
        <img src={output[index].momo} id={output[index].id} key={uuid()} className="momoCard" onClick={onClick} />
    )

}


export default CardDB