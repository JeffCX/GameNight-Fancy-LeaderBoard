import React, { Component } from 'react';
import TeamScore from "./Component/TeamScore"
import PlayerScore from "./Component/PlayerScore"
import axios from "axios"
import './App.css';
class Main extends Component {
  componentWillMount(){
    //set show flag to false / true per 5 seconds, use the flag to activate the flash effect (animation in css)
    this.timerID = setInterval(
      ()=>{
      this.setState({
        show:false
      })
   
    //use axios to make post request to the api, retrieve Scores of Red Team and Blue Team every 5 seconods
    axios.post("https://gamenight-leaderboard.herokuapp.com/get_team_score").then((data)=>{
        this.setState({
          RedScore:data.data.redScore,
          BlueScore:data.data.blueScore
        })
    }).catch((e)=>{
      console.log(e)
    })
    
    //use axios to make post request to the api, retrieve top ten player sorted by score every 5 seconds
    axios.post("https://gamenight-leaderboard.herokuapp.com/get_player_score").then((data)=>{
        this.setState({TopTen:data.data})
      }).catch((e)=>{
          console.log(e)
      })
    },5000)

     //set show flag to false / true per 5 seconds, use the flag to activate the flash effect (animation in css)
    this.show = setInterval(()=>{
      this.setState({
        show:true
      })
    },5000)

  }

  //clear timer 
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

  //loop the data and display top ten player in PlayerScore component
  renderPlayer(){
    return this.state.TopTen.map((score,index)=>{
      if(score.team=="blue"){
        return <PlayerScore 
        rank={index+1} 
        key={index}
        num= {score.playerNum}
        scoreBg="col-sm-6 app-bg-score__blue"
        textColor="#81CEC8"
        numClass="col-sm-4 app-playerId shadow-blue"
        value={score.chips}
        />
      }else{
        return <PlayerScore 
        rank={index+1} 
        key={index}
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
    //Use video as BG, call this.renderPlayer() to display top ten player scoore, display red Team Score and blue Team Score
    return <div className='app'>
          <video autoPlay muted loop id="myVideo">
        <source src="bg.mp4" type="video/mp4" />
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
    
  }
}


export default Main;
