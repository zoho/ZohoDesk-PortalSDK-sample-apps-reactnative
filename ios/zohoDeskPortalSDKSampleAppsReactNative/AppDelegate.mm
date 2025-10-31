#import "AppDelegate.h"
#import "CustomLightTheme.h"
#import "CustomDarkTheme.h"
#import <React/RCTBundleURLProvider.h>
#import "RNZohoDeskPortalConfiguration.h"
#import "RNZohoDeskPortalAPIKit.h"
#import <UserNotifications/UserNotifications.h> 

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
  [self enablePushNotification:application];
  
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

- (void)enablePushNotification:(UIApplication *)application {
    // iOS 10 support
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    center.delegate = self;

    [center requestAuthorizationWithOptions:(UNAuthorizationOptionBadge | UNAuthorizationOptionAlert | UNAuthorizationOptionSound)
                          completionHandler:^(BOOL granted, NSError * _Nullable error) {
        // You can handle the response here if needed
    }];

    [application registerForRemoteNotifications];
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
  NSMutableString *tokenString = [NSMutableString string];
  const unsigned char *bytes = (const unsigned char *)[deviceToken bytes];
  for (NSInteger i = 0; i < deviceToken.length; i++) {
    [tokenString appendFormat:@"%02X", bytes[i]];
  }
  
 [RNZohoDeskPortalSDK setDeviceIDForNotification:tokenString];
  
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
  // use this method to handle push notification
  [RNZohoDeskPortalConfiguration processRemoteNotification:userInfo];
}
@end
