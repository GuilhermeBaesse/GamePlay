import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { Header } from '../../componets/Header'
import { styles } from './styles'
import { View, Text } from 'react-native';
import { CategorySelect } from '../../componets/CategorySelect';
import { Background } from '../../componets/Background';
import { theme } from '../../global/styles/theme';
import { GuildIcon } from '../../componets/Guildicon';

export function AppointmentDetails(){
    const [category, setCategory] = useState('');

    return (
        <Background>
            <Header
                title="Agendar partida"
            />
            <Text style={[styles.label, {marginLeft: 24,marginTop: 36, marginBottom: 18}]}>
                Categoria
            </Text>
            <CategorySelect
                hasCheckBox
                setCategory={setCategory}
                categorySelected={category}
            />
            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                        <View style={styles.image}/>
                            {
                                //fazer de forma condicional
                                <GuildIcon />
                            }
                        <View style={styles.selectBody}>
                            <Text style={styles.label}>
                                Selecione um servidor
                            </Text>
                        </View>
                        <Feather 
                            name='chevron-right'
                            color={theme.colors.heading}
                            size={18}
                        />
                    </View>
                </RectButton>

            </View>
   
        </Background>
    );
}