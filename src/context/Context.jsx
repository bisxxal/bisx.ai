import { createContext, useEffect, useState } from "react";
import runChat from '../config/gemini';

export const Context = createContext();

const ContextProvider = (props) => {

    const [input ,setinput] = useState('');
    const [recentPromt ,setrecentPromt] = useState('');
    const [prevPromt ,setprevPromt] = useState([]);
    const [showresult ,setshowresult] = useState(false);
     const [loding ,setloding] = useState(false);
    const [resultData ,setresultData] = useState('');


        const delayPara = (index , nextword)=>{
                  setTimeout(()=>{

                    setresultData(prev=>prev+nextword)
                  },75*index)
            }
 const newChat = ()=>{
  setloding(false);
  setshowresult(false)
 }
    const onSent = async (prompt) => {
      try{
      setresultData('')
      setloding(true)
      setshowresult(true); 
      let responce ;
      if(prompt !== undefined){
           responce =await runChat(prompt);
           setrecentPromt(prompt);
      }
      else{

        setprevPromt(prev=>[...prev,input]);
        setrecentPromt(input);
        responce =await runChat(input);
      }
     
      let responceArray  = responce.split('**');
      let newResponce ='';
      for(let i=0;i<responceArray.length;i++){
          if(i=== 0 || i%2 !== 1){
            newResponce += responceArray[i]
          }
          else{ 
            newResponce +=` </br> <span style="font-weight:700">${responceArray[i]}</span>`
          }
      }
      let newresponce2 = newResponce.split('*').join("</br>")
      // setresultData(newresponce2);\
      let newResponceArray = newresponce2.split(' ');

      for(let i=0;i<newResponceArray.length;i++){
          const newWord = newResponceArray[i];
          delayPara(i,newWord+" ");
      }
      setloding(false);
      setinput('')
      }
     catch (error) {
      console.error('Error while sending the prompt:', error);
    }
    
    };  

   
    // onSent(prompt); 

  const contextValue = {
showresult,
    prevPromt,setprevPromt , onSent , setrecentPromt ,recentPromt , setshowresult , loding ,resultData , input , setinput ,newChat
  };  

  return (
    <Context.Provider value={contextValue}>
      {props.children}  
    </Context.Provider>
  );
};

export default ContextProvider;
