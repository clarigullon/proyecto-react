import React, { useState, useEffect } from 'react';
import ItemsData from '../Data/data.json';
import ItemCount from '../ItemCount/ItemCount'
import { Card, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Postres = ({match}) => {

    let categoryPostres = match.params.id;
    const [postres, setPostres] = useState ([]);

    useEffect(() => {
        const getPostres = new Promise ((response) => {
           response (ItemsData.filter(producto => producto.category === categoryPostres));
        }) ;
        getPostres.then((data) => {
            setPostres (data);
        })
    },[]) ;
  
    return (
        <div className="ItemList">
        {postres.map((postre)=>{
            return (
                <div key={postre.category}>
                    <Link to={`/detail/${postre.category}`}>
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