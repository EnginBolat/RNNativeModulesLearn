import { NativeModules } from "react-native";

const AlertModule = NativeModules.AlertModule;

interface AlertInterface {
    showAlert(title: String, message: String): void;
}

class AlertService {
    static showAlert(title: string, message: string) {
        AlertModule.showAlert(title, message);
    }
}
export default AlertService as AlertInterface;