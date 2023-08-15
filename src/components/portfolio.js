import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './home'
import { About } from './About';
import { Projects } from './projects';
import { Contacts } from './Contacts';
import pdf from './CV.pdf'
function Portfolio(){
    return(
        <div className="portfolio">
                <section className="header">
                <img className="header-img"
                    src='http://127.0.0.1:5500/src/img/yo11.png'
                    alt="Me" />
                <h1>Heider Rivas</h1>
                <h2>Software engineer</h2>
                <div className="socials">
                    <a href='https://www.linkedin.com/in/heider-andres-rivas-baldosea-a0b59a18b/'target='blank' className="fab fa-linkedin-in" id="profile-link"> </a>
                    <a href="https://github.com/HDER7" target="blank" className="fab fa-github"> </a>
                    <a href="https://www.instagram.com/heiderbc/" target="blank" className="fab fa-instagram"> </a>
                </div>
                <a href={pdf} download='CV.pdf' className="cta" rel='noopener noreferrer'>Download CV</a>
            </section>
            <div className="content">
                <Router>
                    <Routes>      
                        <Route exact path='/' element={<Home/>}></Route>
                        <Route path='/About' element={<About/>}></Route>
                        <Route path='/Projects' element={<Projects/>}></Route>
                        <Route path='/Contacts' element={<Contacts/>}></Route>
                        <Route  path='*' element={<h1>Error 404</h1>}></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}
export default Portfolio;