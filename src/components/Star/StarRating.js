import { useState } from 'react';
import './StarRating.css';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

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
                  onClick={() => setRating(ratingValue)}
                />
                <AiFillStar
                  className={`fa-star ${
                    ratingValue <= (hover || rating) ? 'yellow' : 'gray'
                  }`}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                />
              </label>
            );
          })}
        </div>
        {/* <div className="text">Rating: {rating}</div> */}
      </div>
    </>
  );
}

export default StarRating;
