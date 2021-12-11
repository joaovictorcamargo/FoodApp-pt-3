import React from 'react';
import { View, Text } from 'react-native';
import { IconButton } from '../components';
import { FONTS, COLORS, icons, SIZES } from '../constants';

const StepperInput = (containerStyle, value = 1, onAdd, onMinus) => {
    return (
        <View
        style={{
            flexDirection: 'row',
            height: 60,
            width: 130,
            backgroundColor: COLORS.lightGray2,
            borderRadius: SIZES.radius,
            ...containerStyle
        }}
        >
            <IconButton
            containerStyle={{
                width: 50,
                alignItems: 'center',
                justifyContent: 'center' 
            }}
            icon={icons.minus}
            iconStyle={{
                height: 25,
                width: 25,
                tintColor: value > 1 ? COLORS.primary : COLORS.gray
            }}
            />
        </View>
    )
}

export default StepperInput
