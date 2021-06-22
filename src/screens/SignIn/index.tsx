/* estrutura da interface*/
import React, {useState} from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import illustrationImg from '../../assets/illustrationImg.png'
import { styles } from './styles';


export function SignIn(){
const [text, setText] = useState('')

    return(
        <View style={styles.container}> 
        
            <StatusBar barStyle="light-content"
            backgroundColor="transparent"
            translucent
            />

            <Image
                source={illustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}/>
                    Organize{'\n'} suas jogatinas{'\n'} facilmente
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>
            </View>
        </View>
    );
}

