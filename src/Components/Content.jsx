import React from 'react';

const Content = () => {
   return (
      <div className="content">
         <div className="background-user">
            <img src="https://wallup.net/wp-content/uploads/2016/05/26/274871-digital_art-dark-static.jpg" alt="Backround user" />
         </div>
         <div className="description-user">
            <img src="https://www.clipartmax.com/png/full/75-755878_nestor-aponte-portrait-of-a-man.png" alt="Avatar user" />
            <div className="description">
               Ivan Ivanov <br />
               Date of Birth: 1 january <br />
               City: Moskva <br />
               Work: Sber <br />
            </div>
         </div>
         <div className="posts">
            <div className="my_posts">
            My posts
            </div>
            <div className="new_posts">
               New post
            </div>  
            <div className="post">
               Post1
            </div>
         </div>
         
      </div>
   );
};

export default Content;