import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Support_bg from '../../Assets/support_bg.png'
const Support = () => {
  return (
    <div className='Support'>
        <div className='hearticon'>
            <FavoriteIcon color='error'/>
        </div>
        <img src={Support_bg}/>
    </div>
  )
}

export default Support