import { NativeModules } from "react-native";

const ToastService = NativeModules.ToastModule;
interface ToastInterface {
    showToast(text: String): void;
}

class ToastServiceClass {
    static showToast(text: String) {
        ToastService.showToast(text);
    }
}
export default ToastServiceClass as ToastInterface;