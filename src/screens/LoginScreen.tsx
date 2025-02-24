/* eslint-disable react-native/no-inline-styles */

import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button, } from 'react-native-paper';

const LoginScreen = () => {
    const insets = useSafeAreaInsets();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const safePadding = {
        paddingTop: insets.top + screenHeight * 0.05,
        paddingBottom: insets.bottom + screenHeight * 0.05,
        paddingLeft: insets.left + screenWidth * 0.05,
        paddingRight: insets.right + screenWidth * 0.05,
    };

    return (
        <SafeAreaView style={[styles.safeArea, {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }]} >
            {/* container */}
            <View style={[styles.container, safePadding]}>
                <View id="logo">
                    <Image
                        source={require('../assets/images/logo-banner-new-hsv.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                <View id="form">
                    <View id="form-userid" style={{ marginBottom: 32 }}>
                        <Text style={{ color: '#8F9BB3', fontSize: 12, fontWeight: '500', marginBottom: 8 }}>User ID</Text>
                        <TextInput
                            style={{ backgroundColor: '#323644', borderWidth: 1, borderRadius: 8, borderColor: '#6f717b', paddingHorizontal: 16, paddingVertical: 11, fontSize: 15 }}
                            autoCapitalize="none"
                            placeholder="Vui lòng nhập ID của bạn."
                            placeholderTextColor={'#999'}
                        />
                    </View>
                    <View id="form-password" style={{ marginBottom: 32 }}>
                        <Text style={{ color: '#8F9BB3', fontSize: 12, fontWeight: '500', marginBottom: 8 }}>Password</Text>
                        <TextInput
                            style={{ backgroundColor: '#323644', borderWidth: 1, borderRadius: 8, borderColor: '#6f717b', paddingHorizontal: 16, paddingVertical: 11, fontSize: 15 }}
                            autoCapitalize="none"
                            placeholder="Vui lòng nhập mật khẩu của bạn."
                            placeholderTextColor={'#999'}
                        />
                    </View>
                    <Button mode="contained" style={{ marginTop: 20, backgroundColor: '#0089FD', borderRadius: 8 }} onPress={() => console.log('Pressed')}>LOGIN</Button>
                </View>
                <View style={{ margin: '5%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{}}>
                        <Text style={{ color: '#fff' }}>Remember me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}}>
                        <Text style={{ color: '#fff' }}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'plum',
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    logo: {
        width: 200,  // Adjust based on your design
        height: 100, // Adjust based on your design
        marginBottom: 20,
        alignSelf: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#8F9BB3',
    },
});

export default LoginScreen;
