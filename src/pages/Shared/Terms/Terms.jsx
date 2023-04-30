import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and COnditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cumque sint officia cum? Quos veritatis expedita suscipit repudiandae culpa aut similique atque necessitatibus iste quaerat reiciendis voluptas maiores laudantium minima molestias accusantium, nobis voluptatibus cumque deserunt rerum soluta non facilis.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;