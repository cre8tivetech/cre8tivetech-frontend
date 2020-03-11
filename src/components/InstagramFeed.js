import React from 'react'

const InstagramFeed = props => {

  return (
    <div class="col-3 insta-feed">
      {props.type === "GraphSidecar"? <i className="zmdi zmdi-layers carousel"></i> 
        : null 
      }
      {props.type === "GraphVideo"? <i className="zmdi zmdi-videocam carousel"></i> 
        : null 
      }
      <a href={props.link} target='_blank'>
        <figure><img className="lazyload" data-src={props.image} alt=""/></figure>
      </a>
      
        
    </div>
  )
}

export default InstagramFeed;