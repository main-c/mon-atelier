import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';


export default function Slide(){

	const[count, setCount] = useState(0);
	const slides = ["'images/banner.jpg'", "'images/banner1.jpg'", "'images/banner2.jpg'"];
	const currentImg = count

	const callback = ()=>{

		setCount (count +1)

		 if ((count -1) > slides.length - 2)
			setCount(0)
	}

    function useInterval(callback) {
        //create my reference object
         const savedCallback = useRef()

        useEffect(() => {
            //after every render save the newest callback our reference object
            savedCallback.current = callback
        })

        function tick() {
            //call the latest timer 
            savedCallback.current();
        }

        let timer = setInterval(tick)
        return () => clearInterval(timer)
    }


	return (

		<div>
                <img src={currentImg} alt="slide" />
            </div>

		)
}