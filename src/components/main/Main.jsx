import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import Ai from '../../assets/Ai.jpg'
import { Context } from '../../context/Context'
import { motion } from 'framer-motion';
 
function Main() { 
  const {showresult, prevPromt,setprevPromt,displayresult , onSent , setrecentPromt ,recentPromt , setshowresult , loding ,resultData , input , setinput } = useContext(Context)
  return (
    <div className='mainbar  h-screen bg-[#131314] items-center flex flex-col relative flex-1'>
      
      <div className='w-full h-[60px] flex justify-between px-7 py-5 '>
        <div> <h1 className='text-[3vh] text-[#ffffff]'>Bisxx</h1></div>
        <div><img className='w-[40px] rounded-full '  src={assets.usser} alt="" /></div>
      </div>

      <div className='main w-full flex flex-col items-center justify-between '>


     

        {!showresult ?(<>  <div className='greet    flex  flex-col lg:ml-0 my-[50px]  pl-5 text-[56px] text-[#444746] lg:pl-[20px] font-bold  '> 
        <p>   <span
      className='bg-gradient-to-br from-blue-500 to-red-500 bg-clip-text text-transparent'
    > 
      Hello !!!
    </span> </p>
        <p>How Can I Help You Today ?</p>
        </div>

        <div className="cards justify-center  flex-wrap   flex gap-6    " >

         
          <div className="cars  w-[180px] lg:w-[15vw]    p-5 flex flex-col justify-between text-[#ffffff] hover:bg-[#333537] bg-[#1E1F20] rounded-xl h-[170px] lg:h-[30vh]">
                <p onClick={(e)=>setinput(e.target.innerHTML)} value={input}  >Suggest beautiful places to see on an upcoming road trip </p>


                <img className='w-[34px] rounded-full filter invert bg-[#e9e9e9] p-1' src={assets.compass_icon} alt="" />
          </div>
          <div className="cars  w-[180px] whitespace-normal lg:w-[15vw] p-5 flex flex-col justify-between text-[#ffffff] hover:bg-[#333537] bg-[#1E1F20] rounded-xl h-[170px] lg:h-[30vh]">
                <p onClick={(e)=>setinput(e.target.innerHTML)} value={input}> 
Briefly summarize this concept: urban planning </p>
                <img className='w-[34px] rounded-full filter invert bg-[#e9e9e9] p-1' src={assets.bulb_icon} alt="" />
          </div>
          <div className="cars  w-[180px] whitespace-normal lg:w-[15vw] p-5 flex flex-col justify-between text-[#ffffff] hover:bg-[#333537] bg-[#1E1F20] rounded-xl h-[170px] lg:h-[30vh]">
                <p onClick={(e)=>setinput(e.target.innerHTML)} value={input}> 
Brainstorm team bonding activities for our work retreat

 </p>
                <img className='w-[34px] rounded-full filter invert bg-[#e9e9e9] p-1' src={assets.message_icon} alt="" />
          </div>
          <div className="cars  w-[180px] whitespace-normal lg:w-[15vw] p-5 flex flex-col justify-between text-[#ffffff] hover:bg-[#333537] bg-[#1E1F20] rounded-xl h-[170px] lg:h-[30vh]">
                <p onClick={(e)=>setinput(e.target.innerHTML)} value={input}>  
Tell me about React js and React native</p>
                <img className='w-[34px] rounded-full filter invert bg-[#e9e9e9] p-1' src={assets.code_icon} alt="" />
          </div>
        </div>
       </> ) : 
       
       <div className='result text-white w-full max-h-[70vh]  px-[6%] overflow-y-scroll'>
        <div className='res-tittle my-[40px] mx-[0] flex  items-center gap-5'>
        <img src={assets.usser} className='w-[35px] rounded-full '  alt="" />
        <p className='font-light '>{recentPromt}</p>

        </div>
        <div className='result-data flex items-start  gap-5'>
              <img className='w-[40px] rounded-full '  src={Ai} alt="" />
              {loding ? <div className='w-full loader flex flex-col gap-3 '>
                
                <motion.hr animate={{
          backgroundPosition: ['-800px 0px', '800px 0px'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',  
          ease: 'linear',
        }} className=' hr-tag border-none rounded-l bg-[#1E1F20] bg-gradient-to-r from-blue-300 via-[#101111] to-blue-300 h-[20px]' />
                <motion.hr animate={{
          backgroundPosition: ['-700px 0px', '700px 0px'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          // delay:.2,
          repeatType: 'loop',  
          ease: 'linear', 
        }} className=' hr-tag border-none rounded-l w-[90%] overflow-hidden bg-[#101111] bg-gradient-to-r from-blue-300 via-[#101111] to-blue-300 h-[20px]'  />
                <motion.hr animate={{
          backgroundPosition: ['-600px 0px', '600px 0px'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          // delay:.3,
          repeatType: 'loop',  
          ease: 'linear',
        }} className=' hr-tag border-none rounded-l w-[60%] bg-[#101111] bg-gradient-to-r from-blue-300 via-[#101111] to-blue-300 h-[20px]'  />
              </div>:
              
        <p className=' font-light  leading-8 text-[16px]' dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
        </div>
        </div>}
       

      <div className="fotter absolute bottom-0 mb-8 w-full lg:w-[60vw]">
        <div className='serch items-center flex rounded-full px-4 lg:px-5 py-3 bg-[#1E1F20] item-center mx-7 justify-between'>
          <input type="text"   onKeyDown={(e) => { 
                        if (e.key === "Enter") { 
                           onSent();
                        } 
                    }}  onChange={(e)=>setinput(e.target.value)} value={input} className=' text-white flex-1 bg-transparent border-none outline-none  ' placeholder='Enter a prompt...' />
          <div className=''>
            <img onClick={()=>onSent()} className=' cursor-pointer w-[34px]  filter invert     p-1' src={assets.send_icon} alt="" />
          </div>
        </div>
      <p className='text-[#4b4949] text-center hidden lg:block mt-2 text-[15px]'>AI may display inaccurate info, including about people, so double-check its responses.</p>
      </div>
    </div>
    </div>
  )
}

export default Main