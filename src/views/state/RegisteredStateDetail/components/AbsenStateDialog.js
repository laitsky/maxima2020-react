import React from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
  Typography,
} from '@material-ui/core';

const AbsenStateDialog = ({
  openAbsenDialog,
  handleAbsenClose,
  handleAbsenState,
  name,
  day,
  kodePresensi,
  setKodePresensi,
  loading,
  error,
}) => (
  <Dialog open={openAbsenDialog} onClose={handleAbsenClose}>
    <DialogTitle id="absen-dialog-title">
      Absen STATE - {name} (Day {day})
    </DialogTitle>
    {loading ? (
      <LinearProgress color="secondary" />
    ) : (
      <>
        <DialogContent>
          <DialogContentText id="absen-dialog-text">
            Masukkan kode presensi yang kamu miliki untuk STATE {name}
          </DialogContentText>
          <TextField
            autoFocus
            value={kodePresensi}
            margin="dense"
            id="kodePresensi"
            label="Kode Presensi"
            type="text"
            onChange={(e) => setKodePresensi(e.target.value)}
            fullWidth
            color="secondary"
          />
          <Typography variant="subtitle1">
            <span style={{ color: 'red' }}>{error}</span>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAbsenClose} color="primary">
            Tutup
          </Button>
          <Button
            onClick={handleAbsenState}
            variant="outlined"
            color="secondary"
          >
            Absen!
          </Button>
        </DialogActions>
      </>
    )}
  </Dialog>
);

export default AbsenStateDialog;
