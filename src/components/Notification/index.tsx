import { useAlert } from "@/hooks/useAlert";
import { Alert, Snackbar } from "@mui/material";
import React from "react";

export const Notification: React.FC = () => {
  const { alertOption, onAlertClose } = useAlert();

  return (
    <Snackbar
      open={alertOption.isOpen}
      autoHideDuration={alertOption.hideDuration}
      onClose={onAlertClose}
    >
      <Alert
        severity={alertOption.type}
        variant="filled"
        sx={{ width: "100%", color: "white" }}
      >
        {alertOption.message}
      </Alert>
    </Snackbar>
  );
};
