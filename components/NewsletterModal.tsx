import Modal from "@material-ui/core/Modal";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import HubspotForm from "react-hubspot-form";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function NewsletterModal({ open, onClose }: Props) {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div className={classes.paper + " modal"}>
        <h2>Sign up for the newsletter</h2>
        <HubspotForm
          portalId="7055275"
          formId="5a2a11ac-2121-4fa5-a7b3-e04c412c5ad3"
        />

        {/* <h2 id="modal-title">Text in a modal</h2>
        <p id="modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p> */}
      </div>
    </Modal>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);
