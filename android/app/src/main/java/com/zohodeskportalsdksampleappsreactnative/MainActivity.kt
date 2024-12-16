package com.zohodeskportalsdksampleappsreactnative
import android.graphics.Typeface
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.google.firebase.FirebaseApp
import com.google.firebase.messaging.FirebaseMessaging
import com.zohodeskportalapikit.RNZohoDeskPortalSDK
import com.zohodeskportalconfiguration.RNZDPFont
import com.zohodeskportalconfiguration.RNZohoDeskPortalConfigurationModule


class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "zohoDeskPortalSDKSampleAppsReactNative"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(null)
  }

  override fun onPause() {
    super.onPause()

    // To set the customTheme for the ASAP SDK
      val lightThemeColors = hashMapOf(
          "colorPrimary" to "#3399CC",
          "windowBackground" to "#F2F2F2",
          "itemBackground" to "#E6E6E6",
          "colorAccent" to "#007ACC",
          "iconTint" to "#4D4D4D",
          "divider" to "#CCCCCC",
          "listSelector" to "#3399CC",
          "formFieldBorder" to "#3399CC",
          "errorColor" to "#FF3333",
          "textColorPrimary" to "#1A1A1A",
          "textColorSecondary" to "#666666",
          "colorPrimaryDark" to "#007ACC",
          "colorOnPrimary" to "#FFFFFF",
          "hint" to "#999999"
      )
      val darkThemeColors = hashMapOf(
          "colorPrimary" to "#1A88B0",
          "windowBackground" to "#121212",
          "itemBackground" to "#1E1E1E",
          "colorAccent" to "#005F99",
          "iconTint" to "#BBBBBB",
          "divider" to "#333333",
          "listSelector" to "#1A88B0",
          "formFieldBorder" to "#1A88B0",
          "errorColor" to "#FF4C4C",
          "textColorPrimary" to "#E6E6E6",
          "textColorSecondary" to "#B3B3B3",
          "colorPrimaryDark" to "#004A66",
          "colorOnPrimary" to "#FFFFFF",
          "hint" to "#888888"
      )


      RNZohoDeskPortalConfigurationModule.setThemeBuilder(lightThemeColors,false)//For light theme
    RNZohoDeskPortalConfigurationModule.setThemeBuilder(darkThemeColors,true)// For dark theme

      // To set the Custom font
      val medium = Typeface.createFromAsset(assets, "fonts/Lato-Bold.ttf")// provide your font file for medium
      val regular = Typeface.createFromAsset(assets, "fonts/Lato-Bold.ttf")// provide your font file for regular
      val light = Typeface.createFromAsset(assets, "fonts/Lato-Bold.ttf")// provide your font file for light
      val thin = Typeface.createFromAsset(assets, "fonts/Lato-Bold.ttf")// provide your font file for thin
      val bold = Typeface.createFromAsset(assets, "fonts/Lato-Bold.ttf")// provide your font file for bold
      val black = Typeface.createFromAsset(assets, "fonts/Lato-Bold.ttf")// provide your font file for black
      val semiBold =  Typeface.createFromAsset(assets, "fonts/Lato-Bold.ttf")// provide your font file for semiBold
      val heave = Typeface.createFromAsset(assets, "fonts/Lato-Bold.ttf")// provide your font file for heave
      val ultraLight = Typeface.createFromAsset(assets, "fonts/Lato-Bold.ttf")// provide your font file for ultralight
      val unRecognised = Typeface.createFromAsset(assets, "fonts/Lato-Bold.ttf")// provide your font file for unrecognised
      RNZohoDeskPortalConfigurationModule.setCustomFont(RNZDPFont.Builder()
          .setMedium(medium)
          .setRegular(regular)
          .setLight(light)
          .setBold(bold)
          .setBlack(black)
          .setThin(thin)
          .setSemiBold(semiBold)
          .setHeavy(heave)
          .setUltraLight(ultraLight)
          .setUnRecognised(unRecognised)
          .build())

      FirebaseApp.initializeApp(this)
      // For push notification
      FirebaseMessaging.getInstance().token.addOnSuccessListener {
          RNZohoDeskPortalSDK.setFirebaseId(it);
      }

  }
}
