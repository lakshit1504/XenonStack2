import React, {useEffect, useState} from "react"
import Cards from "./Card.js"
import './product.css';
const Internships = () => {
      const [post, setPost] = useState([])
        const getData = () => {
            fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setPost(data))
        }
        useEffect(() => {
        
          getData();
          }, []);
    return (
        <div className="post__list">
            <h2 className="list__title">Popular Products</h2>
            <div className="list__cards">
                {
                    post.map(posts => (
                        <Cards key={posts.id} posts={posts} />
                    ))
                }
            </div>
        </div>
    )
}

export default Internships;