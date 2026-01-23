import gitLogo from '../assets/github.png';
import Input from '../components/input';
import { Container } from './styles';
import ItemRepo from '../components/ItemRepo';


const App = () => {
    return (
        <Container>
            <img src={gitLogo} width={72} height={72} alt="GitHub Logo" />
            <Input />
            <ItemRepo />
        </Container>
    );
}

export default App;