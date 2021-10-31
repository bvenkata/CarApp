import React, {useEffect, useState} from 'react';
import { Dropdown, Table, Button, Icon } from 'semantic-ui-react';

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
        <div>
            {comparisonList.length>0 ? 
                <Table celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center' colSpan={comparisonList.length+1}>
                                <Dropdown
                                    button
                                    className='icon'
                                    floating
                                    labeled
                                    fluid
                                    icon='car'
                                    options={carSearchList}
                                    search
                                    disabled = {comparisonList.length==4}
                                    onChange={addCarToCompare}
                                    text={comparisonList.length==4 ? 'Only 4 cars can be compared': 'Add a car to compare'}
                                />
                            </Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center' rowSpan='2'>Label</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center' colSpan={comparisonList.length}>{comparisonList.length>1 ? comparisonList.map((model, i) => i<comparisonList.length-1 ? model.car_name + " VS " : model.car_name):"ADD 1 MORE CAR TO COMPARE"}</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            {comparisonList.map((model, i) =>
                                <Table.HeaderCell textAlign='center' key={i}>{model.car_name}
                                    <Button size="mini" icon onClick={() => removeCarFromCompare(model.car_name)} floated="right">
                                        <Icon name='delete' color="red"/>
                                    </Button>
                                </Table.HeaderCell>
                            )}
                        </Table.Row>
                    </Table.Header>
                
                    <Table.Body>
                        {Object.entries(comparisonList[0]).map( ([key, value]) => 
                            <Table.Row key={key}>
                                <Table.Cell textAlign="center">{key}</Table.Cell>
                                {comparisonList.map((model,j) => 
                                    <Table.Cell key={j} textAlign="center">{model[key]}</Table.Cell>
                                )}
                            </Table.Row>
                        )}
                    </Table.Body>
                </Table>
                : 
                <Table celled structured>
                <Table.Header>
                    <Table.Row>
                        <Dropdown
                            button
                            className='icon'
                            floating
                            labeled
                            fluid
                            icon='car'
                            options={carSearchList}
                            search
                            disabled = {comparisonList.length==4}
                            onChange={addCarToCompare}
                            text={comparisonList.length==4 ? 'Only 4 cars can be compared': 'Add a car to compare'}
                        />
                    </Table.Row>
                </Table.Header>
                </Table>
            }
        </div>
    )
}

export default CarComparison
