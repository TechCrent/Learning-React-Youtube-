import { ActionButton } from "./ActionButton"

export const NewsLetter = () => {

    const handleSubscribe = () => {
        console.log("clicked")
        alert("Thank you for subscribing");
    };

    return (
        <div>
            <h2>Subscribe to Newsletter</h2>
            <ActionButton text="Subscribe" onClick={handleSubscribe} />
        </div>
    )
}