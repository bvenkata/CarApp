import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router';
// import car from '../../public/CarPictures/car.jpg';
// import logo from '../../public/CarPictures/logo.png';
import CarColor from './CarColor';
import CarInfo from './CarInfo';
import CarSpecs from './CarSpecs';
import CarVariant from './CarVariant';

let variants = [
        {
            variant_name: "S",
            variant_price: 150000,
            colors:[ 
                {
                    color_name: "red",
                    color_price: 1100
                },
                {
                    color_name: "white",
                    color_price: 1400
                }
            ],
            specs: [
                {
                    feature: "Airbags",
                    value: "2"
                },
                {
                    feature: "Air Conditioner",
                    value: "4"
                }
            ]
        },
        {
            variant_name: "SX",
            variant_price: 180000,
            colors:[ 
                {
                    color_name: "red",
                    color_price: 1300
                },
                {
                    color_name: "grey",
                    color_price: 1700
                },
                {
                    color_name: "white",
                    color_price: 1900
                }
            ],
            specs: [
                {
                    feature: "Airbags",
                    value: "4"
                },
                {
                    feature: "Air Conditioner",
                    value: "6"
                }
            ]
        },
        {
            variant_name: "XX",
            variant_price: 200000,
            colors:[ 
                {
                    color_name: "blue",
                    color_price: 1500
                },
                {
                    color_name: "black",
                    color_price: 1700
                },
                {
                    color_name: "orange",
                    color_price: 2000
                }
            ],
            specs: [
                {
                    feature: "Airbags",
                    value: "6"
                },
                {
                    feature: "Air Conditioner",
                    value: "8"
                }
            ]
        }
    ];

const CarDetails = () => {
    const [modelDetails, setmodelDetails] = useState([])
    const [carVariant, setcarVariant] = useState("")
    const [carColor, setcarColor] = useState("")
    const [variantPrice, setvariantPrice] = useState(0)
    const [colorPrice, setcolorPrice] = useState(0)
    const [variantColors, setvariantColors] = useState([])
    const [variantSpecs, setvariantSpecs] = useState([])

    const setVariantDetails = (model_details) => {
        let variant_found = false
        model_details.filter(variant => variant.variant_name == carVariant).map((variant) => {
            variant_found = true
            setcarVariant(variant.variant_name);
            setvariantPrice(variant.variant_price);
            setvariantSpecs(variant.specs);
            setvariantColors(variant.colors);
            let color_found = false
            variant.colors.filter(color => color.color_name == carColor).map((color) => {
                    setcarColor(color.color_name)
                    setcolorPrice(color.color_price)
                    color_found = true
            })
            if (!color_found){
                let color = variant.colors[0]
                setcarColor(color.color_name)
                setcolorPrice(color.color_price)
                color_found = true
            }
        })
        if (!variant_found){
            let variant = model_details[0]
            setcarVariant(variant.variant_name);
            setvariantPrice(variant.variant_price);
            setvariantSpecs(variant.specs);
            setvariantColors(variant.colors);
            setcarColor(variant.colors[0].color_name);
            setcolorPrice(variant.colors[0].color_price);
        }
    }

    useEffect(() => {
        let model_details = variants
        setmodelDetails(model_details)
        setVariantDetails(model_details)
    }, [[carColor, carVariant]])

    return (
        <React.Fragment>
            <CarInfo 
                carName="Camaro"
                carVariant={carVariant}
                carColor={carColor}
                variantPrice={variantPrice}
                colorPrice={colorPrice}
            />
            <hr/>
 
            <CarVariant 
                carVariant={carVariant} 
                modelDetails={modelDetails} 
                setcarVariant={setcarVariant}
            />
            <hr/>

            <CarColor 
                carColor={carColor}
                variantColors={variantColors}
                setcarColor={setcarColor}
            />
            <hr/>

            <CarSpecs 
                modelDetails={modelDetails}
                variantSpecs={variantSpecs}
                carVariant={carVariant}
            />
        </React.Fragment>
    )
}

export default CarDetails

