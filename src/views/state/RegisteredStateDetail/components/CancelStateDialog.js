import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

export default ({
  openCancelDialog,
  handleCancelClose,
  handleStateCancellation,
  name,
}) => (
  <Dialog open={openCancelDialog} onClose={handleCancelClose}>
    <DialogTitle id="cancel-dialog-title">
      Batalkan STATE ini?
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="cancel-dialog-desc">
        Apakah kamu yakin untuk membatalkan STATE
        <span style={{ fontWeight: 900, marginLeft: 5 }}>
          &quot;{name}&quot;
        </span>
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCancelClose} color="primary">
        Kembali
      </Button>
      <Button
        onClick={handleStateCancellation}
        variant="outlined"
        color="primary"
      >
        Ya, batalkan!
      </Button>
    </DialogActions>
  </Dialog>
);
