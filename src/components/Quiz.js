import React, { useEffect } from 'react'
import Questions from './Questions'

// redux store imports 
import { useSelector } from 'react-redux'

export default function Quiz() {

  const state = useSelector(state => state)


  useEffect(() => {
    console.log(state)
  });
  // next button event handler 
  const onNext = () => {
    alert('on next')

  }
  // previous button event handler 
  const onPrev = () => {
    alert('on prev')
  }
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions  */}

      <Questions />

      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}
