package com.rnnativemodules

import android.view.Gravity
import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.app.AlertDialog
import android.content.Context

class AlertService(private val reactContext:ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "AlertModule"
    }

    @ReactMethod
    fun showAlert(title: String, message: String) {
        val builder = AlertDialog.Builder(reactContext.getCurrentActivity() as Context)
        builder.setTitle(title)
        builder.setMessage(message)
        builder.setPositiveButton(android.R.string.ok) { dialog, _ -> dialog.dismiss() }
        val dialog = builder.create()
        dialog.show()
    }
}