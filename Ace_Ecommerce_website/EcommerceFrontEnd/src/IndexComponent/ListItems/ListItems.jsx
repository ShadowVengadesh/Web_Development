import React from 'react';
import './ListItems.css';
import { Link } from 'react-router-dom';


const ListItems = ({ items }) => {
    return (
        <div className="b container-fluid text-center my-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 text-center justify-content-center g-4">
                {items.map((item, index) => (
                    <div key={index} className="colunm col bg-white text-center m-2">
                        <div className="card">
                            <img src={item.img} className="card-img-bottom justify-content-center" alt={item.name} />
                            <div className="card-body ">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text d-none d-xl-flex">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <Link to="/product-details">See more</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListItems;
