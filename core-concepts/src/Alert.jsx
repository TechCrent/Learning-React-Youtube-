export const Alert = ({children, type="success"}) => {
    return (
    <div 
    style={{
        backgroundColor:type === "success" ? "green" : "red",
        color: "black",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "16px",
    }}>
        {children}
    </div>
    );
};