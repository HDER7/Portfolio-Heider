export const About= () =>{
    return (
        <section className="content-card about" id="about">
                <h1>About me</h1>
                <div className="about-item about-me">
                    <p>
                    I'm from Chocó, exactly from its capital. I study software engineering at the Tecnologico de Antioquia. I focus on the area of software architecture and front and back programming. I also like music, which has led me to learn how to create it.
                    </p>
                    <p>
                    I am a proactive personwith knowledge in thedesign, implementation,testing and maintenance ofsoftware systems. I have agreat learning capacity andenjoy working in a team.
                    </p>
                </div>
                <div className="col-2">
                    <div className="about-item skills">
                        <h1>Skills</h1>
                        <span className="skill">HTML</span>
                        <span className="skill">CSS</span>
                        <span className="skill">JavaScript</span>
                        <span className="skill">Java</span>
                        <span className="skill">Python</span>
                        <span className="skill">C\C++\C#</span>
                        <span className="skill">Node.js</span>
                        <span className="skill">React</span>
                        <span className="skill">SQL</span>
                        <span className="skill">Git</span>
                    </div>
                    <br/>
                    <div className="about-item languages">
                        <h1>Languages</h1>
                        <div className="language">
                            <p>Spanish</p>
                            <span className="bar"><span className="spanish"> </span> </span>
                        </div>
                        <div className="language">
                            <p>English</p>
                            <span className="bar"><span className="english"> </span> </span>
                        </div>
                    </div>
                </div>
            </section>
    );
}