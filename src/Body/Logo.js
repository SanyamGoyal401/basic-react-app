import './Logo.css'
import dweep from './dweep.png'
let Logo = () => {
    return (
        <div className='logo'>
            <img src={dweep} alt="" className='img'/>
        </div>
    );
}


export default Logo;