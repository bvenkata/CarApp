import React, {useEffect, useState} from 'react';
import ComparisonTable from './ComparisonTable';

let carList = [
    {
        brand_name: "Lamborghini",
        car_name: "Venom GT"
    },
    {
        brand_name: "audi",
        car_name: "A7"
    },
    {
        brand_name: "Bugatti",
        car_name: "Veyron"
    },
    {
        brand_name: "ford",
        car_name: "Mustang"
    }
]

const CarComparison = () => {
    const [comparisonList, setcomparisonList] = useState([])
    const [carSearchList, setcarSearchList] = useState([])
    const addCarToCompare = (e, data) => {
        carList.filter(model => model.car_name == data.value).map((model) => {
            comparisonList.push(model);
            setcomparisonList(comparisonList);
        })
        let newCarSearchList = carSearchList.filter((model) => model.key !== data.value);
        setcarSearchList(newCarSearchList)
    }
    console.log(comparisonList);

    const removeCarFromCompare = (car_name) => {
        let newComparisonList = comparisonList.filter((model) => model.car_name !== car_name);
        carSearchList.push({ key: car_name, text: car_name, value: car_name })
        setcarSearchList(carSearchList)
        setcomparisonList(newComparisonList);
    }
    
    useEffect(() => {
        let newCarSearchList = []
        carList.map((model) => 
            newCarSearchList.push({ key: model.car_name, text: model.car_name, value: model.car_name })
        )
        setcarSearchList(newCarSearchList)
    }, [])

    return (
        <React.Fragment>
            <ComparisonTable 
                comparisonList={comparisonList} 
                carSearchList={carSearchList}
                addCarToCompare={addCarToCompare}
                removeCarFromCompare={removeCarFromCompare}
            />
        </React.Fragment>
    )
}

export default CarComparison
