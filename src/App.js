import React, { Component } from 'react';
import './App.css';
import axios from "axios"


import TeamScore from "./TeamScore"


const PlayerScore = (props)=>{
  return <div className='app-player'>
        <div className='row app-width'>
          <div className='col-sm-2 app-bg-text' style={{color:`${props.textColor}`,fontWeight:"bold",fontSize:"4rem"}}> {props.rank}</div>
          <div className={props.numClass}>{props.num} </div>
          <div className={props.scoreBg}> 
          {props.value}
          </div>
        </div>
      
    </div>
}

class Main extends Component {


  componentWillMount(){
    

    this.timerID = setInterval(()=>{
      this.setState({
        show:false
      })
   
      axios.post("https://gamenight-leaderboard.herokuapp.com/get_team_score").then((data)=>{
        console.log(data.data)

        this.setState({
          RedScore:data.data.redScore,
          BlueScore:data.data.blueScore
        })
    }).catch((e)=>{
      console.log(e)
    })


      axios.post("https://gamenight-leaderboard.herokuapp.com/get_player_score").then((data)=>{
        console.log(data.data)
        this.setState({TopTen:data.data})
      }).catch((e)=>{
          console.log(e)
      }

    
  
      )

      
     

     
    
      
    },5000)

    this.show = setInterval(()=>{
      this.setState({
        show:true
      })
    },5000)

     
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
 
  
  constructor(props){

    super(props)
    this.state={
      TopTen:[],
      RedScore:0,
      BlueScore:0,
      show:false
    }
  }

  renderPlayer(){

    
    return this.state.TopTen.map((score,index)=>{
      if(score.team=="blue"){
        return <PlayerScore 
        rank={index+1} 
        num= {score.playerNum}
        scoreBg="col-sm-6 app-bg-score__blue"
        textColor="#81CEC8"
        numClass="col-sm-4 app-playerId shadow-blue"
        value={score.chips}
        />
      }else{
        return <PlayerScore 
        rank={index+1} 
        num= {score.playerNum}
        scoreBg="col-sm-6 app-bg-score__red"
        numClass="col-sm-4 app-playerId shadow-red"
        textColor="#8D265D"
        value={score.chips}
        />
      }
    })
  }


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
              {this.state.show?this.renderPlayer():""}
            
            
            </div>
            <div className='col-sm-6' style={{paddingLeft:"5%"}}>

              <TeamScore
               teamcolor="app-red"
               formClass="form-control mag  app-form-red text-right" 
               team="RED TEAM" 
               score={this.state.RedScore}
               />


                <TeamScore
                teamcolor="app-blue"
               formClass="form-control app-form-blue text-right" 
               team="BLUE TEAM" 
               score={this.state.BlueScore}
               />
              
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Main;
