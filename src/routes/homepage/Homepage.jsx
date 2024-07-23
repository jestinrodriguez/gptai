import { Link } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital"/>
      <div className="left">
        <h1>GPT AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg">
            </div>
          </div>
          <img src="/bot.png" alt="" className="bot"/>
        </div>
      </div>
    </div>
  )
}

export default Homepage
