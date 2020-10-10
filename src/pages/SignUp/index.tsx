import React from 'react';

import { FiArrowLeft, FiMail, FiUser,FiLock } from 'react-icons/fi';

import logoImg from '../../assets/ligpopLogo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';


import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
    <Container>
        <Background />
        <Content>
            <img src={logoImg} alt="GoBarber" />

            <form>
                <h2>Faça seu cadastro</h2>

                <Input name="name" icon={FiUser} placeholder="Nome Completo" />

                <Input name="email" icon={FiMail} placeholder="E-mail" />

                <Input name="password" icon={FiLock} type="password" placeholder="Senha" />

                <Button type="submit">Cadastrar</Button>
            </form>

            <a href="login">
                <FiArrowLeft />
                Voltar para login
            </a>

        </Content>
    </Container>
);

export default SignUp;
