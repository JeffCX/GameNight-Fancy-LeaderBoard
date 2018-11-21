import React from "react"

//Player Team Component, Render Individual Team Score
const TeamScore = (props) =>{
  return(
    <div>
      <h1 className={props.teamcolor}>
          {props.team}
      </h1>

      <div className="form-group" >
      <input type="email"  className={props.formClass} aria-describedby="emailHelp" placeholder="0" value={props.score}/>
      </div>
    </div>
  ) 
}

export default TeamScore