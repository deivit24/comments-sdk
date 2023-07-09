import {CommentProps, CommentState} from "./interfaces.tsx";
import Button from '@mui/material/Button';
import "./comments.css"
import {useState} from "react";
import CommentSection from "./commen-section/CommentSection.tsx";
const Comment: React.FC<CommentProps> = ({message}) => {
    const [state, setState] = useState({
        drawer: false,
        anchor: 'right'
    })
    
    const openDrawer = () => {
        setState({...state, drawer: true})
    }
    return  <>
    <Button onClick={openDrawer} variant="contained">{message}</Button>
    <CommentSection
        apiKey='APSDSALJAELMKDSA'
        page="asdasd"
        width={500}
        backgroundColor='inherit'
        onClose={() => setState({...state, drawer: false})}
        anchor={state.anchor}
        open={state.drawer} />
    </>
}

export default Comment

