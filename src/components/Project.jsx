function Project(props) {
    return (
    <div >
        <div>
        <h3>{props.project.title}</h3>
        <p>{props.project.description}</p>
        </div>
        <div>
        <img className="proj-img" src={props.project.image} alt={props.project.title} />
        </div>
    </div>
    )
  }
  
  export default Project