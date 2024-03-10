import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
function Boxex({parabox}) {
    const {showresult, prevPromt,setprevPromt,displayresult , onSent , setrecentPromt ,recentPromt , setshowresult , loding ,resultData , input , setinput } = useContext(Context)
  return (
    <div className="cars  w-[180px] lg:w-[15vw]    p-5 flex flex-col justify-between text-[#ffffff] hover:bg-[#333537] bg-[#1E1F20] rounded-xl h-[170px] lg:h-[30vh]">
                <p onClick={(e)=>setinput(e.target.innerHTML)} value={input}  >{parabox}</p>


                <img className='w-[34px] rounded-full filter invert bg-[#e9e9e9] p-1' src={assets.compass_icon} alt="" />
          </div>
  )
}

export default Boxex