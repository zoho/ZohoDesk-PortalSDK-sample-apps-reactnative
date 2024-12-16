#import "AppDelegate.h"
#import "CustomLightTheme.h"
#import "CustomDarkTheme.h"
#import <React/RCTBundleURLProvider.h>
#import "RNZohoDeskPortalConfiguration.h"
#import "RNZohoDeskPortalAPIKit.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"zohoDeskPortalSDKSampleAppsReactNative";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
  ///To use the below  code to set the theme for light and dark
  CustomLightTheme *myCustomLightTheme = [[CustomLightTheme alloc] init];
  CustomDarkTheme *myCustomDarkTheme = [[CustomDarkTheme alloc] init];
  [RNZohoDeskPortalConfiguration updateLightTheme:myCustomLightTheme];//For light
  [RNZohoDeskPortalConfiguration updateDarkTheme:myCustomDarkTheme];// For Dark
  
  ///To use the below  code to set the modal presentation style for SDKs screens
  [RNZohoDeskPortalConfiguration setModalPresentationStyle:UIModalPresentationFullScreen];
  
  ///To set the Custom font for ASAP SDK to use the below  code
  ///And also verify the font assets are added in the react-native project and linked
  [RNZohoDeskPortalConfiguration customFontName:@"Lato-Bold"];
  
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self getBundleURL];
}

- (NSURL *)getBundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  
//  const unsigned char *tokenBytes = deviceToken.bytes;
//    NSString *hexToken = [NSString stringWithFormat:@"%02x%02x%02x%02x%02x%02x%02x%02x",
//                          tokenBytes[0], tokenBytes[1], tokenBytes[2], tokenBytes[3],
//                          tokenBytes[4], tokenBytes[5], tokenBytes[6], tokenBytes[7]];
//  [RNZohoDeskPortalSDK setDeviceIDForNotification:hexToken];
  
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
  // use this method to handle push notification
 
}
@end
