// Write your code here
import {Component} from 'react'

import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    isActive: false,
    title: '',
    date: '',
    listo: [],
  }
  typingevent = event => {
    this.setState({
      title: event.target.value,
    })
  }
  typingdate = event => {
    const inputDate = event.target.value
    const formattedDate = format(new Date(inputDate), 'dd MMMM yyyy, EEEE')

    this.setState({
      date: formattedDate,
    })
  }
  adding = event => {
    const {title, date} = this.state
    event.preventDefault()
    const appoinList = {
      id: uuidv4(),
      evente: title,
      dated: date,
      isTrue: false,
    }
    this.setState(prevState => {
      return {listo: [...prevState.listo, appoinList]}
    })
  }
  clickingStarred = id => {
    this.setState(prevState => ({
      listo: prevState.listo.map(eachCon => {
        if (eachCon.id === id) {
          return {...eachCon, isTrue: !eachCon.isTrue}
        }
        return eachCon
      }),
    }))
  }
  starring = () => {
    this.setState(prevAc => {
      return {isActive: !prevAc.isActive}
    })
  }
  render() {
    let finalList = ''
    const {listo, date, isActive} = this.state
    if (isActive) {
      const filteredStar = listo.filter(eachList => {
        return eachList.isTrue === true
      })
      finalList = filteredStar
    } else {
      finalList = listo
    }

    return (
      <div className="home">
        <div className="white-box">
          <div className="upper">
            <div className="content">
              <h1 className="head">Add Appointment</h1>
              <form>
                <label htmlFor="title">TITLE</label>
                <input
                  onChange={this.typingevent}
                  id="title"
                  type="text"
                  placeholder="Title"
                  className="input-style"
                />
                <label htmlFor="date">Date</label>
                <input
                  onChange={this.typingdate}
                  type="date"
                  id="date"
                  className="input-style"
                />
                <button
                  type="submit"
                  onClick={this.adding}
                  className="btn-style"
                >
                  Add
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="img-style"
              />
            </div>
          </div>
          <hr />
          <div className="middle">
            <h1 className="middle-head">Appointments</h1>
            <button onClick={this.starring} type="button" className="starred">
              Starred
            </button>
          </div>
          <ul className="ulList">
            {finalList.map(eachItem => (
              <AppointmentItem
                clickingStarred={this.clickingStarred}
                key={eachItem.id}
                datailsOfListo={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
