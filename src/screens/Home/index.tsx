import React, { useState, useEffect } from 'react';
import { useColorScheme,ListRenderItem } from 'react-native'
import { FakeAPI } from '../../services';
import { ItemStatusList,TimerRefresh } from '../../components' 
import { Container,Name,UsersList } from './styles';

export type IEquipamento = {
    id:string;
    ip:string;
    name:string;
}


const Home = () => {
    const deviceTheme = useColorScheme();
    const [data,setData] = useState([]);
    const [refresh, setRefresh] = useState<boolean>(false)

    useEffect(() => {
        init();
    },[])

    const init = () => {
        const response = FakeAPI()
        setData(response);
    }

    const renderItem: ListRenderItem<IEquipamento> = ({item}) => <ItemStatusList data={item} refresh={refresh}/>;

  return (
      <Container>
        <UsersList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item: IEquipamento) => String(item.id)}
        />
        <TimerRefresh onInit={() => setRefresh(!refresh)}/>
      </Container>
  )
}

export default Home;