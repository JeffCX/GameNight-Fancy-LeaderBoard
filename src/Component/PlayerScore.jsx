import React from "react"

//Player Score Component, Render Individual Player Score
class PlayerScore extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return  <div className='app-player'>
        <div className='row app-width'>
          <div className='col-sm-2 app-bg-text' style={{color:`${this.props.textColor}`,fontWeight:"bold",fontSize:"4rem"}}> {this.props.rank}</div>
          <div className={this.props.numClass}>{this.props.num} </div>
          <div className={this.props.scoreBg}> 
          {this.props.value}
          </div>
        </div>
      
    </div>
    }

}

export default PlayerScore 