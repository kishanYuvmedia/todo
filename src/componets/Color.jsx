
import { useState } from "react";
const ColorPicker = () => {
    const [color, setColor] = useState('red');
    const [colorv, setColorv] = useState('red');
    const [colorg, setColorg] = useState('red');
    return (
        <div style={{ display: "flex", width: '100%', height: '200px', background: `linear-gradient(0deg,${color} 0%, ${colorv} 47%, ${colorg} 100%)`, justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '50%', backgroundColor: 'white', borderRadius: 10 }}>
                <input type="color" style={{ width: '100%' }} value={color} onChange={(v) => setColor(v.target.value)} />
                <input type="color" style={{ width: '100%' }} value={colorv} onChange={(v) => setColorv(v.target.value)} />
                <input type="color" style={{ width: '100%' }} value={colorg} onChange={(v) => setColorg(v.target.value)} />
            </div>
        </div>
    )
}
export default ColorPicker;