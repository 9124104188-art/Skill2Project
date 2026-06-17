import {useState} from 'react';
import ProjectCard from "./ProjectCard";





function SkillForm() {
    const [skill, setskills] = useState("");
    const [ideas, setIdeas] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [loading, setloading] = useState(false);

    async function handleGenerateIdeas() {
        setloading(true);
        const response = await fetch(`http://localhost:5000/api/projects?skill=${skill}`);
        const data = await response.json();
        console.log(data);
        setloading(false);

    if (Array.isArray(data)) {
        setIdeas(data);
    } else {
        alert(data.message);
        setIdeas([]);
    }
    }

    async function viewFavorites() {
  const response = await fetch("http://localhost:5000/api/projects/favorites");
  const data = await response.json();
  setFavorites(data);
    }

    async function saveFavorite(idea){
        const response = await fetch('http://localhost:5000/api/projects/favorites',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(idea)
        });
        const data = await response.json();
        alert(data.message);
    }


    async function deleteFavorite(id){
        const response = await fetch(
            `http://localhost:5000/api/projects/favorites/${id}`,
            {
            method:'DELETE',
            }
        );
        const data = await response.json();
        alert(data.message);
        viewFavorites();
    }


    return (
        <div className="skill-form">
            
            <input type="text" placeholder="Enter your skill" value={skill} onChange={(event) => setskills(event.target.value)} />
            <button onClick={handleGenerateIdeas}>Generate Ideas</button>
            <button onClick={viewFavorites}>View Favorites</button>
            {loading && <p>Loading...</p>}

            
            <ul>
                <div>
                    {ideas.map((idea, index) => (
                        <ProjectCard 
                            key={index}
                            title={idea.title}
                            difficulty={idea.difficulty}
                            description={idea.description}
                            onSave={()=>saveFavorite(idea)}
                        
                        />
                    ))}
                </div>

                {favorites.length > 0 && <h2>Saved Favorites</h2>}
                {favorites.length > 0 && (
                <div>
                    {favorites.map((favorite, index) => (
                        <ProjectCard 
                            key={index}
                            title={favorite.title}
                            difficulty={favorite.difficulty}
                            description={favorite.description}
                            onDelete={()=>deleteFavorite(favorite._id)}
                        />
                    ))
                        }
                </div>
)}
            </ul>
        </div>
    );
}

export default SkillForm;