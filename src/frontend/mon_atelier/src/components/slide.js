import React, {useState} from 'react';

import "./slide.css"

export const CarouselItem = ({ children, width }) => {

    return(

        <div className="carousele-item" style={{ width: width }}>
            {children}
        </div>

        );
}


const Slide = ({children}) => {
    const [activeIndex, setActivateIndex] = useState(0);

    const updateIndex = (newIndex) =>{

        if(newIndex < 0){
            newIndex = 0;
        }
        else if(newIndex >= React.Children.count(children)){
            newIndex = React.Children.count(children) - 1;
        }

        setActivateIndex(newIndex);
    }

    return(
        <div className="carousele">
            <div 
              className="innere" 
              style={{ transform:`translateX(-${activeIndex * 100}%)` }}>
              {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, { width: "100%" });
              })}  
            </div>
            <div className="Indiq mx-auto">
                <button  className="bouton m-1"
                    onClick={()=>{
                        updateIndex(activeIndex -1);
                    }}
                >
                    Prev
                </button>
                <button className="bouton m-1"
                    onClick={()=>{
                        updateIndex(activeIndex +1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};


export default Slide;