import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../../services/api';
import {Container, Title, Column, CriarText, EsqueciText, Row, SubtitleLogin, TitleLogin, Wrapper, Legend } from './styles';

const schema = yup.object({
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
    password: yup.string().min(3, 'Mínimo 3 caracteres').required('Campo obrigatório'),
    }).required();
const Register = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&password=${formData.password}`);
            if(data.length === 1){
                navigate('/feed');
                return;
            }else{
                alert('Usuário ou senha inválidos');
            }
        } catch{
            alert('Houve um erro, tente novamente.');
        }
    };

   
    return (
    <>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar
                    mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>   
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit= {handleSubmit(onSubmit)}>
                        <Input name="name" errorMessage={errors.name?.message} control={control} placeholder="Nome" leftIcon={<MdPerson />}/>
                        <Input name="email" errorMessage={errors.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors.password?.message} control={control} type="password" placeholder="Senha" leftIcon={<MdLock />} />
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <Legend> Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Legend>
                        
                            <EsqueciText>Já tenho conta.</EsqueciText>
                            <CriarText>Fazer login</CriarText>
                        
                    </Row>
                </Wrapper>
                
            </Column>
        </Container>
        
    </>)
}
export { Register }