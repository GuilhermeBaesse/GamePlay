import React, { ReactNode } from 'react'; 
//rect node tipa a action, dizendo que é um noh do react, assim podemos passar de forma dinâmicao que queremos inserir
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/theme'
import { Text, View } from 'react-native'
import { styles } from '../Header/styles';
import { useNavigation } from '@react-navigation/native';
type Props = {
    title: string;
    action?: ReactNode //botão passado de maneira dinamica
}


export function Header({ title, action}: Props) {
    const {secondary100, secondary40, heading} = theme.colors
    const navigation = useNavigation();
    function handleGoBack() {
        navigation.goBack();
    }
    return (
        <LinearGradient
        style={styles.cotainer}
            colors={[secondary100, secondary40]}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={heading}
                />
            </BorderlessButton>
            <Text style={styles.title}>
                { title }
            </Text >
            {
                action&&
                <View>
                    { action }
                </View>
            }
        </LinearGradient>
    );
}