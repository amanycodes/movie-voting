import { Dialog, DialogContentText, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from "@mui/system";

const Popup=(props)=>{
    function handleClose(){
        props.openState(false)
        console.log(props.open)
    }
    return(
        <Dialog
        open={props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
            opacity: '0.9'
        }}
        PaperProps={{
            style: {
                borderRadius: '20px'
            }
        }}>
            <ClearIcon
                sx={{
                    color: 'white',
                    position: 'absolute',
                    fontSize: 35,
                    marginLeft: 38,
                    top: 6
                }}
                onClick={handleClose}>
            </ClearIcon> 
            <DialogContentText 
            sx={{
                background: 'rgba(37, 37, 37, 0.9)',
                width: '350px',
                height: '250px',
            }}
            > 
                <Typography sx={{
                    color: 'white',
                    fontFamily: 'League Spartan',
                    fontSize: '1.4rem',
                    padding: 6,
                    fontWeight: 300,
                    marginTop: 6,
                    textAlign: "center",
                    cursor: 'pointer'
                }}>{props.message}
                </Typography>
            </DialogContentText>
        </Dialog>
    )
}

export default Popup