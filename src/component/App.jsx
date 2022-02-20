// React Props
// React components can accept data passed to them called props.

// Props are passed from the parent component to a child component.

// Here we are passing a prop name from App to the User component.
import User from "./User";

function App(){
    return(
        <>
        <User name="Chetan Nada" age="32"></User>
        </>
    )
}
export default App;