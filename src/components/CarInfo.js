import React from 'react'

function CarInfo(props) {
    return (
        <div>
            <p>Model - {props.carName}</p><br/>
            <p>Variant - {props.carVariant}</p><br/>
            <p>Color - {props.carColor}</p><br/>
            <p>Variant price - {props.variantPrice}</p><br/>
            <p>Color Price - {props.colorPrice}</p><br/>
            <p>Total Price - {props.variantPrice + props.colorPrice}</p><br/>
        </div>
    )
}

export default CarInfo