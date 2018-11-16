import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import TeamScore from "./TeamScore"
import {  Link } from "react-router-dom";



class App extends Component {

    CalScore(players){
        var redScore = 0;
        var blueScore = 0;
        for(var i = 0;i<players.length;i++){
            if(players[i].team=="red"){
                redScore += players[i].chips;
            }else if(players[i].team=="blue"){
                blueScore += players[i].chips
            }
           
        }
        return [redScore,blueScore]
    }
    


 componentWillMount(){
     
    axios.post("https://gamenight-leaderboard.herokuapp.com/get_player_score").then((data)=>{
     
        var scores = this.CalScore(data.data)
        let redScore = scores[0]
        let blueScore = scores[1]
        let lst = []

        if(redScore<=blueScore){
            for(var i = 0;i<data.data.length;i++){
                if(data.data[i].team=="red"){
                    lst.push(data.data[i].playerNum)
                }
            }
        }else{
            for(var i = 0;i<data.data.length;i++){
                if(data.data[i].team=="blue"){
                    lst.push(data.data[i].playerNum)
                }
            }
        }

        console.log(lst)

        this.setState({
            data:lst
        })


      }).catch((e)=>{
          console.log(e)
      }

    
  
      )
 }
    
  
  constructor(props){

    super(props)
    this.state={
        lucky1:0,
        lucky2:0,
        lucky3:0,
        stop:true,
        timer:"",
        timer1:"",
        timer2:"",
        data:[]
    }
    this.timer = this.timer.bind(this)
    this.restart = this.restart.bind(this)
   
    
  }

  timer(){
    this.setState({
        stop:false,
        timer:setInterval(()=>{
            var num = Math.floor(Math.random() * (this.state.data.length -1 ))
            this.setState({
               
                lucky1: this.state.data[num]
            })
        },50)
    })

    this.setState({
        stop:false,
        timer1:setInterval(()=>{
            var num = Math.floor(Math.random() * (this.state.data.length -1 ))
            this.setState({
                lucky2:this.state.data[num]
            })
        },50)
    })

    this.setState({
        stop:false,
        timer2:setInterval(()=>{
            var num = Math.floor(Math.random() * (this.state.data.length -1 ))
            this.setState({
                lucky3:this.state.data[num]
            })
        },50)
    })





  }

  restart(){
    clearInterval(this.state.timer)
    setTimeout(()=>{    clearInterval(this.state.timer1)},2000)
    setTimeout(()=>{    clearInterval(this.state.timer2)},4000)
    this.setState({
        stop:true,
   
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
            <div className='row padding-left'>
            <div className='col-sm-8 offset-sm-2' >
                <TeamScore
               teamcolor="app-red-no-bottom"
               formClass="form-control app-form-red text-right text-center" 
               team="First" 
               score={this.state.lucky1}
               />

                <TeamScore
               teamcolor="app-red-no-bottom"
               formClass="form-control app-form-red text-right text-center" 
               team="Second" 
               score={this.state.lucky2}
               />

                <TeamScore
               teamcolor="app-red-no-bottom"
               formClass="form-control app-form-red text-right text-center" 
               team="Third" 
               score={this.state.lucky3}
               />
               
            {
                this.state.stop?
                <button className='btn btn-outline-light' onClick={this.timer} style={{padding:"1.5rem",fontSize:"2rem",fontWeight:"bold",width:"45%",marginRight:"10%"}}>Start</button>:
                <button className='btn btn-outline-light' onClick={this.restart} style={{padding:"1.5rem",fontSize:"2rem",fontWeight:"bold",width:"45%",marginRight:"10%"}}>Stop</button>
            }
             

              <Link to="/" className='btn btn-outline-light' onClick={()=>{
                
             }}style={{padding:"1.5rem",fontSize:"2rem",fontWeight:"bold",width:"45%"}}>Back</Link>
             

              </div>
            </div>
            
           
        </div>

              
      </div>
    );
  }
}

export default App;
