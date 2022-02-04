
import React, { useState } from 'react'
import UsersAnimation from './UserAnimation'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import Input from './../UI/Input'
import axios from 'axios';

const UserList = ({ users }) => {

    const [pictures,setPictures]=useState([]);//arreglo de los datos

    const [search, setSearch] = useState('');
    const [search1, setSearch1] = useState('');

    let counterAnimation = 0

    //date variables
    const startDate = (value) => {
        setSearch(value);
    }
    const endDate = (value) => {
        setSearch1(value);
    }

    //Api call function
    const llamadaApi =async()=>{
        const response= await axios.get(`https://api.nasa.gov/planetary/apod?api_key=BOhQXvCGtwrrxpWp53A7l8qVCdFTY1Xo1Bs1RqZe&start_date=${search}&end_date=${search1}`)
    }

    return (
        <>
            <table class="table">
            <th scope="row">
                <th scope="col">
                    FECHA INICIO
                    <Input type="date" class="min-today" startDate={startDate}/>
                </th>
                <th scope="col">
                    FECHA FIN
                    <Input type="date" startDate={endDate} />
                </th>
                <th scope="col">
                    <button onClick={llamadaApi} type="submit">submit</button>
                </th>
            </th>
            </table>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre de la Foto</th>
                        {counterAnimation == 1 ? '' : (
                            <>
                                <th scope="col">Foto del Dia</th>
                            </>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {pictures.length==0 && < UsersAnimation /> }
                    {pictures.map((item)=>(
                        <tr key={item[1]}>
                        <th scope="row">{item.title}</th>
                        <img src={item.url} alt="Logo" width="400" height="300"/>
                    </tr>
                    ))}
                </tbody>
            </table>

        </>
    )

}

export default UserList;

