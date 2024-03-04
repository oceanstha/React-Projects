import React from 'react'
import { useLocation } from 'react-router-dom';

const AnimeDetail = () => {
    const location=useLocation();
    const result=location.state
    console.log('result', result)
  return (
    <div>animeDetail</div>
  )
}

export default AnimeDetail