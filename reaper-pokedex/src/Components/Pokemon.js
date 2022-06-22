import CardComponent from './CardComponent';
import {Card} from 'react-bootstrap';

function Pokemon({id,avatar,name}){
    return (
        <>
            <Card style={{ width: '18rem', height: '18rem' }}>
                <Card.Body>
                    <Card.Title className='PokemonName' style={{ color: 'black' }}>{name}</Card.Title>
                    <div className="image-container">
                        <img src={avatar} alt={name}  height="100" width="100"/>
                    </div>                   
                    <Card.Text  style={{ color: 'black' }}>
                        Here should be the id
                    </Card.Text>
                </Card.Body>
            </Card>
        {/*<figure>
        <img src={avatar} alt={name} height="100" width="100"/>
        <figcaption>{name}</figcaption>
        </figure>        
        <CardComponent/>*/}
        </>
    )
}

export default Pokemon;