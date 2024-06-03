import { Link } from "react-router-dom"
function CallToAction() {

    return (
            <div className="back-dark row my-2 align-items-center">
            {/* <img src={will} alt="" /> */}
             
            <h1></h1>
            <p className="medium-text"> Although I am at the beginning of my journey as a programmer, I have built a great foundation in JavaScript, HTML, CSS, Node, React, Mongo, Sql, Rest, Graphql and other technologies from which to expand my knowledge. Please check out some of my projects and feel free to give me some feed back or ask me questions by clicking <Link to='/contact'>here</Link>. </p>

            </div>
    )
}

export default CallToAction