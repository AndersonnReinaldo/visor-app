import React, { useState, useEffect, useRef } from 'react'
import { IEquipamento } from '../../screens/Home'
import { ItemContainer,ItemName, ContainerItem } from './styles'
import { ping } from '../../services'
import { RenderConditional } from '../'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Svg, Line } from 'react-native-svg'

const ItemStatusList = ({data, refresh}: {data: IEquipamento, refresh:boolean }) => {
  const Ref = useRef(null)
  const [isActivity, setIsActivity] = useState<boolean>(false)
  const [count, setCount] = useState(1)

  useEffect(() => {
      startRefresh() 
  },[refresh])

  const init = () => {

    ping({ ipAddress: data.ip })
    .then(res => { 
      const { status, ms } = res
      setIsActivity(status)
    })
  }

  const startRefresh = () => {
  
    const id = setInterval(() => {
      init();
    }, 1000)

    Ref.current = id;

    setTimeout(stopRefresh, 10000)
}

  const stopRefresh = () => {
    if (Ref.current) clearInterval(Ref.current);
  }

  return (
    <ItemContainer>
      <ContainerItem>
        <ItemName>{data?.ip}</ItemName>
        <ItemName>{data?.name}</ItemName>
      </ContainerItem>

      <RenderConditional isTrue={isActivity}>
      <Svg height="100" width="100">
        <Line x1="0" y1="50" x2="100" y2="50" stroke="green" strokeWidth="2" />
      </Svg>
      </RenderConditional>

      <RenderConditional isTrue={!isActivity}>
      <Svg height="100" width="100">
        <Line x1="0" y1="50" x2="100" y2="50" stroke="red" strokeWidth="2" />
        <Line x1="30" y1="35" x2="70" y2="65" stroke="red" strokeWidth="3" />
        <Line x1="70" y1="35" x2="30" y2="65" stroke="red" strokeWidth="3" />
      </Svg>
      </RenderConditional>

        <Icon name='printer' size={40} color={isActivity ? 'green' : 'red'}/>
    </ItemContainer>
  );
}

  export default ItemStatusList