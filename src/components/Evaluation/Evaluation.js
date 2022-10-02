import { useState } from 'react';
import './Evaluation.css';
import { AiFillStar } from 'react-icons/ai';
// import { AiOutlineStar } from 'react-icons/ai';

function Evaluation({ evaluationChange, rating }) {
    return (
        <>
            <div className="wrapper">
                <div>
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label key={i}>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={ratingValue}
                                    className="evaluation"
                                />
                                <AiFillStar
                                    className={`fa-star ${
                                        ratingValue <= rating ? 'main' : 'gray'
                                    }`}
                                />
                            </label>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Evaluation;
