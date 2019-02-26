import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {

    render() {

        const {nombreGasto,cantidadGasto}= this.props.gasto;
        return (
            <div>
                <li className="gastos">
                    <p>
                        {nombreGasto}
                        <span className="gasto">${cantidadGasto}</span>
                    </p>
                </li>
            </div>
        );
    }
}
Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
export default Gasto;