import React, { useState } from 'react';
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

const ItemDetail = (props) => {

    const [compra, setCompra] = useState();
    const [terminar, setTerminar]= useState(false);
    const onAdd = (cantidad) => {
        setCompra (cantidad)
        setTerminar(!terminar)
    }
    console.log("esto tiene el estado", compra)
    return (
        <div className="ItemDetail">
            <Card key={props.producto.id} >
                        <Image src={props.producto.img} wrapped ui={false}/>
                        <Card.Content>
                            <Card.Header> {props.producto.nombre} </Card.Header>
                            <Card.Meta> {props.producto.id} </Card.Meta>
                            <Card.Description>{props.producto.descripcion}</Card.Description>
                            <Card.Content>${props.producto.precio}</Card.Content>
                        </Card.Content>
                        {
                            terminar ?
                            ( <Link to={`/cart`}><button>Finalizar Compra</button></Link>
                            ): (
                                <ItemCount 
                                valorInicial="1"
                                stock="10"
                                onClick={(cant) => onAdd(cant)}>
                                </ItemCount>    
                            )
                        }
                    
            </Card>
            
        </div>
    )
}

export default ItemDetail
