import React from "react";

const ColourCard = (props)=>{
    return(
        <div className="px-9 py-5 text-white bg-indigo-400 mx-3 rounded cursor-pointer font-medium hover:bg-white duration-500 border-2 hover:text-indigo-400 border-indigo-400">
            {props.body}
        </div>
    )
}
export default ColourCard;