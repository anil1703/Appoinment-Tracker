// Write your code here
import {Component} from 'react'
import './index.css'

class AppointmentItem extends Component {
  render() {
    const {datailsOfListo, clickingStarred} = this.props
    const {id, evente, dated, isTrue} = datailsOfListo
    const check = isTrue
      ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    const clickStart = () => {
      clickingStarred(id)
    }
    return (
      <li className="main-list">
        <div className="inside-list">
          <p className="list-head">{evente}</p>
          <button
            data-testid="star"
            onClick={clickStart}
            className="start-btn-style"
          >
            <img alt="star" src={check} className="img-star" />
          </button>
        </div>
        <p className="list-para">{dated}</p>
      </li>
    )
  }
}

export default AppointmentItem
