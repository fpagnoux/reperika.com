import Modal from "@material-ui/core/Modal";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import HubspotForm from "react-hubspot-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "@material-ui/core/Link";

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
        <div className="modal-header">
          <Link component="button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </Link>
        </div>
        <div className={classes.content}>
          <h2>Sign up for the newsletter</h2>
          <HubspotForm
            portalId="7055275"
            formId="5a2a11ac-2121-4fa5-a7b3-e04c412c5ad3"
          />
        </div>
      </div>
    </Modal>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
    },
    content: {
      padding: theme.spacing(2, 4, 3),
    },
  })
);
