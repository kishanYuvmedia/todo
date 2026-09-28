import { useState } from "react";
import ProductCard from "./componets/product-card";

const ProductList = () => {
    const [List, setList] = useState([
        {
            title: 'New Project 1',
            details: 'Download the perfect nature pictures. Find over 100+ of the best free nature images. Free for commercial use ✓ No attribution required ✓ Copyright-free.',
        },
        {
            title: 'Title 2',
            details: 'Download the perfect nature pictures. Find over 100+ of the best free nature images. Free for commercial use ✓ No attribution required ✓ Copyright-free.',
        },
        {
            title: 'Title 3',
            details: 'Download the perfect nature pictures. Find over 100+ of the best free nature images. Free for commercial use ✓ No attribution required ✓ Copyright-free.',
        },
        {
            title: 'Title 4',
            details: 'Download the perfect nature pictures. Find over 100+ of the best free nature images. Free for commercial use ✓ No attribution required ✓ Copyright-free.',
        }
    ])
    return (
        <>
            <div style={{display:"flex",width:'100%'}}>
            {List.map((value,index)=>
                <ProductCard data={value}/>
            )}
             </div>
        </>
    )
}
export default ProductList;