import React, {useEffect} from 'react';
import { View, FlatList } from 'react-native';

import { Load } from '../../componets/Load';

import { Guild, GuildProps } from '../../componets/Guild';
import { ListDivider } from '../../componets/ListDivider';
import { useState } from 'react';
import { styles } from './styles';
import { api } from '../../services/api';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props){
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [loading, setLoading] = useState(true)
  
  async function fetchGuilds(){
    const response = await api.get('/user/@me/guilds');

    setGuilds(response.data);
    setLoading(false);
  }
  
  useEffect(() => {
    fetchGuilds()
  },[]);

  return (
    <View style={styles.container}>
      {
        loading ? <Load /> :
        <FlatList 
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
              <Guild 
                data={item} 
                onPress={() => handleGuildSelect(item)}
              />
          )}    
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
          ListHeaderComponent={() => <ListDivider isCentered />}
          style={styles.guilds}
        />
      }
    </View>
  );
}