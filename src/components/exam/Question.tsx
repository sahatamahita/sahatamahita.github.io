import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {NullableNumber, QuestionType, SetAnswer} from "../../data/exam";
import {Card, CardContent, Checkbox, FormGroup} from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";

interface QuestionProps extends QuestionType {
    number_index: number,
    answers: NullableNumber[],
    setAnswer: SetAnswer,
}

const Question: React.FC<QuestionProps> = ({
                                               question,
                                               answer_options,
                                               number_index,
                                               setAnswer,
                                               answers
                                           }: QuestionProps) => {
    return (
        <>
            <Card sx={{minWidth: 275}} variant="elevation" elevation={0}>
                <CardContent>
                    <Typography variant="h6" component="div" sx={{mb: 1.0, flexGrow: 1, textAlign: "center"}}>
                        No. {number_index + 1}
                    </Typography>
                    <Typography variant="subtitle1" color="text.primary" sx={{mb: 3.0}}>
                        {question}
                    </Typography>


                    <FormGroup>
                        {answer_options.map((a, k) =>
                            <FormControlLabel
                                key={k}
                                control={
                                    <Checkbox
                                        onChange={(e) => { setAnswer(number_index, e.target.checked ? k : null)} }
                                        checked={k === answers[number_index]}
                                        sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                                    />
                                }
                                label={a}
                                sx={{color: "text.secondary",}}
                            />
                        )}
                    </FormGroup>

                </CardContent>
            </Card>
        </>
    );
}

export default Question;
