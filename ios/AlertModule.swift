//
//  AlertModule.swift
//  RNNativeModules
//
//  Created by Engin Bolat on 19.03.2024.
//

import Foundation
import UIKit
import React

@objc(AlertModule)
class AlertModule: NSObject, RCTBridgeModule {
    
  static func moduleName() -> String! {
    return "AlertModule"
  }
    
  @objc
  func showAlert(_ title: NSString, message: NSString) {
    DispatchQueue.main.async {
        let alertController = UIAlertController(title: title as String, message: message as String, preferredStyle: .alert)
        alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
        UIApplication.shared.keyWindow?.rootViewController?.present(alertController, animated: true, completion: nil)
    }
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
