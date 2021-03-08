// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {

  return(
    <div className={'review-list'} style={{display: 'block', textAlign: 'center'}}>
      <ul>
        {reviews.map(makeReview)}
      </ul>
    </div>
  )
}

const makeReview = ({display_title, headline, byline, link}) => {
  return (
  <li className="review" key={display_title + ` ` + byline}>
    <a href={link.url}>{headline}</a>
  </li>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};


export default MovieReviews