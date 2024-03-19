import { NativeModules } from "react-native";

const AlertService = NativeModules.AlertModule;

interface AlertInterface {
    showAlert(title: String, message: String): void;
}

class AlertServiceClass {
    static showAlert(text: String, message: String) {
        AlertService.showAlert(text, message);
    }
}
export default AlertServiceClass as AlertInterface;