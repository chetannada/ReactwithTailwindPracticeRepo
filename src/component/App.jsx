// React Conditionals
// React components and elements can be conditionally displayed.

// To use the ternary operator, wrap the entire conditional in curly braces.

import User from "./User";
import Home from "../Home";

function App(){
    const isTrue = true;
    return(
        <>
        {isTrue ? <User></User> : <Home></Home>}
        </>
    )
}
export default App;