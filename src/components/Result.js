import React from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'

const Result = () => {
  const onRestart = () => {
    
  }
  
  return (
    <div className='container'>
      <h2 className='text-light'>results</h2>

      <div className='result flex-container'>
        <div className='flex'>
          <span>Username</span>
          <span className='bold'>Daaily Tution</span>
        </div>
        <div className='flex'>
          <span>Total Quiz POints :</span>
          <span className='bold'>50</span>
        </div>
        <div className='flex'>
          <span>Total Questions : </span>
          <span className='bold'>05</span>
        </div>
        <div className='flex'>
          <span>Total Attempts : </span>
          <span className='bold'>03</span>
        </div>
        <div className='flex'>
          <span>Quiz Result</span>
          <span className='bold'>Passed</span>
        </div>
      </div>

      <div className='start'>
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      <div className='container'>
        {/* result table  */}
        <ResultTable />

      </div>
    </div>
  )
}

export default Result
