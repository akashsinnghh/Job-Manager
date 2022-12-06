import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';

function Button(props) {
   
    function getJob(i){
        let data=props.data[i]
        props.getData(data,i)
        
    }

    function handleClick(e){
        props.delFormData()
    }
    const mystyle = {
        width: "6vw"
      };
    

    return (
        <div>
            {(props.new == true) ? <button style={mystyle} onClick={()=>handleClick()}>New Job +</button> : null}
            { props.data.map((data,i) => 
            <div key={i}> 
                <button style={mystyle}  onClick={()=>getJob(i)}>Job Post {i+1} </button>
            </div>
            ) 

             }

        </div>
    )
}

export default Button;