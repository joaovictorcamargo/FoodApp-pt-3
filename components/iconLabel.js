import React from 'react';
import { View, Text, Image } from 'react-native';
import {FONTS, SIZES} from '../constants';

const iconLabel = ({containerStyle, icon, iconStyle, label, labelStyle}) => {
    return (
        <View
        style={{
            flexDirection: 'row',
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            ...containerStyle
        }}
        >
            <Image
            source={icon}
            style={{
                height: 20,
                width: 20,
                ...iconStyle
            }}
            />

            <Text
            style={{
            marginLeft: SIZES.base,
            ...FONTS.body3,
            ...labelStyle
            }}


            >
                {label}
            </Text>
        </View>
    )
}

export default iconLabel
