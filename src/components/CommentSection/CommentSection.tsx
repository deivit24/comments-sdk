import React from 'react'
import {CommentSectionProps} from "./CommentSectionInterfaces"
import {Drawer, Box} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const CommentSection: React.FC<CommentSectionProps> = ({
    apiKey,
    page,
    width = 250,
    anchor,
    open,
    onClose,
    backgroundColor='inherit'}) => {
    return  <>
    <Drawer
        anchor={anchor}
        open={open}
        onClose={onClose}
        >
        <Box
            sx={{width, backgroundColor, height: '100%'}}
            role="presentation"
            >
            <IconButton aria-label="delete" onClick={onClose} style={{ position: 'absolute', right: "10px"}}>
                <CloseIcon />
            </IconButton>
            <p>Hello world</p>
            <h3>{page}</h3>
            <h5>{apiKey}</h5>
        </Box>
    </Drawer>
    </>
}

