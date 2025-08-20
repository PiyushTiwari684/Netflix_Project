import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { setOpen } from "../redux/movieSlice";
import Vediobackground from "./Vediobackground";
import useMovieTrailerForDialog from "../customHooks/useMovieTrailerForDialouge";

export default function MovieDialouge() {
  // const [open, setOpen] = React.useState(false);
  const {open,movieId:id} = useSelector((store) => store.movie);

  console.log(id);
  

  const dispatch = useDispatch();
  
  const handleClose = () => {
    dispatch(setOpen(false));
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Vediobackground movieId={id} bool={true}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
