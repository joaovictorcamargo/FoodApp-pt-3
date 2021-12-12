import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Header, IconButton, TextButton, FormInputCheck} from '../../components';
import FormInput from '../../components/FormInput';
import { FONTS, SIZES, COLORS, icons, images } from '../../constants';
import {utils} from '../../utils';

const AddCard = ({ navigation, route }) => {

    const [selectedCard, setSelectedCard] = useState(null)
    const [cardNumber, setCardNumber] = useState("")
    const [cardNumberError, setCardNumberError] = useState("")
    const [cardName, setCardName] = useState("")
    const [cardNameError, setCardNameError] = useState("")
    const [expiredDate, setExpiredDate] = useState("")
    const [expiredDateError, setExpiredDate] = useState("")
    const [cvv, setCvv] = useState("")
    const [cvvError, setCvvError] = useState("")
    const [isRemember, setIsRemember] = useState("")


        function renderHeader() {
            return(
                <Header
                title="ADD NEW CARD"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    <IconButton
                    icon={icons.back}
                    containerStyle={{
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: SIZES.radius,
                        borderColor: COLORS.gray2
                    }}
                    iconStyle={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray2
    
                    }}
                    onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <View
                    style={{
                        width: 40
                    }}
                    />
                }
                />
            )
        }  
    
        function renderCard() {
            return(
                <ImageBackground
                source={images.card}
                style={{
                    height: 200,
                    width: "100%",
                    marginTop: SIZES.radius,
                    borderRadius: SIZES.radius,
                    overflow: 'hidden'
                }}
                >

                    {/*Logo*/}
                    <Image
                    source={selectedCard?.icon}
                    resizeMode="contain"
                    style={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        height: 40,
                        width: 80,
                    }}
                    />

                    {/*Details*/}
                    <View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        right: 0,
                        left: 0,
                        paddingHorizontal: SIZES.padding
                    }}
                    >
                        <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h3
                        }}
                        >
                            {cardName}
                        </Text>

                        <View
                        style={{
                            flexDirection: 'row'
                        }}
                        >
                            <Text
                            style={{
                                flex: 1,
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                            >{cardNumber}</Text>

                            <Text style={{
                              color: COLORS.white,
                              ...FONTS.body3
                            }}>{expiryDate}</Text>

                        </View>


                    </View>

                </ImageBackground>
            )
        }

        function renderForm() {
            return(
                <View
                style={{
                    marginTop: SIZES.padding * 2
                }}
                >
                  {/*Card Number*/}
                  <FormInput
                  label="Card Number"
                  KeyboardType="number-pad"
                  maxLength={19}
                  value={cardNumber}
                  onChange={(value) => {
                      setCardNumber(value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim())
                      utils.validateInput(value, 19, setCardNameError)
                  }}
                  errorMsg={cardNumberError}
                  appendComponent={
                      <FormInputCheck
                      value={cardNumber}
                      error={cardNumberError}
                      />
                  }
                  />
                </View>

            )
        }

        useEffect(() => {
            
            let {selectedCard} = route.
            
            setSelectedCard(selectedCard)
            
        }, [])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/*Header*/}
            {renderHeader()}

            {/*Body*/}
            <KeyboardAwareScrollView
            keyboardDismissMode="on-drag"
            contentContainerStyle={{
                flexGrow: 1,
                paddingHorizontal: SIZES.padding
            }}
            >

                {/*Card*/}
                {renderCard()}

                {/*Forms*/}
                {renderForm()}


            </KeyboardAwareScrollView>

            {/*Footer*/}
        </View>
    )
}

export default AddCard;