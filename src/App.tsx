import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import ExamPage from "./components/exam/ExamPage";
import './App.scss';

function App() {
    return (
        <div className="App">
            {/*<IntroPage></IntroPage>*/}
            <ExamPage></ExamPage>
        </div>
    );
}

export default App;
