import posts from '../../assets/data/posts.js'

export default function PostsCard(){
    //const imgSize = "600x400";
    //const postTitle = "La Fabbrica di Cioccolato"

    return (

        <>
        {posts.map((post)=>(
        <div key={post.id} className = "postCard">
        <div className="image">
        <img src={post.image} width="600" height="400" />
        </div>
    


        <h3>{post.title}</h3>
        <p>{post.description}</p>
        </div>
        
   

        
    ))}
    </>
    )
}