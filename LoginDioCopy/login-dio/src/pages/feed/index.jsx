import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import {Container, Column, Title, TitleHighlight} from './styles';
const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                <UserInfo percentual={95} name="Sabrina Castilho" image="https://avatars.githubusercontent.com/u/162124050?v=4" />
                <UserInfo percentual={82} name="Sabrina Castilho" image="https://avatars.githubusercontent.com/u/162124050?v=4" />
                <UserInfo percentual={70} name="Sabrina Castilho" image="https://avatars.githubusercontent.com/u/162124050?v=4" />
                <UserInfo percentual={60} name="Sabrina Castilho" image="https://avatars.githubusercontent.com/u/162124050?v=4" />
                <UserInfo percentual={50} name="Sabrina Castilho" image="https://avatars.githubusercontent.com/u/162124050?v=4" />
            </Column>
            
        </Container>
        
        </>)
}
export { Feed }