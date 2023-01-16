import React from 'react';
class PersonCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            age :  this.props.age
        }
        // this.sumaruno = this.sumaruno.bind(this); de esta manera vinculamos para hacer el callback de la funcion en el evento sintetico onClick
    }
    //si queremos usar funciones regulares es necesario conectar el this en el constructor 
    /*sumaruno(){

    }*/
    aumentaredad = ()=>{
        this.setState({age: this.state.age+1},()=>console.log("Se aumento edad en uno"))
    }
    render(){
        const {firstName, lastName,hairColor}= this.props; //desestructuramos en variables 
        return(
            <div className='card text-bg-light mb-3'>
                <div className='card-header'>
                    <h2>{lastName}, {firstName}</h2>
                </div>
                <div className='card-body'>
                    <p>Edad : {this.state.age}</p>
                    <p>Color de pelo : {hairColor}</p>
                    <button type='button'className='btn btn-outline-info' onClick={this.aumentaredad}>Hoy es mi cumpleaños</button>
                </div>
            </div>
        )
    }
}
export default PersonCard;