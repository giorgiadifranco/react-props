import posts from '../assets/data/posts.js'
import PostsCard from './PostsCard/PostsCard.jsx';

export default function AppMain(){

    

    return (

        <main>

            <div className="main_container">
                <div className="card">
                    
                       
                        {posts.map((post, id)=> <PostsCard key={id} post={post} />)}

                    
                </div>

            </div>
        </main>


    )

}