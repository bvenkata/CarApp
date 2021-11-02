import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import CarDetails from './CarDetails';
import logo192 from '../images/logo192.png';

let brand_list = [
    {
        key: 1,
        brand_name: "Ford",
        brand_logo: logo192
    },
    {
        key: 2,
        brand_name: "Honda",
        brand_logo: logo192
    },
    {
        key: 3,
        brand_name: "Tata",
        brand_logo: logo192
    },
    {
        key: 4,
        brand_name: "Mahindra",
        brand_logo: logo192
    },
    {
        key: 5,
        brand_name: "Maruti",
        brand_logo: logo192
    },
    {
        key: 6,
        brand_name: "Kia",
        brand_logo: logo192
    }
]

function Home() {
    return (
        <div class="ui six doubling cards">
            {brand_list.map((model) =>
                <a class="card" key={model.key}>
                    <Link to="/brand">
                        <div class="image">
                            <img src={model.brand_logo} />
                        </div>
                    </Link>
                </a>
            )}
        </div>
    )
};

export default Home;
