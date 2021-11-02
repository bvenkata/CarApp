import React from 'react'

function CarVariant(props) {
    return (
        <div>
            <h3>SELECTED VARIANT - {props.carVariant}</h3> 
            {props.modelDetails.map((model, i) =>
            <div key= {i}>
                <input type="radio"        
                name='variantGroup'
                checked = {props.carVariant === model.variant_name}
                onChange={() => props.setcarVariant(model.variant_name)}
                />
                <label>{model.variant_name}</label>
                <br/>
            </div>
            )}
        </div>
    )
}

export default CarVariant
