import React, { useEffect } from "react";
import { View, Text, Alert } from 'react-native';
import messaging from "@react-native-firebase/messaging";

const App = () => {
    useEffect(() => {
        requestNotificationPermission();
    }, []);

    const requestNotificationPermission = async () => {
        const granted = await messaging().requestPermission();

        const enabled =
            granted === messaging.AuthorizationStatus.AUTHORIZED ||
            granted === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
            const token = await messaging().getToken();
            const url = "enteryourAPIurl"
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userId: "userId124",
                        deviceId: "deviceId124",
                        fcmToken: token
                    }),
                })
                    .catch(error => {
                        console.error(error);
                        Alert.alert("Alert", "Network request failed");
                    });
            } catch (error) {
                console.error("Error:", error);
                Alert('Warning', 'error')
            }
        }
    }


    return (
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Notification messaging</Text>
        </View>
    )
}

export default App;