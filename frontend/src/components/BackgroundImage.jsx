import { Box } from "@mui/system"
import back from '../assets/background.png'
import movieBack from '../assets/john wick bg.png'

 const BackgroundImage = ()=> {
    return(
        <Box component= "img"
        sx={{
            width: '100%',
            height: '100vh',
          position: 'absolute',
          zIndex: -1,
          objectFit: 'cover'
        }}
        src={true ? back : movieBack}
        />
    )
 }

 export default BackgroundImage