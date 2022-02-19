import React from 'react';
import FlipUnitContainer from "./FlipUnitContainer";

class FlipClock extends React.Component {
	
    constructor(props) {
          super(props);
          this.state = {
              days: 0,
              daysShuffle: true,
              hours: 0,
              hoursShuffle: true,
              minutes: 0,
              minutesShuffle: true,
              seconds: 0,
              secondsShuffle: true
          };
      }
    
      componentDidMount() {
          this.timerID = setInterval(
              () => this.updateTime(),
              50
          );
      }
    
      componentWillUnmount() {
          clearInterval(this.timerID);
      }
    
      updateTime() {
        //Change Time here, once changed in terminal 
        //type: git add .
        //then: git commit -m "Random Message"
        //then: git push 
        //then it will ask for your git user name 
        //then it will ask for a password this is in a file
        const difference = new Date(2022, 1, 22) - new Date();

        // Initalised Days, Hours, Minutes and Seconds
        let days = null;
        let hours = null;
        let minutes = null;
        let seconds = null;

      if (difference > 0) {
          days = Math.floor( difference / (1000 * 60 * 60 * 24)).toString();
          hours = Math.floor((difference / (1000 * 60 * 60)) % 24).toString();
          minutes = Math.floor((difference / 1000 / 60) % 60).toString();
          seconds = Math.floor((difference / 1000) % 60).toString();
      }

        // on hour chanage, update days and shuffle state
        if( days !== this.state.days) {
            const daysShuffle = !this.state.daysShuffle;
            this.setState({
                days,
                daysShuffle
            });
        }
    
          // on hour chanage, update hours and shuffle state
          if( hours !== this.state.hours) {
              const hoursShuffle = !this.state.hoursShuffle;
              this.setState({
                  hours,
                  hoursShuffle
              });
          }
          // on minute chanage, update minutes and shuffle state
          if( minutes !== this.state.minutes) {
              const minutesShuffle = !this.state.minutesShuffle;
              this.setState({
                  minutes,
                  minutesShuffle
              });
          }
          // on second chanage, update seconds and shuffle state
          if( seconds !== this.state.seconds) {
              const secondsShuffle = !this.state.secondsShuffle;
              this.setState({
                  seconds,
                  secondsShuffle
              });
          }
      }
    
      render() {
      
      // state object destructuring
          const {
        days,
        hours, 
        minutes, 
        seconds,
        daysShuffle, 
        hoursShuffle, 
        minutesShuffle, 
        secondsShuffle 
      } = this.state;
          
      return(
            <div className='flipClockContainer'>
                <div className={'flipClock'}>
                  <FlipUnitContainer 
                      unit={'days'}
                      digit={days} 
                      shuffle={daysShuffle} 
                      />
                    <div className="spacer">:</div>
                  <FlipUnitContainer 
                      unit={'hours'}
                      digit={hours} 
                      shuffle={hoursShuffle} 
                      />
                    <div className="spacer">:</div>
                  <FlipUnitContainer 
                      unit={'minutes'}
                      digit={minutes} 
                      shuffle={minutesShuffle} 
                      />
                    <div className="spacer">:</div>
                  <FlipUnitContainer 
                      unit={'seconds'}
                      digit={seconds} 
                      shuffle={secondsShuffle} 
                      />
              </div>
            </div>
          );
      }
  }

  export default FlipClock;
