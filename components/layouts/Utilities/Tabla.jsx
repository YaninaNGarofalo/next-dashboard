import React, { useEffect } from 'react'
import { sorting } from '../../../helpers/sorting'
export default function Tabla({data, setData}) {
    
    function handleTableSorting(header) {
        let tempData = sorting(data, header)
        setData([...tempData])
    }
    if(data.length){
        const headers = Object.getOwnPropertyNames(data[0])
    return (
        <table> 
            <thead>
                <tr>{headers.map((header,i)=>{ 
                    return <th  key={`${header}`} onClick={() => handleTableSorting(header)}>{header.toLocaleUpperCase()} <i className="bi bi-chevron-expand"></i></th>})}                        
                </tr>
            </thead>
            <tbody>
                {data.map((row,i ) => {             
                return <tr key={`tr-${i}`}>
                    {headers.map((header, j) => { return <td key={`td-${j}`}> { row[header] }</td>})}
                </tr>
                })}            
            </tbody>
        </table>
    )    
    }else{ return }    
}