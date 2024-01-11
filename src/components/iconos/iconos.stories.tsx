import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Iconos } from './iconos';
import { ScrollView, View } from 'react-native';

import IconoAgregar from '../icons/icono-agregar';
import IconoCerrar from '../icons/icono-cerrar';
import IconoCarritoCompra from '../icons/icono-carritoCompra';
import IconoChevronAbajo from '../icons/icono-chevronAbajo';
import IconoChevronArriba from '../icons/icono-chevronArriba';
import IconoFlechaIzquierda from '../icons/icono-flechaIzquierda';
import IconoFlechaDerecha from '../icons/icono-flechaDerecha';
import IconoEditar from '../icons/icono-editar';
import IconoCargandoDefault from '../icons/icono-cargandoDefault';
import IconoCargandoAndroid from '../icons/icono-cargandoAndroid';
import IconoCargandoIOS from '../icons/icono-cargandoIOS';
import IconoWhatsapp from '../icons/icono-Whatsapp';
import IconoDescargar from '../icons/icono-descargar';
import IconoBuscar from '../icons/icono-buscar';
import IconoBasurero from '../icons/icono-basurero';
import IconoClip from '../icons/icono-clip';
import IconoCerrarCirculo from '../icons/icono-cerrarCirculo';
import IconoMovistar from '../icons/icono-movistar';
import IconoCorazonLineal from '../icons/icono-corazonLineal';
import IconoCorazon from '../icons/icono-corazon';


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
                        <IconoCerrar color='Black' size={24} style={{ margin: 10 }} />
                        <IconoChevronAbajo color='Black' size={24} style={{ margin: 10 }} />
                        <IconoChevronArriba color='Black' size={24} style={{ margin: 10 }} />
                        <IconoFlechaIzquierda color='Black' size={24} style={{ margin: 10 }} />
                        <IconoFlechaDerecha color='Black' size={24} style={{ margin: 10 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconoEditar color='Black' size={24} style={{ margin: 10 }} />
                        <IconoCargandoDefault color='Black' size={24} style={{ margin: 10 }} />
                        <IconoCargandoAndroid color='Black' size={24} style={{ margin: 10 }} />
                        <IconoCargandoIOS color='Black' size={24} style={{ margin: 10 }} />
                        <IconoWhatsapp color='Black' size={24} style={{ margin: 10 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconoDescargar color='Black' size={24} style={{ margin: 10 }} />
                        <IconoBuscar color='Black' size={24} style={{ margin: 10 }} />
                        <IconoBasurero color='Black' size={24} style={{ margin: 10 }} />
                        <IconoClip color='Black' size={24} style={{ margin: 10 }} />
                        <IconoCerrarCirculo color='Black' size={24} style={{ margin: 10 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <IconoCarritoCompra color='Black' size={24} style={{ margin: 10 }} />
                        <IconoMovistar color='Black' size={24} style={{ margin: 10 }} />
                        <IconoAgregar color='Black' size={24} style={{ margin: 10 }} />
                        <IconoCorazonLineal color='Black' size={24} style={{ margin: 10 }} />
                        <IconoCorazon color='Black' size={24} style={{ margin: 10 }} />
                    </View>

                </React.Fragment>
            </View>
        </ScrollView>

    );
};

Basic.storyName = 'Iconos'
