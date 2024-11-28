//
//  CustomTheme.m
//  zohoDeskPortalSDKSampleAppsReactNative
//
//  Created by Rajesh R on 25/11/24.
//


#import "CustomTheme.h"
#import <React/RCTRootView.h>


@implementation CustomTheme

- (UIColor *)themeColor {
    return [UIColor colorWithRed:0.2 green:0.6 blue:0.8 alpha:1.0]; // Custom teal color
}

- (UIColor *)primaryBackgroundColor {
    return [UIColor colorWithRed:0.95 green:0.95 blue:0.95 alpha:1.0]; // Light gray
}

- (UIColor *)secondaryBackgroundColor {
    return [UIColor colorWithRed:0.9 green:0.9 blue:0.9 alpha:1.0]; // Slightly darker gray
}

- (UIColor *)primaryTextColor {
    return [UIColor colorWithRed:0.1 green:0.1 blue:0.1 alpha:1.0]; // Dark charcoal
}

- (UIColor *)secondaryTextColor {
    return [UIColor colorWithRed:0.4 green:0.4 blue:0.4 alpha:1.0]; // Medium gray
}

- (UIColor *)placeholderTextColor {
    return [UIColor colorWithRed:0.6 green:0.6 blue:0.6 alpha:1.0]; // Soft gray
}

- (UIColor *)iconColor {
    return [UIColor colorWithRed:0.3 green:0.3 blue:0.3 alpha:1.0]; // Dim gray
}

- (UIColor *)borderColor {
    return [UIColor colorWithRed:0.2 green:0.6 blue:0.8 alpha:1.0]; // Match themeColor
}

- (UIColor *)separatorColor {
    return [UIColor colorWithRed:0.8 green:0.8 blue:0.8 alpha:1.0]; // Light separator gray
}

- (UIColor *)selectedColor {
    return [UIColor colorWithRed:0.0 green:0.5 blue:0.8 alpha:1.0]; // Darker blue
}

- (UIColor *)navigationBarBackgroundColor {
    return [UIColor colorWithRed:0.2 green:0.6 blue:0.8 alpha:1.0]; // Match themeColor
}

- (UIColor *)navigationBarTextColor {
    return [UIColor whiteColor]; // Contrast white
}

- (UIColor *)navigationBarButtonColor {
    return [UIColor colorWithRed:0.8 green:0.2 blue:0.2 alpha:1.0]; // Vibrant red
}

- (UIColor *)failureColor {
    return [UIColor colorWithRed:1.0 green:0.2 blue:0.2 alpha:1.0]; // Bright error red
}

@end
