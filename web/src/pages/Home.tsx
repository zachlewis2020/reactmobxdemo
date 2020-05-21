import React from 'react';
import { RouteComponentProps} from "react-router-dom";
import {Button} from "@material-ui/core";

class Home extends React.Component<RouteComponentProps> {

    render() {

        return (
            <div className="App">
              <h1>Home</h1>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{color: 'green'}}
                    onClick={() => {
                        this.props.history.push('/page1');
                    }}
                >
                    Page 1
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    style={{color: 'blue'}}
                    onClick={() => {
                        this.props.history.push('/page2');
                    }}
                >
                    Page 2
                </Button>


            </div>
        );
    }
}

export default Home;
