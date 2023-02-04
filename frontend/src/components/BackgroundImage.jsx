import { Box } from "@mui/system"
import back from '../assets/background.png'

 const BackgroundImage = ()=> {
    return(
        <Box component= "img"
        sx={{
            width: '100vw',
            height: '100%',
          position: 'absolute',
          zIndex: -1
        }}
        src={back}
        />
    )
 }

 export default BackgroundImage