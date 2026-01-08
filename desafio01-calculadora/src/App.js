import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row, Title } from './styles';
import { useState } from 'react';
const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);

  }
  const handleSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(parseFloat(sum.toFixed(10))));
      setOperation('');
    }

  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(parseFloat(minus.toFixed(10))));
      setOperation('');
    }

  }

  const handleDivNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('÷');
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(parseFloat(div.toFixed(10))));
      setOperation('');
    }

  }

  const handleMultNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(parseFloat(mult.toFixed(10))));
      setOperation('');
    }

  }

  const handlePorcentNumbers = () => {
    if (currentNumber !== '0') {
      const current = Number(currentNumber);
      const first = Number(firstNumber);

      if (firstNumber === '0') {
      // Se não houver primeiro número, apenas divide o atual por 100 (ex: 50% vira 0.5)
      setCurrentNumber(String(current / 100));
      } else {
      // Se houver uma operação em curso (+, -, *, /)
        let result;
        const percentValue = (first * current) / 100; // O valor que representa a %

        switch (operation) {
          case '+':
            setCurrentNumber(String(parseFloat((first + percentValue).toFixed(10))));
            break;
          case '-':
            setCurrentNumber(String(parseFloat((first - percentValue).toFixed(10))));
            break;
          case '*':
            setCurrentNumber(String(parseFloat((percentValue).toFixed(10)))); // Ex: 200 * 10% = 20
            break;
          case '÷':
            setCurrentNumber(String(parseFloat((first / (current / 100)).toFixed(10))));
            break;
          default:
            setCurrentNumber(String(parseFloat((current / 100).toFixed(10))));
            break;
        }
        setFirstNumber('0');
        setOperation('');
      }
    }
  }
  const handleBackspace = () => {
    setCurrentNumber(prev => {
      if (prev.length > 1) {
        return prev.slice(0, -1);
      }
      return '0';
    })
  }

  const handleAddDot = () => {
    if (!currentNumber.includes('.')) {
      setCurrentNumber(prev => `${prev}.`);
    }
  }

  const handleReverseSign = () => {
    setCurrentNumber(prev => {
    // Se for zero, não faz nada
      if (prev === '0') return '0';
    
    // Se já começar com "-", remove o sinal (torna positivo)
      if (prev.startsWith('-')) {
        return prev.substring(1);
      }
    
    // Caso contrário, adiciona o sinal de "-" na frente
      return `-${prev}`;
    });
  };
    

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '÷':
          handleDivNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        
        default:
          break;
      }
    } 
  }
  return (
    
    <Container>
      <Title>Calculadora em React</Title>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="ᵡ" onClick={handleBackspace}/>
          <Button label="%" onClick={handlePorcentNumbers}/>
          <Button label="÷" onClick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="*" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="+/-" onClick={handleReverseSign}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={handleAddDot}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        
      </Content>
    </Container>
  );
}

export default App;
