import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

function App() {
    useEffect(() => {
        // Initialize Materialize components
        M.AutoInit();

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
            <input type="text" className="datepicker"></input>
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
