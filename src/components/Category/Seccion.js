import React, { useState, useEffect } from 'react';
import ItemsData from '../Data/data.json';
import ItemCount from '../ItemCount/ItemCount'
import { Card, Image } from 'semantic-ui-react'
import {Link, useParams} from 'react-router-dom'
import Categorias from '../../views/Categorias'
import './Seccion.css'
const Seccion = ({}) => {

    const {categoriaId} = useParams();
    const [seccion, setSeccion] = useState ([]);

    useEffect(() => {
        const getSeccion = new Promise ((response) => {
           response (ItemsData.filter((e) => e.categoria === categoriaId));
        }) ;
        getSeccion.then((data) => {
            console.log(data, "data")
            setSeccion (data);
        })
    },[categoriaId]) ;
  
    return (
        <div>
        <Categorias/>
        {seccion.map((producto)=>{
            
            return (
                <div className="Seccion" >
                    <Link to={`/detail/${producto.categoria}`}>
                        <Card  >
                            <Image src={producto.img} wrapped ui={false}/>
                            <Card.Content>
                            <Card.Header> {producto.nombre} </Card.Header>
                            <Card.Meta> {producto.id} </Card.Meta>
                            <Card.Description>{producto.descripcion}</Card.Description>
                            <Card.Content>${producto.precio}</Card.Content>
                            <ItemCount stock="5" initial="1"/>
                        </Card.Content>
                    </Card>
                    </Link>
                </div>
            )
        }
        )}
    </div>
    )
}

export default Seccion