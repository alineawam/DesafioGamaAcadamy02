import React, { useState, useEffect } from 'react';

import { Container } from './style';

import api from '../../services/api';

interface IProduct {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, [])



    const handleCart = (index: number) => {
        const productStore = JSON.stringify(data[index]);
        localStorage.setItem(`@Produto-${index}`, productStore)
    }

    function handleLogin() {
        localStorage.clear();
        let name = (document.getElementById('name') as HTMLInputElement).value;
        let email = (document.getElementById('email') as HTMLInputElement).value;
        let cpf = (document.getElementById('cpf') as HTMLInputElement).value;
        let dataNascimento = (document.getElementById('dataNascimento') as HTMLInputElement).value;
  
        let cadastro  = {
            "name": name,
            "email":email,
            "cpf": cpf,
            "dataNascimento": dataNascimento
        };

        const cadastrostring = JSON.stringify(cadastro);
        console.log("name", cadastro)
        localStorage.setItem("cadastro", cadastrostring);
    }

    return (
        <Container>
            <header className="header">
                <img className="logo" src="https://li.ctcdn.com.br/empresas/838.400.jpg" alt="logo" />
                <form action="#login">
                    <button className="btn">Cadastrar</button>
                </form>
                {/* <a className="login" href="#login">Cadastrar</a> */}
            </header>
            <section>
                {data.map((prod, index) => (

                    <div className="product-content" key={prod.id}>
                        <img src={prod.photo} alt="IPhone" width="200" height="auto" />
                        <h4>{prod.name}</h4>
                        <span>{prod.description}</span>
                        <h3>R$ {prod.price}</h3>
                        <button className="btn" onClick={() => handleCart(index)}>Comprar</button>
                    </div>
                ))}
            </section>
            <section id="login">
                <div className="form">
                    <h4>Preencha seu cadastro</h4>
                    <div className="input-container">
                        <input id="name" placeholder="Nome" type="text" />
                    </div>
                    <div className="input-container">
                        <input id="email" placeholder="Email" type="text" />
                    </div>
                    <div className="input-container">
                        <input id="cpf" placeholder="CPF" type="text" />
                    </div>
                    <div className="input-container">
                        <input id="dataNascimento" placeholder="Data de nascimento" type="text" />
                    </div>
                    <div className="input-container">
                        <button className="btn" onClick={() => handleLogin()} type="button">Cadastrar</button>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default Home;