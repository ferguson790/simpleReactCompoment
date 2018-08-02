import React,{Component} from 'react';
import './css/checkbox.css'
import checkBG from './source/hook.svg';
class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {checked: props.checked == true}
    }

    render() {
        let buttonStyle = {};
        if(this.state.checked) {
            buttonStyle = {"backgroundImage":"url("+checkBG+")"};
        }
        return (<div className="checkbox" style={this.props.style} onClick={this.handleClick.bind(this)}>
            <div className="checkboxButton" style={buttonStyle}></div>
            <div className="checkboxText">{this.props.text}</div>
        </div>);
    }

    handleClick() {
        this.setState({checked:!this.state.checked});
        if(typeof this.props.onchange == "function") {
            this.props.onchange(!this.state.checked, this);
        }
    }
}

export default CheckBox;