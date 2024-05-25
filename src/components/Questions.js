import React, { useEffect, useState } from 'react'
import data from '../database/data'

const Questions = () => {
  const [checked, setChecked] = useState(undefined);

  const questions = data[0]

  useEffect(() => {

  })


  const onSelect = () => {
    
    setChecked(true)
  }

  return (
    <div className='questions'>
      <h2 className='text-light'>{questions.question}</h2>

      <ul key={questions.id}>
        {
          questions.options.map((q, i) => (
            <li key={i}>
              <input
                type="radio"
                value={false}
                name='options'
                id={`q${i}-option`}
                onChange={onSelect}
              />
              <label htmlFor={`q${i}-option`} className='text-primary'>{q}</label>
              <div className='check checked'></div>
            </li>
          ))
        }

      </ul>
    </div>
  )
}

export default Questions
