import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { CategorySelect } from '../../componets/CategorySelect';
import { Appointment } from '../../componets/Appointment';
import { ListDivider } from '../../componets/ListDivider';
import { ListHeader } from '../../componets/ListHeader';
import { ButtonAdd } from '../../componets/ButtonAdd';
import { Profile } from '../../componets/Profile'
import { Background } from '../../componets/Background'
import { styles } from './styles';


export function Home() {
  const [category, setCategory] = useState('');

  const navigation = useNavigation();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'      
    },
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  } 
  
  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  } 
  
  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }  

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>
    
      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader 
          title="Partidas agendadas"
          subtitle="Total 6"
        />

        <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
            <Appointment 
              data={item} 
              onPress={handleAppointmentDetails}
            />            
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );  
}