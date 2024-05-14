package com.zohodeskportalsdksampleappsreactnative

import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage
import com.zoho.desk.asap.RNZohodeskPortalSDK

class AppFirebaseMessagingService: FirebaseMessagingService() {

    override fun onMessageReceived(message: RemoteMessage) {
        super.onMessageReceived(message)
        // to handle push notification default by SDK
        RNZohodeskPortalSDK.handleNotification(getApplicationContext(), message.data, R.mipmap.ic_launcher);
    }

    override fun onNewToken(token: String) {
        super.onNewToken(token)
    }
}