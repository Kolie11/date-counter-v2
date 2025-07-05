import React from 'react'

function Form() {
  return (
    <div>
        <form className='w-full max-w-sm bg-amber-300 p-4 rounded-lg shadow-md h-[500px] mx-auto mt-10 text-center'>
          <span className='bg-amber-200 p-2 shadow-md rounded-xl'>  <input className=' ' type="range"/> <span>5</span></span>
            <div className="btn flex gap-2 items-center justify-center mt-4">
                <button className='bg-amber-600 p-2 rounded-md w-10 h-10 text-3xl text-center leading-1 shadow-md font-bold text-amber-50 cursor-pointer'>-</button>
                <input className='outline-0 bg-amber-100 p-2 focus:border-amber-800 focus:border-1 rounded-2xl text-xl' type="text" placeholder='0'/>
                <button className='bg-amber-900 p-2 rounded-md w-10 h-10 text-3xl text-center leading-1 shadow-md font-bold text-amber-50 cursor-pointer'>+</button>
            </div>
        <p className='flex items-center flex-col justify-center gap-2 mt-4 text-amber-900 font-bold'>
            <span>15 days from today is Tue Jul 06 2027</span>
        <button className='bg-red-600 p-2 rounded-sm shadow-lg'>Reset</button>
        </p>
        </form>
    </div>
  )
}

export default Form