import React, { useState, useEffect } from 'react';
import ItemsData from '../Data/data.json';
import ItemCount from '../ItemCount/ItemCount'
import { Card, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Categorias from '../../views/Categorias'
const Postres = ({match}) => {

    let categoryPostres = match.params.category;
    console.log("MATCH", match)
    const [postres, setPostres] = useState ([]);

    useEffect(() => {
        const getPostres = new Promise ((response) => {
           response (ItemsData.filter(producto => producto.category === categoryPostres === 'postres'));
        }) ;
        getPostres.then((data) => {
            setPostres (data);
        })
    },[ItemsData]) ;
  
    return (
        <div>
            <Categorias />
        {postres.map((postre)=>{
            return (
                <div key={postre.id}>
                    <Link to={`/detail/${postre.id}`}>
                        <Card >
                            <Image src={postre.img} wrapped ui={false}/>
                            <Card.Content>
                            <Card.Header> {postre.nombre} </Card.Header>
                            <Card.Meta> {postre.id} </Card.Meta>
                            <Card.Description>{postre.descripcion}</Card.Description>
                            <Card.Content>${postre.precio}</Card.Content>
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

export default Postres