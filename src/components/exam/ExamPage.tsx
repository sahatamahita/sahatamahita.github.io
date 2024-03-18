import React, {useEffect, useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
    Avatar,
    BottomNavigation,
    Grid, MobileStepper,
    Paper,
    useTheme
} from "@mui/material";
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {
    KeyboardArrowLeft,
    KeyboardArrowRight,
    ListAltRounded, TimerRounded,
    UploadRounded
} from "@mui/icons-material";
import {isFilledAnswer, NullableNumber, QuestionType, SetAnswer} from "../../data/exam";
import Question from "./Question";
import TotalModal from "./TotalModal";
import BasicModal from "../BasicModal";
import {getCurrentTimestamp, secondsToHourFormat} from "../../utils/date";
import {red} from "@mui/material/colors";
import ExamResult from "./ExamResult";


type ExamPageProps = {
    duration: number,
    questions: QuestionType[],

    thresholdAlertTimer?: number,
}

const ExamPage: React.FC<ExamPageProps> = ({
                                               duration,
                                               questions,
                                               thresholdAlertTimer = 60,
                                           }: ExamPageProps) => {


    const theme = useTheme();
    const [value, setValue] = React.useState('recents');

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<NullableNumber[]>([]);
    const [isOpenModalTotal, setIsOpenModalTotal] = React.useState<boolean>(false);
    const [isOpenAlertModal, setIsOpenAlertModal] = React.useState<boolean>(false);
    const [alert, setAlert] = React.useState<{ title?: string, description?: string }>({});
    const [endTimestamp,] = React.useState<number>(() => {
        return getCurrentTimestamp() + duration;
    });
    const [currentTimestamp, setCurrentTimestamp] = React.useState<number>(() => {
        return getCurrentTimestamp();
    });
    const [isSend, setIsSend] = React.useState<boolean>(false);


    useEffect(() => {
        setInterval(() => {
            setCurrentTimestamp(getCurrentTimestamp());
        }, 1000);
    }, []);

    const handleCursor = (index: number) => {
        if (index >= 0 && index < questions.length) {
            setCurrentQuestionIndex(index);
        }
    }

    const setAnswer: SetAnswer = (index, answer_index) => {
        setAnswers((prevState) => {
            const newState = [...prevState];
            newState[index] = answer_index;
            return newState;
        })
    }


    const filledAnswersLength = answers.filter(v => isFilledAnswer(v)).length;
    const isAnswerCompleted = answers.filter(v => isFilledAnswer(v)).length === questions.length;

    return (
        <>
            {!isSend && <>
                <Box sx={{flexGrow: 1}}>
                    <MobileStepper
                        variant="progress"
                        steps={questions.length}
                        position="static"
                        activeStep={filledAnswersLength - 1}
                        nextButton={
                            <Button
                                size="small"
                                onClick={() => handleCursor(currentQuestionIndex + 1)}
                                disabled={currentQuestionIndex + 1 === questions.length}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft/>
                                ) : (
                                    <KeyboardArrowRight/>
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small"
                                    disabled={currentQuestionIndex === 0}
                                    onClick={() => handleCursor(currentQuestionIndex - 1)}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight/>
                                ) : (
                                    <KeyboardArrowLeft/>
                                )}
                                Back
                            </Button>
                        }
                    />
                </Box>

                <Grid container spacing={2}>
                    {[questions[currentQuestionIndex]].map((q, k) => <Grid item xs={12} key={k}>
                        <Question {...{
                            ...questions[currentQuestionIndex],
                            number_index: currentQuestionIndex,
                            setAnswer,
                            answers: answers
                        }} ></Question>
                    </Grid>)}
                </Grid>


                <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label={`Total ${filledAnswersLength}/${questions.length}`}
                                                icon={<ListAltRounded/>}
                                                onClick={() => setIsOpenModalTotal(true)}/>
                        <BottomNavigationAction
                            label={secondsToHourFormat(endTimestamp - currentTimestamp)}
                            icon={<TimerRounded/>}
                            sx={endTimestamp - currentTimestamp <= thresholdAlertTimer ? {bgcolor: red[500]} : {}}
                            onClick={() => {
                                setAlert({
                                    title: 'Batas waktu ujian',
                                    description: endTimestamp > currentTimestamp ? `Silakan kirim jawabanmu sebelum waktu habis. ${secondsToHourFormat(endTimestamp - currentTimestamp)}` : 'Waktu sudah habis.'
                                });
                                setIsOpenAlertModal(true);
                            }}
                        />

                        <BottomNavigationAction
                            sx={isAnswerCompleted ? {opacity: 1} : {opacity: 0.5}}
                            label="Kirim" icon={<UploadRounded/>}
                            onClick={() => {
                                if (!isAnswerCompleted) {
                                    setAlert({title: 'Gagal kirim', description: 'Jawabanmu belum lengkap.'});
                                    setIsOpenAlertModal(true);
                                    return
                                }
                                setIsSend(true);
                            }}
                        />
                    </BottomNavigation>
                </Paper>


                <TotalModal {...{
                    questions,
                    answers,
                    open: isOpenModalTotal,
                    setOpen: setIsOpenModalTotal,
                    setCurrentQuestion: setCurrentQuestionIndex
                }}></TotalModal>

                <BasicModal
                    title={alert.title || ''}
                    description={alert.description || ''}
                    setOpen={setIsOpenAlertModal}
                    open={isOpenAlertModal}
                ></BasicModal>
            </>}


            {isSend && <ExamResult  {...{
                questions,
                answers,
            }}></ExamResult>}
        </>
    );

}

export default ExamPage;
