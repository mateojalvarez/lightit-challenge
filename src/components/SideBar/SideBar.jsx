import {useEffect, useState, useContext} from 'react';
import ActiveBackgroundComponent from "./ActiveBackgroundComponent";
import SideBarOptionComponent from "./SideBarOptionComponent";
import CloseTag from "./CloseTag/CloseTag";
import CategoryContainer from "./Categories/CategoryContainer";
import {MyContext} from '../../context/AppContext';

const options = [
    {
        name: "aberturas",
        icon: "/img/icons/aberturas.png",
    },
    {
        name: "equipamiento",
        icon: "/img/icons/equipamiento.png",
    },
    {
        name: "terminaciones",
        icon: "/img/icons/terminaciones.png",
    },
];

const baseApiUrl =
    "https://us-central1-prueba-front-280718.cloudfunctions.net/";

const SideBar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [optionPosition, setOptionPosition] = useState(220);
    const [categorySelected, setCategorySelected] = useState("");
    const [categoryItems, setCategoryItems] = useState([]);
    const [loadingItems, setLoadingItems] = useState(true);
    const [showCategoryOptions, setShowCategoryOptions] = useState(true);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    const { activateTools, disableTools } = useContext(MyContext);

    useEffect(() => {
        const updateScreenHeight = () => {
            setScreenHeight(window.innerHeight);
        };

        window.addEventListener('resize', updateScreenHeight);
        return () => {
            window.removeEventListener('resize', updateScreenHeight);
        };
    }, []);

    useEffect(() => {
        if (sideBarOpen) {
            activateTools();
        } else {
            disableTools();
        }
    }, [sideBarOpen])

    const handleSelectOption = (event, optionName) => {
        setSideBarOpen(true);

        setShowCategoryOptions(true);

        const target = event.target;
        const { top } = target.getBoundingClientRect();
        setOptionPosition(top - 120);

        setCategorySelected(optionName);

        setLoadingItems(true);

        fetchCategory(optionName);
    };

    const handleSideBarOpen = () => {
        setSideBarOpen(!sideBarOpen);
    };

    const fetchCategory = (categorySelected) => {
        const apiUrl = baseApiUrl + categorySelected;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setCategoryItems(data))
            .catch((error) => console.error(error))
            .finally(() => setLoadingItems(false));
    };

    return (
        <div className="relative">
            <div className="sidebar-nav-bar"
                style={{
                    height: `${screenHeight - 96}px`
                }}
            >
                {options.map((option, index) => (
                    <SideBarOptionComponent
                        key={index}
                        name={option.name}
                        icon={option.icon}
                        handleSelectOption={handleSelectOption}
                    />
                ))}
                <div
                    className={`${!sideBarOpen ? "disabled" : ""
                        } active-option-background`}
                    style={{
                        transform: `translateY(${optionPosition}px)`,
                    }}
                >
                    <ActiveBackgroundComponent />
                </div>
            </div>
            <div className={`${!sideBarOpen ? "disabled" : ""} sidebar-active`}>
                <CategoryContainer
                    categoryName={categorySelected}
                    categoryOptions={categoryItems}
                    loading={loadingItems}
                    showOptions={showCategoryOptions}
                    setShowOptions={setShowCategoryOptions}
                />
                <div
                    className={`${!sideBarOpen ? "disabled" : ""} sidebar-close-tag`}
                    onClick={handleSideBarOpen}
                >
                    <CloseTag />
                </div>
            </div>
        </div>
    );
};

export default SideBar;
