import { useState, useEffect } from 'react'
import styles from './ColorPicker.module.css'

function ColorPicker () {
    const [color, setColor] = useState("#FFFFFF")

    function onColorChange (e) {
        setColor(e.target.value)
    }

    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])
    return (
        <>
            <div className={styles.colorInput}>
                <input type="color" onChange={onColorChange} value={color}/>
                <div className={styles.info}>
                    <h1>Color: <p>{color}</p></h1>
                </div>
            </div>
        </>
    )
}

export default ColorPicker;