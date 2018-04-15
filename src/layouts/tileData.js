// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ThumbsUpDownIcon />
      </ListItemIcon>
      <ListItemText primary="Evaluation" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VisibilityIcon />
      </ListItemIcon>
      <ListItemText primary="Analysis" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="Requests" />
    </ListItem>
  </div>
);

