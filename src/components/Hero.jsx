import will from "../assets/will-bw.jpg"

function Hero() {
    return (
            <div className="hero row my-2 align-items-center">
            <div className="col-12 col-md-6 d-flex justify-content-center">
            <img className="hero-img" src={will} alt="" />

            </div>
            <div className="col-12 col-md-6">
                <p className="big-text">My Name is William Gallagher. 
                </p>
                <p className="medium-text">I am an aspiring web developer who recently finished the Rutgers Fullstack Web Development Bootcamp. Please Check Out some of my projects and feel free to contact me with any questions or suggestions.</p>
            </div>
            
             
            
            </div>
    )
}

export default Hero