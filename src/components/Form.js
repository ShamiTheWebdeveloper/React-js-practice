import React,{useState} from "react";

export default function Textform(prop){
    const [text,settext]= useState('Enter text here');
   let handleonclick=()=>{
       console.log('handleonclick');
   }

   let handleupclick=()=>{
       let newtext=text.toUpperCase();
       settext(newtext);
   }

    return(
        <div className='container'>
             <div className="my-3">
                 <h3>{prop.heading}</h3>
                <textarea className="form-control" value={text} onChange={handleonclick}  rows="1"></textarea>
                <div className='my-3 text-center'>
                    <button className='btn btn-primary' onClick={handleupclick}>Send</button>
                </div>
            </div>

        </div>
    )
}