import React, {Component} from 'react'; 
import './weightButton.css'; 

export default class WeightButton extends Component {  
    

    render(){   
        const bweight = this.props.buttonWeight; 
        const onMouseDown = this.props.onMouseDown; 
        const weight = this.props.weight; 
    if(bweight === weight){
    return( 
    <a className={`button${bweight}alt`} href="#" >{bweight}</a>  
    ); 
    } else { 
       return <a className={`button${bweight}`} href="#" onMouseDown={() => {onMouseDown(bweight)}}>{bweight}</a>  
    }
    }

}