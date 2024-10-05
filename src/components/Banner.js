import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'La jungla'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La jungla' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner;
