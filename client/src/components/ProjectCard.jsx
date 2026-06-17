function ProjectCard(props) {
    return(
        <div className="project-card">
            <h3>{props.title}</h3>
            <p className={`difficulty-${props.difficulty.toLowerCase()}`}>Difficulty: {props.difficulty}</p>
            <p>{props.description}</p>

            {props.onSave && (
        <button onClick={props.onSave}>Save to Favorites</button>
      )}
        {props.onDelete && (
        <button onClick={props.onDelete}>Remove from Favorites</button>
      )}
    
        </div>
    );
} 

export default ProjectCard;