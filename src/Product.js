import axios from "axios"
import { useState } from "react"

export default function Product() {
    let [data, setData] = useState([])

    return (
        <>
            <ul>
                {data.map((el) => <Card dataObj={el} key={el.id} />)}
            </ul>
            <button className="btn btn-primary" onClick={getData}>show data</button>
        </>
    )
    function getData() {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log(res.data)
            setData(res.data)
        })
    }
}
const card = {
    width: '50%',
    display: 'flex'
}
function Card({ dataObj }) {
    return (
        <div className="container">

            <div className="row">
                <div className="card" style={card}>
                    <img src={dataObj.image} className="card-img-top" alt={dataObj.title} />
                    <div className="card-body">
                        <h5 className="card-title">{dataObj.title}</h5>
                        <p className="card-text">{dataObj.description}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}