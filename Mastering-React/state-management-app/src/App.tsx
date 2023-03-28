import {useState} from 'react';
import './App.css';

function App() {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="App">
            <h1>React Form</h1>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={person.firstName}
                    onChange={(e) => setPerson({...person, firstName: e.target.value})}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={person.lastName}
                    onChange={(e) => setPerson({...person, lastName: e.target.value})}
                />
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsLoading(true);
                        setTimeout(() => {
                            setIsLoading(false);
                        }, 1000);
                    }}
                >
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

export default App;
