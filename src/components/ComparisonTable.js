import React from 'react'
import { Dropdown, Table, Button, Icon } from 'semantic-ui-react';

function ComparisonTable(props) {
    return (
        <div>
            {props.comparisonList.length>0 ? 
                <Table celled structured>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center' colSpan={props.comparisonList.length+1}>
                                <Dropdown
                                    button
                                    className='icon'
                                    floating
                                    labeled
                                    fluid
                                    icon='car'
                                    options={props.carSearchList}
                                    search
                                    disabled = {props.comparisonList.length===4}
                                    onChange={props.addCarToCompare}
                                    text={props.comparisonList.length===4 ? 'Only 4 cars can be compared': 'Add a car to compare'}
                                />
                            </Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center' rowSpan='2'>Label</Table.HeaderCell>
                            <Table.HeaderCell textAlign='center' colSpan={props.comparisonList.length}>{props.comparisonList.length>1 ? props.comparisonList.map((model, i) => i<props.comparisonList.length-1 ? model.car_name + " VS " : model.car_name):"ADD 1 MORE CAR TO COMPARE"}</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            {props.comparisonList.map((model, i) =>
                                <Table.HeaderCell textAlign='center' key={i}>{model.car_name}
                                    <Button size="mini" icon onClick={() => props.removeCarFromCompare(model.car_name)} floated="right">
                                        <Icon name='delete' color="red"/>
                                    </Button>
                                </Table.HeaderCell>
                            )}
                        </Table.Row>
                    </Table.Header>
                
                    <Table.Body>
                        {Object.entries(props.comparisonList[0]).map( ([key, value]) => 
                            <Table.Row key={key}>
                                <Table.Cell textAlign="center">{key}</Table.Cell>
                                {props.comparisonList.map((model,j) => 
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
                            options={props.carSearchList}
                            search
                            disabled = {props.comparisonList.length===4}
                            onChange={props.addCarToCompare}
                            text={props.comparisonList.length===4 ? 'Only 4 cars can be compared': 'Add a car to compare'}
                        />
                    </Table.Row>
                </Table.Header>
                </Table>
            }
        </div>
    )
}

export default ComparisonTable
