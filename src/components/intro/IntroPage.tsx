import React, {useEffect, useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';


function Intro() {

    // State to store the selected date
    const [selectedDate, setSelectedDate] = useState<string>("");

    useEffect(() => {
        console.log({selectedDate})
    }, [selectedDate])


    useEffect(() => {


        function handleDateChange(this: M.Datepicker, date: Date) {
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
        <div>
            <div className="valign-wrapper container">
                <div className="col s12 m8 offset-m2 l6 offset-l3">
                    <div className="card-panel grey lighten-5 z-depth-1">
                        <div className="row valign-wrapper">
                            <div className="col s2">
                                <img src="https://materializecss.com/images/yuna.jpg" alt=""
                                     className="circle responsive-img"/>
                            </div>
                            <div className="col s10">
              <span className="black-text">
                This is a square image. Add the "circle" class to it to make it appear circular.
              </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Intro;
