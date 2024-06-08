import { useEffect, useState } from "react"
import React from 'react'

const List = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/products");
        setProduct(response.data);
    }
    return (
        <div className='container mt-5'>
            <div className='columns is-multiline'>
                {products.map((product) => (
                    <div className='column is-one-quarter' key={product.id}>
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img src={product.url} 
                                    alt="Image"/>
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">

                                    <div class="media-content">
                                        <p class="title is-4">{product.name}</p>
                                    </div>
                                </div>

                                <footer className='class-footer'>
                                    <a className='card-footer-item'>Edit</a>
                                    <a className='card-footer-item'>Delete</a>
                                </footer>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default List
