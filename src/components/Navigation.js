import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className='Navbar'>
            <h1>MY HERO ARENA</h1>
            <div className='Links'>
                <Link to='/'>Home</Link>
                <Link to='/faqs'>FAQs</Link>
                <Link to='/aboutme'>About Us</Link>
                <Link to='/characters'> Characters</Link>
            </div>
            <div className='Credentials'>
                <Link to='/login'><button className='Request'>Login</button></Link>
                <Link to='/sign-up'><button className='Request'>Sign-Up</button></Link>
            </div>
        </nav>
    )
}

export default Navigation
