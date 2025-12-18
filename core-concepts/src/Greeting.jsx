export const Greeting = ({name = "Guest", message = "hello"}) => {
    return (
        <h2>
            {message}, {name}
        </h2>
    )
}