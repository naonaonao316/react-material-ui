import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>RAT</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <form className={classes.container}>
        <TextField
          id="name"
          label="Number of keywords"
          className={classes.textField}
          value=""
          margin="normal"
          style={{marginRight: "10px"}}
        />
        <TextField
          id="name"
          className={classes.textField}
          defaultValue="2017-05-24"
          type="date"
          margin="normal"
          style={{marginRight: "10px"}}
        />
        <TextField
          id="name"
          className={classes.textField}
          defaultValue="2017-05-24"
          type="date"
          margin="normal"
          style={{marginRight: "10px"}}
        />
        <Button variant="raised" color="primary" className={classes.button}>
          Search
        </Button>
          </form>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Manual</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <label htmlFor="raised-button-file">
          <Button variant="raised" component="span" className={classes.button}>
            Problem Keyword Upload
          </Button>
        </label>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
