import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Modal} from "@mui/material";

interface BasicModalProps {
    title: string,
    description: string,
    setOpen: React.Dispatch<boolean>,
    open: boolean,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BasicModal: React.FC<BasicModalProps> = ({
                                                   title,
                                                   description,
                                                   setOpen,
                                                   open,
                                               }: BasicModalProps) => {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    {description}
                </Typography>
            </Box>
        </Modal>
    );

}

export default BasicModal;
