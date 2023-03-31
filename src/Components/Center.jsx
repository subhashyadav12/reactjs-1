import React from 'react'
import { useState } from 'react'
import Clscmp from './Clscmp'
import Funcmp from './Funcmp'

const Center = () => {
    const [n, setn] = useState(false)
    const [s, sets] = useState(false)
    const visible= () => { if (n) { setn(false) } else { setn(true) } }
    const nonvisible = () => { s ? sets(false) : sets(true) }
    return (
        <div className='container'>
            <button className='btn1' onClick={visible}>To see styling in Functional component</button>
            <button className='btn2' onClick={nonvisible}>To see styling in Class component</button>
            <div>{n && <Funcmp />}</div>
            <div>{s && <Clscmp />}</div>
        </div>

    )

}

export default Center