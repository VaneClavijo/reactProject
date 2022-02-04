
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import NotFound from '../../assets/notfound.json'

class UserAnimation extends Component {

    render(){
        const defaultOptions = {
            loop: true,
          autoplay: true, 
          animationData: NotFound,
        }

        return (
            <Lottie options={defaultOptions} height={500}
            width={500} />
        )
    
    };
}

export default UserAnimation ;