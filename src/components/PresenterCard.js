import React,{useState} from 'react'
import { useContext } from 'react'
import MyContext from '../context/context'

const PresenterCard = ({title,primaryIcon,secondaryIcon,url,desc,isActive,externalUrl,width,height}) => {

  const {uiTheme} = useContext(MyContext);
        // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

  // Handlers for hover events
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  
  return (
    <div className='presenter-card' 
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleMouseEnter}
    style={{backgroundColor: isHovered ? uiTheme : '#f1f1f1'}} 
    >

        <div className='icon-img' style={{backgroundColor:isHovered ? 'white':uiTheme,width:'40px',height:'40px'}} >
            <img src={isHovered ? secondaryIcon:primaryIcon}
            width={width ? width :'35px'} 
            height={height ? height:'35px'}
            />
        </div>

        <p className='title my-2'
        style={{color:isHovered ? 'white' :uiTheme}}>
            {title}
            </p>
        <p className='desc'
        style={{color:isHovered ? 'white' :uiTheme}}>
            {desc}
            </p>

        <a className='link my-2' style={{color:isHovered ? 'white' :uiTheme}}
         href={externalUrl?externalUrl:"#"}>Learn more <i class="fas fa-external-link-alt"></i> </a>




        
    </div>
  )
}

export default PresenterCard