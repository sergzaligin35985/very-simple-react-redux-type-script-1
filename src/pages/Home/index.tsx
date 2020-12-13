import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            Home page!!!
            <Link to="/about">About page</Link>
        </div>
    )
}
