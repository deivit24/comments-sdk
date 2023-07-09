import {CommentSectionProps} from "./comment-section-interfaces.tsx";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CommentSection = (props: CommentSectionProps) => {
    const {anchor, open, onClose,width,backgroundColor, page,apiKey} = props
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

export default CommentSection

