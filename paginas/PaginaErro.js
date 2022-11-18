import { Alert, Container } from "react-bootstrap";

function PaginaErro() {
    return (
        <Container className="my-5">
            <Alert className="w-75 m-auto" variant="danger">
                <Alert.Heading>Ops... Algo deu errado!</Alert.Heading>
                <p>Acho que você tentou acessar uma rota sem permissão ou que não existe.</p>
                <p>Volte para a página anterior e tente novamente.</p>
            </Alert>
        </Container>
    );
}

export default PaginaErro;
