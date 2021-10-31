import React, { useEffect, useState } from "react";
import car from "../../public/CarPictures/car.jpg";
import logo from "../../public/CarPictures/logo.png";
import { Table } from "semantic-ui-react";

let variants = [
  {
    variant_name: "S",
    variant_price: 150000,
    colors: [
      {
        color_name: "red",
        color_price: 1100,
      },
      {
        color_name: "white",
        color_price: 1400,
      },
    ],
    specs: [
      {
        feature: "Airbags",
        value: "2",
      },
      {
        feature: "Air Conditioner",
        value: "4",
      },
    ],
  },
  {
    variant_name: "SX",
    variant_price: 180000,
    colors: [
      {
        color_name: "red",
        color_price: 1300,
      },
      {
        color_name: "grey",
        color_price: 1700,
      },
      {
        color_name: "white",
        color_price: 1900,
      },
    ],
    specs: [
      {
        feature: "Airbags",
        value: "4",
      },
      {
        feature: "Air Conditioner",
        value: "6",
      },
    ],
  },
  {
    variant_name: "XX",
    variant_price: 200000,
    colors: [
      {
        color_name: "blue",
        color_price: 1500,
      },
      {
        color_name: "black",
        color_price: 1700,
      },
      {
        color_name: "orange",
        color_price: 2000,
      },
    ],
    specs: [
      {
        feature: "Airbags",
        value: "6",
      },
      {
        feature: "Air Conditioner",
        value: "8",
      },
    ],
  },
];

const CarDetails = () => {
  const [modelDetails, setmodelDetails] = useState([]);
  const [carVariant, setcarVariant] = useState("");
  const [carColor, setcarColor] = useState("");
  const [variantPrice, setvariantPrice] = useState(0);
  const [colorPrice, setcolorPrice] = useState(0);
  const [variantColors, setvariantColors] = useState([]);
  const [variantSpecs, setvariantSpecs] = useState([]);

  const assignVariantDetails = (model_details) => {
    const variant_found = false;
    const color_found = false;
    model_details
      .filter((variant) => variant.variant_name == carVariant)
      .map((variant) => {
        variant_found = true;
        setcarVariant(variant.variant_name);
        setvariantPrice(variant.variant_price);
        setvariantSpecs(variant.specs);
        setvariantColors(variant.colors);

        color_found = false;
        variant.colors
          .filter((color) => color.color_name == carColor)
          .map((color) => {
            setcarColor(color.color_name);
            setcolorPrice(color.color_price);
            color_found = true;
          });

        if (!color_found) {
          let color = variant.colors[0];
          setcarColor(color.color_name);
          setcolorPrice(color.color_price);
          color_found = true;
        }
      });
    if (!variant_found) {
      let variant = model_details[0];
      setcarVariant(variant.variant_name);
      setvariantPrice(variant.variant_price);
      setvariantSpecs(variant.specs);
      setvariantColors(variant.colors);
      setcarColor(variant.colors[0].color_name);
      setcolorPrice(variant.colors[0].color_price);
    }
  };

  useEffect(() => {
    const model_details = variants;
    setmodelDetails(model_details);
    assignVariantDetails(model_details);
  }, [carColor, carVariant]);

  return (
    <div>
      <img class="ui small circular image" src={logo} />
      <hr />
      <img src={car} height="900px" width="1400px" />
      <br />
      <p>Model - Camaro</p>
      <br />
      <p>Variant - {carVariant}</p>
      <br />
      <p>Color - {carColor}</p>
      <br />
      {/* <p>Specifications - {variantSpecs}</p><br/> */}
      <p>Variant price - {variantPrice}</p>
      <br />
      <p>Color Price - {colorPrice}</p>
      <br />
      <p>Total Price - {variantPrice + colorPrice}</p>
      <br />
      <hr />

      <h3>SELECTED VARIANT - {carVariant}</h3>
      {modelDetails.map((model, i) => (
        <div key={i}>
          <input
            type="radio"
            name="variantGroup"
            checked={carVariant === model.variant_name}
            onChange={() => setcarVariant(model.variant_name)}
          />
          <label>{model.variant_name}</label>
          <br />
        </div>
      ))}
      <hr />

      <h3>SELECTED COLOR - {carColor}</h3>
      {variantColors.map((colors, i) => (
        <div key={i}>
          <input
            type="radio"
            name="colorGroup"
            checked={carColor === colors.color_name}
            onChange={() => setcarColor(colors.color_name)}
          />
          <label>{colors.color_name}</label>
          <br />
        </div>
      ))}
      <hr />
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" rowSpan="2">
              Feature
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center" colSpan={modelDetails.length}>
              Variants
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            {modelDetails.map((model, i) => (
              <Table.HeaderCell textAlign="center" key={i}>
                {model.variant_name}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {variantSpecs.map((spec, i) => (
            <Table.Row key={i}>
              <Table.Cell>{spec.feature}</Table.Cell>
              {modelDetails.map((model, j) => (
                <Table.Cell
                  key={j}
                  textAlign="center"
                  style={{
                    backgroundColor:
                      model.variant_name === carVariant ? "green" : "white",
                    color:
                      carVariant === model.variant_name ? "white" : "black",
                    fontSize:
                      carVariant === model.variant_name ? "large" : "small",
                    fontWeight: "bold",
                  }}
                >
                  {model.specs
                    .filter((spec_info) => spec_info.feature == spec.feature)
                    .map((spec_info) => spec_info.value)}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CarDetails;
