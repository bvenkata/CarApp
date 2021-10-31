import React from "react";
import { useState, useEffect } from "react";
import FilterCustom from "./Custom/FilterCustom";
import CardCustom from "./Custom/CardCustom";
import SortCustom from "./Custom/SortCustom";

const Brand = () => {
  const [filterList, setfilterList] = useState([]);
  const [caregoryFilter, setcaregoryFilter] = useState("");
  
  const carCategory = [];

  const brandCarList = [
    {
      key: 1,
      brandName: "Honda",
      photo: "city.jpeg",
      modelName: "City",
      modelPrice: 1300000,
      category: "Sedan",
    },
    {
      key: 2,
      brandName: "Honda",
      photo: "amaze.jpeg",
      modelName: "Amaze",
      modelPrice: 700000,
      category: "Sedan",
    },
    {
      key: 3,
      brandName: "Honda",
      photo: "civic.jpeg",
      modelName: "Civic",
      modelPrice: 2000000,
      category: "Sedan",
    },
    {
      key: 4,
      brandName: "Honda",
      photo: "crv.jpeg",
      modelName: "CR-V",
      modelPrice: 2500000,
      category: "SUV",
    },
    {
      key: 5,
      brandName: "Honda",
      photo: "city.jpeg",
      modelName: "XYZ",
      modelPrice: 2500000,
      category: "SUV",
    },
  ];

  const [sortCars, setcsortCars] = useState(brandCarList);


  const sortValue = (event) =>{

    let sortCars = [];

    if (event.target.value == "High to Low")
    {
      sortCars = brandCarList.sort((a,b) => b.modelPrice - a.modelPrice);
    }
    else
    {
      sortCars = brandCarList.sort((a,b) => a.modelPrice - b.modelPrice);
    }
    setcsortCars(sortCars);

  }

  useEffect(() => {
    filterValue();
  }, [filterList]);

  const filterValue = () => {
    if (carCategory.length == 0) {
      brandCarList.map((car) => {
        if (carCategory.indexOf(car.category) < 0)
          carCategory.push(car.category);
      });
      setfilterList(carCategory);
    }
  };

  return (
    <React.Fragment>
      <FilterCustom
        filterValue={filterList}
        caregoryFilter={caregoryFilter}
        setcaregoryFilter={setcaregoryFilter}
      />
      <SortCustom        
        sortValue={sortValue}
      />
      <div className="ui four column grid">
        {caregoryFilter == "" && sortCars
          .map((card) => (
            <CardCustom card={card} />
          ))}
        {caregoryFilter != "" && sortCars
          .filter((card) => card.category == caregoryFilter)
          .map((card) => (
            <CardCustom card={card} />
          ))}
      </div>
    </React.Fragment>
  );
};

export default Brand;
