import React from 'react';

const PostMapper = ({array}) => {
    
    return ( 
        <div>
            {array.map(item=> <div>{item.name}, {item.postText}, {item.isLiked}, {item.isDisliked}</div>)}
        </div>
     );
}
 
export default PostMapper;