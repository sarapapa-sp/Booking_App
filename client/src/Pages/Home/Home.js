import React from 'react';
import "./home.css"
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";
import PropertyList from "../../Components/PropertList/PropertyList";
import FeaturedProperty from "../../Components/FeaturedProperty/FeaturedProperty";
function Home(props) {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="home-container">
                <Featured />

                <h1 className="home-title">Browse by Property type</h1>
                <PropertyList />
                <h1 className="home-title">Browse by Property type</h1>
                <FeaturedProperty />
            </div>
        </div>
    );
}

export default Home;