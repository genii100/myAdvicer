import './Main.css';
import React, { useState, useEffect } from 'react'
import AdviseCard from './component/AdviseCard';
import axios from 'axios'
import oval from './images/oval.svg'

const Main = () => {
    const [advise, setAdvise] = useState("")
    const [loading, setLoading] = useState(true)
    const [fetching, setFetching] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const result = await axios(
                "https://api.adviceslip.com/advice"
            )
            console.log(result.data.slip.advice)
            setAdvise(`${result.data.slip.advice}`)
            setLoading(false)
        }
        fetchData()
    }, [fetching])
    

  return (
    <div>
        {/* <AdviseCard
         text={advise}
        /> */}

        <div className='card'>
        <div className='cardInfo'>
        {loading ? (
            <img
            className='loader'
            src={oval}
            alt='loading'
            />
        ) : (
            <h6>{advise}</h6>
        )}
        </div>
    </div>

        <div>
            <button 
             className='button'
             onClick={() => setFetching(!fetching)}
             >Seek Advise</button>
        </div>
    </div>
  )
}

export default Main