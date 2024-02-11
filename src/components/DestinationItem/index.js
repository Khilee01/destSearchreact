import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {name, imgUrl} = destinationDetails
    return (
      <li className="imageConatiner">
        <img alt={name} src={imgUrl} />
        <p>{name}</p>
      </li>
    )
  }
}

export default DestinationItem
