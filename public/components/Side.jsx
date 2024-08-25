import React, { useEffect, useState } from 'react'; 
import { display } from '../fun/text';
import { Link } from 'react-router-dom';
import './img.css'
const Side = () => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {  
        let interval;
        
        let value=display(interval,displayText,setDisplayText); 
        return () => clearInterval(value);

        
    }, []);

    return (
        <div>
            <h1 className='text-6xl font-bold text-white toxt' style={{
                width:"600px",
               
            }}>
                {displayText}
            </h1>
            <div> 
            <Link to="/login">
            <button className="btn btn-lg btn-glass logs my-2">
                    Login
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="red"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                    </svg>
                </button>
            </Link>
                <Link to="/signup"> 
                <button className="btn btn-lg btn-glass logs my-2 mx-2">
                SIGNUP
            </button>
                </Link>
               
            </div>
        </div>
    );
};

export default Side;
