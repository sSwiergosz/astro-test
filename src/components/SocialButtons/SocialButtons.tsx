import { useState } from 'react';
 

const SocialButtons = () => {
 const [count, setCount] = useState(0);
 const add = () => setCount((i) => i + 1);
 const subtract = () => setCount((i) => i - 1);
 
 return (
   <>
     <div>
       {count} people liked this post
     </div>
     <div>
       <img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-like-icon-png-image_695769.jpg" width="32" height="32" onClick={add}></img>
       <img src="https://e7.pngegg.com/pngimages/256/78/png-clipart-dislike-dislike-thumbnail.png" width="32" height="32" onClick={subtract}></img>
     </div>
   </>
 );
}

export default SocialButtons;