import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { FaHistory } from "react-icons/fa";
import { Context } from '../../context/Context';
function Sidebar() {
    const [hide ,sethide]  =useState(false );
    const {onSent,prevPromt, newChat, setrecentPromt} = useContext(Context);    


    const loadPromt = async (promt)=>{
        setrecentPromt(promt)
        await onSent(promt);
    }
  return (
    <div className={`${hide?'w-[200px]':'w-[70px]'}sidebar bg-[#1E1F20] text-white  gap-3  lg:block pb-5  absolute top-0 left-0 lg:relative  h-screen lg:flex justify-between flex-col`} >
        
        <div className='flex flex-col gap-6 px-4 py-5' > <img onClick={()=>sethide(!hide)} className=' filter invert w-[25px]' src={assets.menu_icon}   /> 


        <div onClick={()=> newChat()} className='new-chat rounded-full items-center gap-5 bg-[#303131] py-2 px-5 flex '>
            <img className=' filter invert w-[20px]' src={assets.plus_icon} alt="" />
           {hide?<p >new chat</p> :null} 
        </div>

        {hide? <div className='flex flex-col gap-3 scrollbar max-h-[25vw]   overflow-y-scroll   scroll-w-1'>
            <p>Recent</p>

            {prevPromt.map((item ,index)=>{return (

                <div  onClick={()=> loadPromt(item)} className='flex items-center  hover:bg-[#303131] py-2 px-2 rounded-full'> 
                <img className=' filter invert  w-[25px]' src={assets.message_icon} alt="" />
                <p className='text-sm'>{item.slice(0,14)}...</p>
                </div>
            )})}
            
        </div> :null} 
 
       
        </div>



        <div className='flex text-black  flex-col px-3'> 
                <div  className=' filter invert flex items-center gap-4 hover:bg-[#d3d3d3] py-2 px-2 rounded-full '>
                    <img className='w-[25px]' src={assets.question_icon} alt="" />
                    {hide?<p >Help </p> :null} 
                  
                </div>
                <div className=' filter invert flex items-center gap-4 hover:bg-[#d3d3d3] py-2 px-2 rounded-full '>
                {/* <FaHistory className='text-white  ' /> */}
                    <img className='w-[25px]' src={assets.history_icon} alt="" />
                    {hide?<p >Activity </p> :null} 
                    
                </div>
                <div className=' filter invert flex items-center gap-4 hover:bg-[#d3d3d3] py-2 px-2 rounded-full '>
                    <img className='w-[25px]' src={assets.setting_icon} alt="" />
                    {hide?<p > Settings</p> :null} 
                 
                </div>
        </div>
    </div>
  )
}

export default Sidebar