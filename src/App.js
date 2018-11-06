import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const TeamScore = (props) =>{

  return  <div>
     <h1 className={props.teamcolor}>
     {props.team}

</h1>

<div className="form-group">
 <input type="email" className={props.formClass} aria-describedby="emailHelp" placeholder="0" value={props.score}/>
</div>
</div>

}

const PlayerScore = (props)=>{
  return <div className='app-player'>
        <div className='row app-width'>
          <div className='col-sm-2 app-bg-text' style={{color:`${props.textColor}`}}> {props.rank}</div>
          <div className='col-sm-4 app-playerId'>{props.num} </div>
          <div className={props.scoreBg}> 
          {props.value}
          </div>
        </div>
      
    </div>
}

class App extends Component {
  render() {
    return (
      <div className='app'>
          <video autoPlay muted loop id="myVideo">
        <source src="bg1.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
        <div className='container-fluid'>
          <div className="row padding-left">
            <div className='col-sm-6'>
              <PlayerScore 
              rank={1} 
              num="A0023"
              scoreBg="col-sm-6 app-bg-score__blue"
              textColor="blue"
              value={16}
              />

              <PlayerScore 
              rank={2} 
              num="A0024"
              scoreBg="col-sm-6 app-bg-score__red"
              textColor="red"
              value={15}
              />


              <PlayerScore 
              rank={1} 
              num="A0023"
              scoreBg="col-sm-6 app-bg-score__blue"
              textColor="blue"
              value={16}
              />
              

             <PlayerScore 
              rank={1} 
              num="A0023"
              scoreBg="col-sm-6 app-bg-score__blue"
              textColor="blue"
              value={16}
              />
              


              <PlayerScore 
              rank={1} 
              num="A0023"
              scoreBg="col-sm-6 app-bg-score__blue"
              textColor="blue"
              value={16}
              />
              

              <PlayerScore 
              rank={1} 
              num="A0023"
              scoreBg="col-sm-6 app-bg-score__blue"
              textColor="blue"
              value={16}
              />
              
              <PlayerScore 
              rank={1} 
              num="A0023"
              scoreBg="col-sm-6 app-bg-score__blue"
              textColor="blue"
              value={16}
              />
              

              <PlayerScore 
              rank={1} 
              num="A0023"
              scoreBg="col-sm-6 app-bg-score__blue"
              textColor="blue"
              value={16}
              />
              

              <PlayerScore 
              rank={1} 
              num="A0023"
              scoreBg="col-sm-6 app-bg-score__blue"
              textColor="blue"
              value={16}
              />
              

               <PlayerScore 
              rank={1} 
              num="A0023"
              scoreBg="col-sm-6 app-bg-score__blue"
              textColor="blue"
              value={16}
              />
              

              
            
            
            </div>
            <div className='col-sm-6 padding-left'>

              <TeamScore
               teamcolor="app-red"
               formClass="form-control app-form-red text-right" 
               team="RED TEAM" 
               score={110201}
               />


                <TeamScore
                teamcolor="app-blue"
               formClass="form-control app-form-blue text-right" 
               team="BLUE TEAM" 
               score={1020310}
               />
              
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
