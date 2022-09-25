import React from 'react';
import './index.scss';

// 套件
import { Container } from 'react-bootstrap';

function notFound() {
    return (
        <Container>
            <div className="notFound_box d-flex align-items-center justify-content-center">
                <h1 className="text-center">404 NOT FOUND</h1>
            </div>
        </Container>
    );
}

export default notFound;
