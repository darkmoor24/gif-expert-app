import React, { useState }/*, { useState }*/ from 'react';
import AddCategory  from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';
// import PropTypes from "prop-types";

const GifExpertApp = ({ defaultCategories }) => {
    const [ categories, setCategories ] = useState(defaultCategories);
    // const [ categories, setCategories ] = useState(['One punch]);

    return(
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories } />
            
            <hr />
            
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            category={ category } 
                            key={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;