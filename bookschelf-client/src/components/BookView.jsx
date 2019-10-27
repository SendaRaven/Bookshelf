import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function BookView(props) {
    const book = {
        "information": {
            "author": {
                "firstName": "Yaren",
                "lastName": "Buss"
            },
            "title": "Phased uniform matrices",
            "publication": "1828-04-23T19:29:43.227Z",
            "summary": "Dolorum voluptate dicta dolorem ea eius quo. Consequatur voluptatem quo. Sed velit nobis nesciunt dignissimos. Possimus sit quisquam deserunt numquam nesciunt sunt quibusdam. Saepe optio unde adipisci voluptate."
        },
        "_id": "5db2219145411f0570e60371",
        "category": "Garden",
        "status": "available",
        "__v": 0
    }//props.book;
    console.log(props);

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
          </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={book.information.title}
                subheader={"by" + book.information.author.firstName + " " + book.information.author.lastName}
            />
            {/* <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
            /> */}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {book.information.summary}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                {/* <Typography variant="body2" color="textSecondary">
                    Status: {book.status}
                </Typography> */}
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <Typography variant="body2" color="textSecondary" component>
                        Category: {book.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component>
                        Publication Date: {book.information.publication}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
