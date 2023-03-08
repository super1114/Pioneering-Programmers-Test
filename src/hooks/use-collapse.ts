import { useState } from "react"

export const useCollapse = () => {
    const [collapse, setCollapse] = useState(localStorage.getItem("PIONEERING_COLLAPSED"));

    function isCollapsed() {
        return collapse === "TRUE";
    }

    function switchCollapse() {
        let res = "";
        if (isCollapsed())
            res = "FALSE";
        else
            res = "TRUE";
        setCollapse(res);
        localStorage.setItem("PIONEERING_COLLAPSED", res);
    }

    return {switchCollapse, isCollapsed};
}