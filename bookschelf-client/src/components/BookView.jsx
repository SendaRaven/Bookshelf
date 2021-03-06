import React from 'react'
import Card from 'react-bootstrap/Card'

export default function BookView(props) {



    console.log(props);


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
          </Card.Text>
            </Card.Body>
        </Card>
    );
}
