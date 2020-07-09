import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }));

class allowance extends Component{
    constructor(){
        super();
        this.state={
            allowances:[],
        };

    }

    componentWillMount() {
        fetch('http://127.0.0.1:8000/allowances')
        .then(data=>{  

            return data.json();      

        }).then(data=> {          

            this.setState({allowances : data});

            console.log("allowance state",this.state.allowances);
        })

    }



    render() {
        const classes = useStyles();
        return (
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Allow ID</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Allow Amount</TableCell>
                    <TableCell align="right">AllowType</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.allowances.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.AllowID}
                      </TableCell>
                      <TableCell align="right">{row.AllowDesc}</TableCell>
                      <TableCell align="right">{row.AllowAmt}</TableCell>
                      <TableCell align="right">{row.AllowType}</TableCell>                    
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          );}

}

export default allowance;