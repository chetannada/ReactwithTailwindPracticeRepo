// React Lists
// Lists of React components can be output using the .map() function.

// .map() allows us to loop over arrays of data and output JSX.
import User from "./User";
function App(){
    const person = ["Chetan", "Ujesh", "Nimisha", "Jeny", "Nilam"];
    return(
        <>
            {person.map((person) => (
                <User key={person} name={person}/>
            ))}
        </>
    )
}
export default App;