export function Projects (){
    return(
        <section className="content-card projects" id="projects">
                <h1>Projects</h1>
                <div className="col-2 project-list">
                    <div className="project-tile">
                        <img src="https://raw.githubusercontent.com/HDER7/Portfolio-Heider/master/src/img/Captura%20de%20pantalla%202023-08-14%20181515.png"
                            alt="" />
                        <div className="overlay">
                            <div className="project-description">
                                <h2>Notes</h2>
                            </div>
                        </div>
                    </div>
                    <div className="project-tile">
                        <img src="https://raw.githubusercontent.com/HDER7/Portfolio-Heider/master/src/img/xc.png"
                            alt="" />
                        <div className="overlay">
                            <div className="project-description">
                                <h2>Store</h2>
                                <p>
                                    It's a small store with connection to a noSQL database (MongoDB) 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-tile">
                        <img src="https://raw.githubusercontent.com/HDER7/Portfolio-Heider/master/src/img/pot.png"
                            alt="" />
                        <div className="overlay">
                            <div className="project-description">
                                <h2>Portfolio</h2>
                                <p>
                                    This is my old portfolio that I did in my first year of engineering
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-tile">
                        <img src="https://raw.githubusercontent.com/HDER7/Portfolio-Heider/master/src/img/facturacion.png"
                            alt="" />
                        <div className="overlay">
                            <div className="project-description">
                                <h2>Shop Software</h2>
                                <p>
                                It's a desktop application with connection to SQL database (Microsoft SQL Server)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://github.com/HDER7">see more...</a>
            </section>
    );
}