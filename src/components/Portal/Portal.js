import React from "react";
// import { useEffect } from "react";
import ReactDOM from "react-dom";

class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.modal = document.getElementById("modal");
    }
    // componentDidMount() {
    // document.body.style.overflow = 'hidden';
    // }

    // componentWillUnmount() {
    // document.body.style.overflow = "";
    // }

    render() {
        return ReactDOM.createPortal(
            this.props.children, this.modal
        )
    }
}





// const Portal = (props) =>{
//      useEffect(()=> {
//         const modal = document.getElementById("modal");

//         console.log(modal);
//     }, []);

//     return ReactDOM.createPortal(
//         props.children, document.body
//     )
// }

export default Portal;