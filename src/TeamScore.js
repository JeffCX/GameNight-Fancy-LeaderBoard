import React from "react"
import {  Link } from "react-router-dom";
const TeamScore = (props) =>{

  return  <div>
    <Link to="/lottery">
     <h1 className={props.teamcolor}>
     {props.team}

</h1></Link>

<div className="form-group">
 <input type="email" className={props.formClass} aria-describedby="emailHelp" placeholder="0" value={props.score}/>
</div>
</div>


}

export default TeamScore