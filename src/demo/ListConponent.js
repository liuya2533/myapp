import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types'
class ListConponent extends React.Component{

    constructor(props){
        super(props);

    }
   
    render(){
        const {array} = this.props;
        return(
            <div>
                <ul>
                   {
                     array.map((item,index) => {return <li key={index}>{item}</li>})
                   }
                </ul>
            </div>
        )
    }
}
ListConponent.propTypes={
        array:propTypes.array.isRequired
}
export default ListConponent;