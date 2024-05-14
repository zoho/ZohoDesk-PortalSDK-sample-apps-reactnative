package com.zohodeskportalsdksampleappsreactnative

import android.app.Application
import android.content.Context
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.flipper.ReactNativeFlipper
import com.facebook.soloader.SoLoader
import com.zoho.desk.asap.RNZohodeskPortalSDK
import com.google.firebase.FirebaseApp
import com.google.firebase.messaging.FirebaseMessaging

class MainApplication : Application(), ReactApplication {

  override val reactNativeHost: ReactNativeHost =
      object : DefaultReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> =
            PackageList(this).packages.apply {
              // Packages that cannot be autolinked yet can be added manually here, for example:
              // add(MyReactNativePackage())
            }

        override fun getJSMainModuleName(): String = "index"

        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }

  override val reactHost: ReactHost
    get() = getDefaultReactHost(this.applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()

    FirebaseApp.initializeApp(this)
    
    SoLoader.init(this, false)
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      load()
    }
    ReactNativeFlipper.initializeFlipper(this, reactNativeHost.reactInstanceManager)

    RNZohodeskPortalSDK.setThemeType(RNZohodeskPortalSDK.lightTheme); // use to customize the the theme (dark/light/default)



    // use to customize the theme 
    val themeColorsLight = HashMap<String, String>()
    themeColorsLight[RNZohodeskPortalSDK.colorPrimary] = "#f8d3d3"
    themeColorsLight[RNZohodeskPortalSDK.colorPrimaryDark] = "#da1b60"
    themeColorsLight[RNZohodeskPortalSDK.colorAccent] = "#63351D"
    themeColorsLight[RNZohodeskPortalSDK.textColorPrimary] = "#f8d3d3"
    RNZohodeskPortalSDK.setThemeBuilder(themeColorsLight, false) // False indicates these colors are used for light theme

     val themeColorsDark = HashMap<String, String>()
     themeColorsDark[RNZohodeskPortalSDK.colorPrimary] = "#f8d3d3"
     themeColorsDark[RNZohodeskPortalSDK.colorPrimaryDark] = "#da1b60"
     themeColorsDark[RNZohodeskPortalSDK.colorAccent] = "#63351D"
     themeColorsDark[RNZohodeskPortalSDK.textColorPrimary] = "#f8d3d3"
     RNZohodeskPortalSDK.setThemeBuilder(themeColorsDark, true) // True indicates these colors are used for dark theme

    // For push notification
    FirebaseMessaging.getInstance().token.addOnSuccessListener {
       RNZohodeskPortalSDK.setFirebaseId(it);
    }    
  }
}
