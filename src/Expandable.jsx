import { useState } from "react"


export default function Expandable({ children }) {
    const [isOpen, setIsOpen] = useState(false)


    const toggleOpen = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen)
    };

    return (
        <div>
            {isOpen ? children : null}
            <button onClick={toggleOpen} type="submit">
            {isOpen ? "Hide" : "Show More"}
            </button>
        </div>
    )
}