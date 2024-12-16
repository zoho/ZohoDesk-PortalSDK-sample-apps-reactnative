#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>

#import <UserNotifications/UserNotifications.h> // Import UserNotifications framework

@interface AppDelegate : RCTAppDelegate <UNUserNotificationCenterDelegate> // Conform to UNUserNotificationCenterDelegate

@end
