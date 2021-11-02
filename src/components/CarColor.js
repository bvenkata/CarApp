import React from 'react'

function CarColor(props) {
    return (
        <div>
            <h3>SELECTED COLOR - {props.carColor}</h3> 
            {props.variantColors.map((colors, i) => 
            <div key= {i}>
                <input type="radio" 
                name='colorGroup'
                checked = {props.carColor === colors.color_name}
                onChange={() => props.setcarColor(colors.color_name)}
                />
                <label>{colors.color_name}</label>
                <br/>
            </div>
            )}
        </div>
    )
}

export default CarColor
