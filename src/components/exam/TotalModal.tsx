import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {
    Avatar,
    Dialog, DialogTitle,
    List, ListItem, ListItemAvatar, ListItemButton, ListItemText, ListSubheader, Tab, Tabs,
} from "@mui/material";
import {isFilledAnswer, NullableNumber, QuestionType} from "../../data/exam";
import {green} from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {ellipsis} from "../../utils/string";

interface TotalModalProps {
    questions: QuestionType[],
    answers: NullableNumber[],

    open: boolean,

    setOpen: React.Dispatch<boolean>,

    setCurrentQuestion: React.Dispatch<number>,
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TotalModal: React.FC<TotalModalProps> = ({
                                                   questions,
                                                   answers,
                                                   open,
                                                   setOpen,
                                                   setCurrentQuestion,
                                               }: TotalModalProps) => {

    const handleClose = () => {
        setOpen(false);
    };

    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            {/*<DialogTitle>Silakan Pilih Soal : </DialogTitle>*/}
            <QuestionItem {...{
                questions,
                answers,
                setCurrentQuestion,
                handleClose,
            }}></QuestionItem>
            {/*<Box sx={{width: '100%'}}>*/}
            {/*    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>*/}
            {/*        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">*/}
            {/*            <Tab label="Semua" {...a11yProps(0)} />*/}
            {/*            /!*<Tab label="Sudah dijawab" {...a11yProps(1)} />*!/*/}
            {/*            /!*<Tab label="Belum dijawab" {...a11yProps(2)} />*!/*/}
            {/*        </Tabs>*/}
            {/*    </Box>*/}
            {/*    <CustomTabPanel value={value} index={0}>*/}
            {/*        <QuestionItem {...{*/}
            {/*            questions,*/}
            {/*            answers,*/}
            {/*            setCurrentQuestion,*/}
            {/*            handleClose,*/}
            {/*        }}></QuestionItem>*/}
            {/*    </CustomTabPanel>*/}
            {/*    <CustomTabPanel value={value} index={1}>*/}
            {/*        <QuestionItem {...{*/}
            {/*            questions: questions.filter((v, k) => isFilledAnswer(answers[k])),*/}
            {/*            answers,*/}
            {/*            setCurrentQuestion,*/}
            {/*            handleClose,*/}
            {/*        }}></QuestionItem>*/}
            {/*    </CustomTabPanel>*/}
            {/*    <CustomTabPanel value={value} index={2}>*/}
            {/*        <QuestionItem {...{*/}
            {/*            questions: questions.filter((v, k) => !isFilledAnswer(answers[k])),*/}
            {/*            answers,*/}
            {/*            setCurrentQuestion,*/}
            {/*            handleClose,*/}
            {/*        }}></QuestionItem>*/}
            {/*    </CustomTabPanel>*/}
            {/*</Box>*/}
        </Dialog>
    );
}

type ListType = {
    questions: QuestionType[],
    answers: NullableNumber[],

    setCurrentQuestion: React.Dispatch<number>,
    handleClose: () => void,
}

const QuestionItem: React.FC<ListType> = ({
                                      questions,
                                      answers,
                                      setCurrentQuestion,
                                      handleClose,
                                  }: ListType) => {
    return (
        <>
            <List
                sx={{pt: 2, bgcolor: 'background.paper'}}
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Silakan pilih soal :
                    </ListSubheader>
                }
            >
                {questions.map((v, k) => <ListItem disableGutters key={k}>
                    <ListItemButton
                        autoFocus
                        onClick={() => {
                            setCurrentQuestion(k);
                            handleClose();
                        }}
                    >
                        <ListItemAvatar>
                            <Avatar sx={isFilledAnswer(answers[k]) ? {bgcolor: green[500]} : {}}>
                                {k + 1}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={`${ellipsis(v.question, 40)}`}/>
                    </ListItemButton>
                </ListItem>)}
            </List>
        </>
    )
}


export default TotalModal;
