import React, {useEffect, useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import Datepicker = M.Datepicker;
import IntroPage from "./components/intro/IntroPage";
import ExamPage from "./components/exam/ExamPage";

function App() {

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
        <div className="App">
            {/*<IntroPage></IntroPage>*/}
            <ExamPage></ExamPage>
        </div>
    );
}

export default App;
