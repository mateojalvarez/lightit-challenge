import React, { useContext } from "react";
import ArrowTool from "./ArrowTool";
import ZoomTool from "./ZoomTool";
import { MyContext } from "../../context/AppContext";
import ActionButtons from "./ActionButtons";



const Tools = () => {

    const { activatedTools } = useContext(MyContext)

    const handleToolClick = (event, name = '') => {
        if(event.target.alt !== undefined)
            console.log(`${event.target.alt} ha sido clickquedo`);
        if(name !== '')
            console.log(`${name} ha sido clickquedo`);
    };

    return (
        <>
        {activatedTools && (
            <ActionButtons handleToolClick={handleToolClick}/>
        )}
        <ZoomTool handleToolClick={handleToolClick}/>
        <ArrowTool handleToolClick={handleToolClick}/>
        </>
    );
};

export default Tools;
