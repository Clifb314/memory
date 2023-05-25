import React, { useState } from "react";

export default function ScoreBoard({ score, best }) {
    return (
        <div className="scoreBoard">
            <p>Current Score: {score}</p>
            <p>Your Best: {best}</p>
        </div>
    )
}