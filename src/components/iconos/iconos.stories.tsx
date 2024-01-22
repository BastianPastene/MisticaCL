import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Iconos } from './iconos';
import { ScrollView, View } from 'react-native';


export default {
    title: 'components/Iconos',
    component: Iconos,
} as ComponentMeta<typeof Iconos>;

export const Basic: ComponentStory<typeof Iconos> = args => {
    return (
        <ScrollView>
            <View style={{ gap: 16, margin: 16 }}>
                <React.Fragment>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Iconos nombreIcono='Cerrar' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='ChevronAbajo' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='ChevronArriba' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='FlechaIzquierda' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='FlechaDerecha' color='Black' size={24} style={{ margin: 10 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Iconos nombreIcono='Editar' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='CargandoDefault' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='CargandoAndroid' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='CargandoIos' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='Whatsapp' color='Black' size={24} style={{ margin: 10 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Iconos nombreIcono='Descargar' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='Buscar' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='Basurero' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='Clip' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='CerrarCirculo' color='Black' size={24} style={{ margin: 10 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Iconos nombreIcono='CarritoCompra' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='Movistar' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='Agregar' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='CorazonLineal' color='Black' size={24} style={{ margin: 10 }} />
                        <Iconos nombreIcono='Corazon' color='Black' size={24} style={{ margin: 10 }} />
                    </View>
                </React.Fragment>
            </View>
        </ScrollView>

    );
};

Basic.storyName = 'Iconos'
