package com.rnnativemodules

import android.view.Gravity
import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.app.AlertDialog
import android.content.Context

class ToastService(private val reactContext:ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "ToastModule"
    }

    @ReactMethod
    fun showToast(message:String){
        val toast = Toast.makeText(reactContext,message,Toast.LENGTH_LONG)
        toast.setGravity(Gravity.CENTER,0,0)
        toast.show();
    }
}