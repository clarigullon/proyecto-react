import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const Item = ({item}) => {
    const {nombre, id, precio, descripcion, img} = item;
    return (
        <div>
            <Card >
                <Image src={img} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header> {nombre} </Card.Header>
                    <Card.Meta> {id} </Card.Meta>
                    <Card.Description>{descripcion}</Card.Description>
                    <Card.Content>${precio}</Card.Content>
                </Card.Content>
            </Card>
        </div>
    )
}

export default Item
