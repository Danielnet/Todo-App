import React, { PureComponent, Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'


const styles = {
    root: {
        fontStyle: 'italic',
        fontSize: '1rem',
        marginLeft: '10px',
    },
};

class Header extends PureComponent {

    date() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        today = weekday[today.getDay()] + ' ' + mm + '/' + dd + '/' + yyyy;
        return today
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className="headerContainer">
                    <Typography className="headerHeadline" variant="h2" style={{ color: '#ff5400' }}>
                        Todo List
                    </Typography>
                    <div className="loadingSpinnerWrapper">
                        {this.props.loading && <CircularProgress style={{ color: '#ff5400' }} />}
                    </div>
                </div>
                <Typography className={classes.root} variant="caption" gutterBottom>
                    {this.date()}
                </Typography>
                <Divider />
            </Fragment>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
};


export default withStyles(styles)(Header)


