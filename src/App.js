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
       <span className='app-player-rank'> {props.rank}</span>
       <span className='app-player-num'> {props.num}</span>
       <input type='text' className='app-player__blue' placeholder="0" value={props.value}/>
    </div>
}

class App extends Component {
  render() {
    return (
      <div className='app'>
          <video autoPlay muted loop id="myVideo">
        <source src="bg.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
        <div className='container'>
          <div className="row">
            <div className='col-sm-6'>
              <PlayerScore 
              rank={1} 
              num="A0023"
              value={16}
              />
              <PlayerScore 
              rank={2} 
              num="A0024"
              value={15}
              />
              <PlayerScore 
              rank={3} 
              num="A0025"
              value={14}
              />
             <PlayerScore 
              rank={4} 
              num="A0026"
              value={13}
              />
              <PlayerScore 
              rank={5} 
              num="A0027"
              value={12}
              />
              <PlayerScore 
              rank={6} 
              num="A0028"
              value={11}
              />
            
            
            </div>
            <div className='col-sm-6 padding-left'>

              <TeamScore
               teamcolor="app-red"
               formClass="form-control app-form-red text-right" 
               team="RED TEAM" 
               score={0}
               />


                <TeamScore
                teamcolor="app-blue"
               formClass="form-control app-form-blue text-right" 
               team="BLUE TEAM" 
               score={0}
               />
              
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
