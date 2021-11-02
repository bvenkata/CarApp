import React from 'react'
import { Table } from 'semantic-ui-react';

function CarSpecs(props) {
    return (
        <div>
            <Table celled structured>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign='center' rowSpan='2'>Feature</Table.HeaderCell>
                        <Table.HeaderCell textAlign='center' colSpan={props.modelDetails.length}>Variants</Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        {props.modelDetails.map((model, i) =>
                            <Table.HeaderCell textAlign='center' key={i}>{model.variant_name}</Table.HeaderCell>
                        )}
                    </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    {props.variantSpecs.map((spec, i) =>
                        <Table.Row key={i}>
                            <Table.Cell>{spec.feature}</Table.Cell>
                            {props.modelDetails.map((model,j) => 
                                <Table.Cell key={j} textAlign='center' style={{backgroundColor: (props.carVariant === model.variant_name) ? "green" : "white", color: (props.carVariant === model.variant_name) ? "white" : "black", fontSize: (props.carVariant === model.variant_name) ? "large" : "small", fontWeight: "bold"}} >{model.specs.filter(spec_info => spec_info.feature == spec.feature).map((spec_info) => spec_info.value)}</Table.Cell>
                            )}
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>
    )
}

export default CarSpecs
