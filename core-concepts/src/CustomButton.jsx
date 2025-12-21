export const CustomButton = () => {
    const handleClick = (e) =>{
        console.log("Clicked element", e.target)
        console.log("Click coordinates", e.clientX, e.ClientY);
        console.log("Which mouse button?", e.button);

        alert("Thanks For Liking!")
    }

    return <button onClick={handleClick}>Like</button>
};