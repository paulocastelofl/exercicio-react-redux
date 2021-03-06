
import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default (props) =>{

    const min = props.min
    const max = props.max

    return (
        <Card title="Intevalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong>Mímino:</strong>
                    <input type="number" value={min} 
                    onChange ={e => props.onMinChanged(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} 
                     onChange ={e => props.onMaxChanged(+e.target.value)}
                    />
                </span>
            </div>
            
        </Card>
    )
}