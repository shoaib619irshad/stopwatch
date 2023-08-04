import React, { useEffect, useState } from 'react';

const App = () => {
    const [hrs, setHrs] = useState(0);
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);
    const [stop ,setStop]=useState(false);
    const [id,setId]=useState(false);
    

    useEffect(() => {
       if (stop){
        setId(setInterval(() => {
            setSecs((secs) => secs + 1)
        }, 1000))
    }
        else
            clearInterval(id)
    }, [stop])
    useEffect(() => {
        if (secs >= 60) {
            setMins(mins + 1)
            setSecs(0)
        }
    }, [secs])
    useEffect(() => {
        if (mins == 59 && secs == 60) {
            setMins(0)
            setSecs(0)
            setHrs(hrs + 1)
        }
    }, [mins,secs])

    const handleStart=()=>{
        setStop(true)
    }
    const handleStop=()=>{
        setStop(false)
    }
    const handleReset=()=>{
        setHrs(0)
        setMins(0)
        setSecs(0)
    }

    return (
        <section className='flex justify-center items-center h-[100vh] overflow-hidden flex-col gap-6'>
            <article className='flex gap-4'>
                <h2 className='text-5xl font-semibold'>{hrs}</h2>
                <h2 className='text-5xl font-semibold'>:{mins}</h2>
                <h2 className='text-5xl font-semibold'>:{secs}</h2>
            </article>
            <article className='flex gap-2'>
                <button className='bg-emerald-400 px-4 text-3xl font-semibold py-2 rounded-lg hover:bg-emerald-500 hover:text-white' onClick={handleStart}>Start</button>
                <button className='bg-red-400 px-4 text-3xl font-semibold py-2 rounded-lg hover:bg-red-500 hover:text-white' onClick={handleStop}>Stop</button>
                <button className='bg-blue-400 px-4 text-3xl font-semibold py-2 rounded-lg hover:bg-blue-500 hover:text-white' onClick={handleReset}>Reset</button>
            </article>
        </section>
    )

}

export default App;