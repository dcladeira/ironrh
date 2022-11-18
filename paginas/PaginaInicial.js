import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PaginaInicial() {
    return (
        <Container style={{heigth: '100vh'}} className="d-flex align-items-center justify-content-center">
            <Button className='p-4' variant='dark' size='lg'>
                <Link className='nav-link' to='/funcionarios' >
                    Entrar no sistema
                </Link>
            </Button>
        </Container>
    );
}

export default PaginaInicial;