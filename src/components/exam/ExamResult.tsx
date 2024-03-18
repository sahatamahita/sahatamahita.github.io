import React, {useEffect, useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {dataQuestions, isFilledAnswer, NullableNumber, QuestionType} from "../../data/exam";
import {
    Avatar,
    Card,
    Chip, Collapse,
    Container,
    Divider,
    Grid, List,
    ListItem,
    ListItemAvatar,
    ListItemButton, ListItemIcon, ListItemText, ListSubheader,
    Stack
} from "@mui/material";
import {ellipsis, stringAvatar} from "../../utils/string";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import {green, grey, red} from "@mui/material/colors";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {Drafts, ExpandLess, ExpandMore, Inbox, Send, StarBorder} from "@mui/icons-material";


type ExamResultProps = {
    questions: QuestionType[],
    answers: NullableNumber[],
}

const ExamResult: React.FC<ExamResultProps> = ({
                                                   questions,
                                                   answers,
                                               }: ExamResultProps) => {


    const [isQuestionOpened, setIsQuestionOpened] = useState<boolean[]>(() => {
        return questions.map((v, k) => false);
    });

    const openQuestion = (k: number) => {
        setIsQuestionOpened((prevState) => {
            const newState = [...prevState];
            const valueBefore = newState[k];
            newState[k] = !valueBefore;
            return newState;
        })
    }


    const rightAnswers = answers.filter((v, k) => v === questions[k].answer_key_index)

    return (
        <>

            <List
                sx={{pt: 2, bgcolor: 'background.paper'}}
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Soal dan Jawaban
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar {...stringAvatar('Anggraeni')} />
                    </ListItemAvatar>
                    <ListItemText  primary={`Nilai ${rightAnswers.length / questions.length * 100}/100`}/>
                    <ListItemText  sx={ {color: green[500] } } primary={`Total Benar ${rightAnswers.length}`}/>
                    <ListItemText  sx={ {color: red[500] } } primary={`Total Salah ${questions.length - rightAnswers.length}`}/>
                </ListItemButton>
                {questions.map((v, k) => <>
                        <ListItemButton
                            sx={{pt: 1}}
                            onClick={() => {
                                openQuestion(k)
                            }}
                        >
                            <ListItemIcon>
                                {answers[k] === questions[k].answer_key_index ? <CheckIcon sx={{color: green[500]}}/> :
                                    <ClearIcon sx={{color: red[500]}}/>}
                            </ListItemIcon>
                            <ListItemText
                                primary={`${k + 1}. ${isQuestionOpened[k] ? v.question : ellipsis(v.question, 40)}`}/>
                            {isQuestionOpened[k] ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>
                        <Collapse in={isQuestionOpened[k]} timeout="auto" unmountOnExit>
                            <AnswerOptions {...{question: v, answer: answers[k]}}></AnswerOptions>
                        </Collapse>
                        <Divider variant="inset" component="li"/>
                    </>
                )}
            </List>
        </>
    );
}


type AnswerOptionsProps = {
    question: QuestionType,
    answer: NullableNumber,
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({
                                                         question,
                                                         answer,
                                                     }: AnswerOptionsProps) => {
    return (
        <List component="div" disablePadding>
            {question.answer_options.map((a, k) =>
                <ListItem alignItems="flex-start">
                    <ListItemIcon>
                    </ListItemIcon>
                    {k === question.answer_key_index &&
                        <ListItemText primary={`${a}`} sx={{bgcolor: green[500], opacity: 1,}}/>}
                    {answer !== k && k !== question.answer_key_index &&
                        <ListItemText primary={`${a}`} sx={{bgcolor: grey[500], opacity: 0.6,}}/>}
                    {answer === k && k !== question.answer_key_index &&
                        <ListItemText primary={`${a}`} sx={{bgcolor: red[500], opacity: 1,}}/>}
                </ListItem>)}
        </List>
    )
}

export default ExamResult;
