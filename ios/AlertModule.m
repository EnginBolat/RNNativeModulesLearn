//
//  AlertModule.m
//  RNNativeModules
//
//  Created by Engin Bolat on 19.03.2024.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(AlertModule, NSObject)

RCT_EXTERN_METHOD(showAlert:(NSString *)title message:(NSString *)message)
@end
