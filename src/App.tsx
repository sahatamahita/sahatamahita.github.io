import React, {useEffect, useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import Datepicker = M.Datepicker;

function App() {

    // State to store the selected date
    const [selectedDate, setSelectedDate] = useState<string>("");

    useEffect(() => {console.log({selectedDate})}, [selectedDate])


    useEffect(() => {


        function handleDateChange (this: M.Datepicker, date: Date)  {
            setSelectedDate(date.toDateString());
        };

        const datepickerElems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(datepickerElems, {
            onSelect: handleDateChange, // Call the handleDateChange function when a date is selected
            format: 'yyyy-mm-dd', // Set the date format as needed
            autoClose: true, // Automatically close the date picker after selection
        });

        // Initialize Autocomplete
        const autocompleteElems = document.querySelectorAll('.autocomplete');
        M.Autocomplete.init(autocompleteElems, {
            data: {
                Apple: null,
                Microsoft: null,
                Google: null,
            },
        });
    }, []);

  return (
    <div className="App">
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">Logo</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    {/* ... other Material Design components */}
                </ul>
            </div>
        </nav>

        <div>
            <input
                type="text"
                id="datepicker"
                className="datepicker"
                value={selectedDate}
            />
        </div>

        <div className="container">
            <h3>Autocomplete Example</h3>
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input type="text" id="autocomplete-input" className="autocomplete" />
                        <label htmlFor="autocomplete-input">Enter a company name</label>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <form action="#">
                <p>
                    <label>
                        <input type="checkbox"/>
                        <span>Red</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" checked={true}/>
                        <span>Yellow</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" className="filled-in" checked={true}/>
                        <span>Filled in</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input id="indeterminate-checkbox" type="checkbox"/>
                        <span>Indeterminate Style</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" checked={true} disabled={true}/>
                        <span>Green</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" disabled={true}/>
                        <span>Brown</span>
                    </label>
                </p>
            </form>
        </div>

    </div>
  );
}

export default App;
