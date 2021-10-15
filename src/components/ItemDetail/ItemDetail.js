import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const ItemDetail = (props) => {
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
            </Card>
        </div>
    )
}

export default ItemDetail
