import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as S from './styled';

function Repositories() {
    const navigate = useNavigate()
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')

        if (repositoriesName !== null) {
            repositoriesName = JSON.parse(repositoriesName)
            setRepositories(repositoriesName)
        } else {
            navigate("/")
        }
    }, [navigate]);

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {repositories.map((repository, index) => <S.itemList key={index}>Repositório: {repository}</S.itemList>
                )}
            </S.List>
            <S.linkHome to="/">voltar</S.linkHome>
        </S.Container>
    )
}

export default Repositories;