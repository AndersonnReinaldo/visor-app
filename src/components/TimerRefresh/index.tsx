import React, { useState, useRef, useEffect } from 'react'
import { Button, Text, View } from 'react-native';

interface IProps {
    onInit: () => void | any
}
   
const TimerRefresh: React.FC<IProps> = ({onInit}): JSX.Element => {
  

    // Precisamos de ref nisso, porque estamos lidando
    // com JS setInterval para acompanhá-lo e
    //para quando necessário parar 
    const Ref = useRef(null);
  
    // O estado do nosso timer
    const [timer, setTimer] = useState('00:00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(String(new Date()));
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 * 60 * 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
    
            // atualiza o temporizador
            // verifica se for menor que 10 então precisamos
            // adiciona '0' no início da variável
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )

        }

    }
  
    const clearTimer = (e) => {
        onInit();
        // Se você ajustá-lo, você também deve precisar
        // ajusta a fórmula do Endtime que estamos prestes
        // para codificar em seguida   
        setTimer('00:00:10');
  
        // Se você tentar remover esta linha o
        //a atualização da variável timer será
        // após 1000ms ou 1seg
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
  

    // Podemos usar useEffect para que quando o componente
    // montar o timer iniciará o mais rápido possível
    
    // Colocamos array vazio para atuar como componentDid
    // apenas quando for montado na tela
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
  

    // Outra maneira de chamar o clearTimer() para iniciar
    // a contagem regressiva é via evento de ação do
    // botão primeiro criamos a função a ser chamada
    // pelo botão
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
  
    return (
        <View>
            <Text>{timer}</Text>
            <Button onPress={onClickReset} title='Atualizar' />
        </View>
    )
}
  
export default TimerRefresh;