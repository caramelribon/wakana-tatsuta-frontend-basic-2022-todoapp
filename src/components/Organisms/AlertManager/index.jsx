import React from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert/index";

const AlertManager = () => {
  //Contextを取得(このアプリ共通のStateを呼び出す)
  const AlertHandlerContext = useAlertHandlerContext();

  if (AlertHandlerContext.visible === true) {
    setTimeout(AlertHandlerContext.closeAlert, 5000);
  }

  return (
    <Alert
      visible={AlertHandlerContext.visible}
      errorText={AlertHandlerContext.errorText}
    ></Alert>
  );
};

export default AlertManager;
