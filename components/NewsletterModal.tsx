import Modal from "@material-ui/core/Modal";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Link from "@material-ui/core/Link";

import NGPVanForm from "./NGPVanForm";

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
          <NGPVanForm formId="https://secure.ngpvan.com/v1/Forms/YSMN-ckcd0ygwC2LGxj2aQ2" />
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
