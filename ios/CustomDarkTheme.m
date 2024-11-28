//
//  CustomDarkTheme.m
//  zohoDeskPortalSDKSampleAppsReactNative
//
//  Created by Rajesh R on 28/11/24.
//
#import "CustomDarkTheme.h"
#import <React/RCTRootView.h>

@implementation CustomDarkTheme

- (UIColor *)themeColor {
    return [UIColor colorWithRed:0.1 green:0.5 blue:0.7 alpha:1.0]; // Darker teal for better contrast
}

- (UIColor *)primaryBackgroundColor {
    return [UIColor colorWithRed:0.1 green:0.1 blue:0.1 alpha:1.0]; // Near-black for dark mode
}

- (UIColor *)secondaryBackgroundColor {
    return [UIColor colorWithRed:0.15 green:0.15 blue:0.15 alpha:1.0]; // Slightly lighter than primary background
}

- (UIColor *)primaryTextColor {
    return [UIColor colorWithRed:0.9 green:0.9 blue:0.9 alpha:1.0]; // Near-white for high contrast
}

- (UIColor *)secondaryTextColor {
    return [UIColor colorWithRed:0.7 green:0.7 blue:0.7 alpha:1.0]; // Light gray for secondary text
}

- (UIColor *)placeholderTextColor {
    return [UIColor colorWithRed:0.5 green:0.5 blue:0.5 alpha:1.0]; // Medium gray for placeholders
}

- (UIColor *)iconColor {
    return [UIColor colorWithRed:0.6 green:0.6 blue:0.6 alpha:1.0]; // Light gray for icons
}

- (UIColor *)borderColor {
    return [UIColor colorWithRed:0.1 green:0.5 blue:0.7 alpha:1.0]; // Match themeColor
}

- (UIColor *)separatorColor {
    return [UIColor colorWithRed:0.3 green:0.3 blue:0.3 alpha:1.0]; // Dark gray for separators
}

- (UIColor *)selectedColor {
    return [UIColor colorWithRed:0.0 green:0.4 blue:0.6 alpha:1.0]; // Muted blue for selections
}

- (UIColor *)navigationBarBackgroundColor {
    return [UIColor colorWithRed:0.1 green:0.5 blue:0.7 alpha:1.0]; // Match themeColor
}

- (UIColor *)navigationBarTextColor {
    return [UIColor whiteColor]; // High contrast white
}

- (UIColor *)navigationBarButtonColor {
    return [UIColor colorWithRed:1.0 green:0.3 blue:0.3 alpha:1.0]; // Bright red for buttons
}

- (UIColor *)failureColor {
    return [UIColor colorWithRed:0.8 green:0.2 blue:0.2 alpha:1.0]; // Slightly muted error red
}

@end
