import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.scss';
import ExamPage from "./components/exam/ExamPage";
import {dataQuestions} from "./data/exam";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import {Avatar} from "@mui/material";
import {stringAvatar} from "./utils/string";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExamResult from "./components/exam/ExamResult";

function App() {
    return (
        <div className="App">
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Ujian Biologi
                        </Typography>
                        <Avatar {...stringAvatar('Anggraeni')} />
                        {/*<Button color="inherit">Login</Button>*/}
                    </Toolbar>
                </AppBar>
            </Box>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ExamPage duration={60 * 10} questions={dataQuestions}></ExamPage>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
