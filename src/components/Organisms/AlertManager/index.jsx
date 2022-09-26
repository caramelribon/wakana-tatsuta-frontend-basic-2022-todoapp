import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert/index";

const AlertManager = () => {
  //Contextを取得(このアプリ共通のStateを呼び出す)
  const AlertHandlerContext = useAlertHandlerContext();

  useEffect(() => {
    console.log(AlertHandlerContext.visible);
    // 5秒後にアラートを消す
    if (AlertHandlerContext.visible === true) {
      setTimeout(AlertHandlerContext.closeAlert, 5000);
    }
  }, [AlertHandlerContext.visible]);

  return (
    <Alert
      alertVisible={AlertHandlerContext.visible}
      alertText={AlertHandlerContext.errorText}
    ></Alert>
  );
};

export default AlertManager;
