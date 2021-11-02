import React from 'react'
import { NavLink, Redirect, useHistory, Link, BrowserRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Header() {
    return (
      <div className="ui menu" style={{ display: "flex" }}>
        <div className="header item">
          <Link to="/">
            <Button>
              <i class="car icon" />
              Our LOGO
            </Button>
          </Link>
        </div>
        <div className="header item">
          <Link to="/compare">
            <Button>
              <i class="exchange icon" />
              Compare
            </Button>
          </Link>
        </div>
        <div className="header item" style={{ marginLeft: "auto" }}>
          <Link to="/about">
            <Button>
              <i class="info icon" />
              About Us
            </Button>
          </Link>
        </div>
        <div className="header item">
          <Link to="/contact">
            <Button>
              <i class="user icon" />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    );
}

export default Header;
