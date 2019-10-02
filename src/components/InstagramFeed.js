import React from 'react'

const InstagramFeed = props => {

  return (
    <div class="col-3 insta-feed">
      {props.type === "carousel"? <i className="zmdi zmdi-collection-item carousel"></i> 
        : null 
      }
      <a href={props.link}>
        <figure><img src={props.image} alt=""/></figure>
      </a>
      
        
    </div>
  )
}

export default InstagramFeed;