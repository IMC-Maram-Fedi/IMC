import { Link } from 'react-scroll';
const Aboutus = () => {
    return ( 
        <div className="aboutus">
            <div className="box">
                <div className="text">
                    <h1>About us</h1>
                    <p>Unlock tech and career growth with ISAMM Microsoft Club! Dive into Microsoft tech through workshops, competitions, and career support. Join us from aspiration to achievement. Passion fuels progress!</p>
                    <Link id="button" to='Loginsignup' spy={true} smooth={true} offset={-50} duration={500}>Join us</Link>
                </div>
                <img className="image2" src="projector.png" alt="" />
                <img className="image1" src="event1.jpg" alt="" />
            </div>
        </div>
     );
}
 
export default Aboutus;