function Project(props) {
    return (
    <div >
        <a href={props.project.url}>
        <div>
        <h3>{props.project.title}</h3>
        <p>{props.project.description}</p>
        </div>
        <div>
        <img className="proj-img" src={props.project.image} alt={props.project.title} />
        </div>
        </a>
    </div>
    )
  }
  
  export default Project