import React from 'react';
import './live.css';
import 'bootstrap/dist/css/bootstrap.css';

function Live(props) {

    let minExp = ""
    let maxExp = ""
    if(props.data){
        if(props.data.minExp){
            minExp = props.data.minExp + " to "
        }
        if(props.data.maxExp){
            maxExp = props.data.maxExp
        }
    }
    
    return (
        <div className='main-live'>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
            <form>
                <fieldset className="border p-2">
                    <legend className="float-none legend">
                        <img src={require("D:/job-manager/src/assets/search1.png")}  className='search-icon'/>
                        Live Preview</legend>
                        <div className='title-text'>                                            
                            <div className='text'><b>{props.data?props.data.title:""}</b></div>
                                <div className='term-text' 
                                style={props.data && props.data.selectTerm?{backgroundColor: "lightblue"}:null}>
                                {props.data?props.data.selectTerm:""}
                                </div>
                        </div>
                            <div className='text'>Introduction :&nbsp; {props.data?props.data.intro:""}</div>
                            <div className='text'>Roles & Responsiblities :&nbsp; {props.data?props.data.rr:""}</div>
                            <div className='text'>Preferred Experence : &nbsp; {minExp + maxExp}
                            <div className='text'>Qualification : &nbsp; {props.data?props.data.qualification:""}</div>
                            <div className='text'>Concluding Statement : &nbsp; {props.data?props.data.statement:""}</div>
                            <div className='text'>Company : &nbsp; {props.data?props.data.company:""}</div>
                            <div className='text'>Location : &nbsp; {props.data?props.data.location:""}</div>
                            <div className='text'>Job Type : &nbsp; {props.data?props.data.jobType:""}</div>
                    </div>

                    <p></p>
                </fieldset>
            </form>
        </div>
    )
}

export default Live;