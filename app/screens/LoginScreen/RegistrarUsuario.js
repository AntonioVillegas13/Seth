import { Button, Input, Icon } from "@rneui/base"
import { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import { CrearUsuario } from "../../Services/AutenticacionSrv"
import { TextInput } from 'react-native-paper';
export const Registrar = ({ navigation }) => {

    const [usuario, setUsuario] = useState();
    const [cedula, setCedula] = useState();
    const [correo, setCorreo] = useState();
    const [clave, setClave] = useState();
    const [confirmar, setConfirmar] = useState();



    const crearUsuario = () => {
        CrearUsuario(usuario, clave);
        navigation.navigate("LoginNav")
    }



    return <View style={styles.container}>

        <View style={styles.cajaCabecera} >
            <Text>Registrar</Text>
        </View>
        <View style={styles.cajaCuerpo} >
            <TextInput
                value={cedula}
                label='Cedula'
                onChangeText={setCedula}
                keyboardType="numeric"
                mode="outlined"
                lefIcon={
                    <Icon
                        name="user"
                        size={24}
                        color='black'
                        type='ant-design'
                    />

                }

            />
            <TextInput
                value={usuario}
                label='Nombre'
                onChangeText={setUsuario}
                KeyboardType="email-address"
                mode="outlined"
                lefIcon={
                    <Icon
                        name="user"
                        size={24}
                        color='black'
                        type='ant-design'
                    />

                }

            />
            <TextInput
                value={correo}
                label='Correo Electronico'
                onChangeText={setCorreo}
                KeyboardType="email-address"
                mode="outlined"
                lefIcon={
                    <Icon
                        name="user"
                        size={24}
                        color='black'
                        type='ant-design'
                    />

                }

            />
            <TextInput
                value={clave}
                label='Contraseña'
                onChangeText={setClave}
                KeyboardType="email-address"
                mode="outlined"
                lefIcon={
                    <Icon
                        name="user"
                        size={24}
                        color='black'
                        type='ant-design'
                    />

                }

            />

            <TextInput
                value={confirmar}
                label='Confirmar Contraseña'
                onChangeText={setConfirmar}
                KeyboardType="email-address"
                mode="outlined"
                lefIcon={
                    <Icon
                        name="user"
                        size={24}
                        color='black'
                        type='ant-design'
                    />

                }
            />

        </View>






        <View style={styles.cajaBotones}>
            <Button
                title='Crear Usuario'
                onPress={crearUsuario}


            />
        </View>



    </View>
}







const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        //alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    cajaCabecera: {
        //backgroundColor: 'cyan',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 100
    },
    cajaCuerpo: {
        //backgroundColor: 'brown',
        flex: 6,
        alignItems: 'stretch',
        paddingHorizontal: 30,
        justifyContent: 'flex-start',
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 39
    },
    cajaBotones: {
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 2
    },
    txtinput: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: 'gray',
        width: 310,
        height: 50
    },
    label: {
        zIndex: 100,
        position: 'absolute',
        backgroundColor: 'white',
        top: -11,
        left: 10,
        marginLeft: 11,
    }

});