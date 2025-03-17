"use client"

import React, { useCallback, useState } from 'react'
import styles from './FloatActionButton.module.scss'
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Snackbar, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import RefreshIcon from "@mui/icons-material/Refresh";
import { throttle } from '@/utils/helpers/throttle';


export default function FloatActionButton({forecastData, handleReload}) {

  const [openModal, setOpenModal] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [status, setStatus] = useState("error");


  const handlSave = () => {};

  const handleCopy = async () => {
    try {
      const text = JSON.stringify(forecastData, null, 2);
      await navigator.clipboard.writeText(text);
      if (text) {
        setStatus("success");
      }
    } catch (error) {
      console.log("failed to copy", error);
    } finally {
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false);
      }, 2000);
    }
  };
  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    setOpenModal(!openModal);
  };
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy", action: handleCopy },
    { icon: <SaveIcon />, name: "Save", action: handlSave },
    { icon: <PrintIcon />, name: "Print", action: handlePrint },
    { icon: <ShareIcon />, name: "Share", action: handleShare },
    { icon: <RefreshIcon />, name: "Refresh Data", action: handleReload },
  ];

  return (
    <div className={styles.fab}>
        <SpeedDial
          ariaLabel="SpeedDial"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.action}
            />
          ))}
        </SpeedDial>

        <Snackbar
          open={openAlert}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity={status} sx={{ width: "100%" }}>
            Forecast copied to clipboard
          </Alert>
        </Snackbar>

        <Dialog open={openModal} onClose={() => setOpenModal(!openModal)}>
          <DialogTitle>Share</DialogTitle>
          <DialogContent>

            <div className={styles.modal}>
            <ul className={styles.wrapper}>
      <li className={`${styles.icon} ${styles.facebook}`}>
        <span className={styles.tooltip}>Facebook</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1.2em" viewBox="0 0 320 512">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
        </svg>
      </li>

      <li className={`${styles.icon} ${styles.twitter}`}>
        <span className={styles.tooltip}>Twitter</span>
        <svg className={styles.twitter} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" height="1.8em">
          <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
        </svg>
      </li>

      <li className={`${styles.icon} ${styles.instagram}`}>
        <span className={styles.tooltip}>Instagram</span>
        <svg viewBox="0 0 16 16" className="bi bi-instagram" fill="currentColor" height="1.2em" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003z"></path>
        </svg>
      </li>
    </ul>
            </div>

          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenModal(!openModal)}>Close</Button>
          </DialogActions>
        </Dialog>
    </div>
  )
}

