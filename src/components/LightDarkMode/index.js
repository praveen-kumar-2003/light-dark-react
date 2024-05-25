import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {onBtnClick: false}

  onBtnClick = () => {
    this.setState(prevState => ({onBtnClick: !prevState.onBtnClick}))
  }

  render() {
    const {onBtnClick} = this.state
    const buttonText = onBtnClick ? 'Dark Mode' : 'Light Mode'
    const backGround = onBtnClick ? 'lightbg' : 'darkbg'
    const heading = onBtnClick ? 'lighthead' : 'darkhead'

    return (
      <div className="container">
        <div className={backGround}>
          <h1 className={heading}>Click to Change Mode</h1>
          <button className="dark" type="button" onClick={this.onBtnClick}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
