import React, { useContext, useEffect } from 'react';
import { clientContext } from '../contexts/ClientContext';
import MediaCard from './Card';
import Pagination from './Pagination';

const Content = () => {
    const { products, getProducts, currentPosts } = useContext(clientContext)
    useEffect(() => {
        getProducts()
    }, [])
    // console.log(products);
    return (
        <>
            {
                products ? (
                    <div className="content">
                        <div className="content-block">
                            {
                                currentPosts.map(item => (
                                    <MediaCard item={item} key={item.id} />
                                ))
                            }
                        </div>
                        <Pagination />
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </>
    );
};

export default Content;