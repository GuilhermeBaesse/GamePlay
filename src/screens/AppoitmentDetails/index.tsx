import React from 'react';
import { Header } from '../../componets/Header'
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons'
import { styles } from './styles'
import { ImageBackground, Text, View, FlatList } from 'react-native';
import { ListHeader } from '../../componets/ListHeader';
import { Background } from '../../componets/Background';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';
import { Member } from '../../componets/Member';
import { ListDivider } from '../../componets/ListDivider';
import { ButtonIcon } from '../../componets/Buttonicon';


export function AppointmentDetails() {
    const membrs =[{
        id: '1',
        username: 'Rodrigo',
        avatar_url: 'https://github.com/rodrigorgtic.png',
        status: 'online'
    },
    {
        id: '2',
        username: 'Rodrigo',
        avatar_url: 'https://github.com/rodrigorgtic.png',
        status: 'offline'
    }]
    
    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto 
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            
                <ImageBackground 
                    source={BannerImg}
                    style={styles.banner}

                >
                    <View style={styles.bannerContent}> 
                        <Text style={styles.title}>
                            Lendários
                        </Text>
                        <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
                        </View>
                </ImageBackground>
            <ListHeader 
                title="Jogadores"
                subtitle="total 3"
            />
            <FlatList
                data={membrs}
                keyExtractor={item => item.id}
                renderItem={({item}) =>(
                    <Member data={item} />
                )}
                ItemSeparatorComponent={()=> <ListDivider/>}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida"/> 
            </View>    
               
        </Background>
    );
}