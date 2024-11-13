

export default function PostsCard({post}){
    //const imgSize = "600x400";
    //const postTitle = "La Fabbrica di Cioccolato"

    return (

        <>
        {post.published &&
        <div key={post.id} className = "postCard">
            <div className="image">
            <img src={post.image} width="600" height="400" />
            </div>
            <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            </div>
        </div>
        

         }
   

        
   
    </>
    )
}