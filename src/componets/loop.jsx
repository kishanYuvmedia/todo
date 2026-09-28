import { useState } from "react";
const Loop = () => {
    const [city, setCity] = useState(['Ajmer', 'Jodhpur', 'Udaipur', 'Kota'])
    return (
        <>
            {city.map((value, index) =>
                <h1>{index+1}-{value} City</h1>
            )}
        </>
    )
}
export default Loop;