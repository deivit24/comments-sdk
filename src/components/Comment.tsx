import {CommentProps, CommentState} from "./interfaces.tsx";
import Button from '@mui/material/Button';
import "./comments.css"
import {useState} from "react";
const Comment = (props: CommentProps) => {
    const [state, setState] = useState<CommentState>({
        drawer: false,
    })
    
    const openDrawer = () => {
        setState({...state, drawer: true})
    }
    return <Button onClick={openDrawer} variant="contained">{props.message}</Button>
}

export default Comment

