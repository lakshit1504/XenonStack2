import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom"
import './Card.css';
const Card = ({posts}) => {

  const [isLoading, setIsLoading]=useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 100);
  },[])

  let str=posts.description;

  return (
    <div className='card'>
        { 
          isLoading ?
          <div className="cards">
              loading...
          </div>
          :
          <Link to={`/products`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={posts.image} alt='card'/>
                <div className="cards__overlay">
                <div className="card__title ">{posts?posts.title:""}</div>
                <div className="card__runtime">
                Rs  {posts?posts.price:""}
                    </div>
                <div className="card__description">{posts ? str.slice(0,50)+"..." : ""}</div>
                </div>
            </div>
        </Link>

          }
    </div>
  )
}

export default Card