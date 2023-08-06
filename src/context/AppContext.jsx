import React, { createContext, useState } from "react";

export const MyContext = createContext();

const AppContext = ({ children }) => {
    const [activatedTools, setActivatedTools] = useState(false);

    const handleActivateTools = () => {
        setActivatedTools(true);
    };

    const handleDisableTools = () => {
        setActivatedTools(false);
    };

    return (
        <MyContext.Provider
            value={{
                activateTools: handleActivateTools,
                disableTools: handleDisableTools,
                activatedTools,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

export default AppContext;
