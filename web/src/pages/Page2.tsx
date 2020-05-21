import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {Button} from "@material-ui/core";

class Page2 extends React.Component<RouteComponentProps> {

    render() {

        return (
            <div className="Page2">
                <h1>Welcome to Page 2</h1>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{color: 'green'}}
                    onClick={() => {
                        this.props.history.push('/');
                    }}
                >
                    Go to Home Page
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{color: 'yellow'}}
                    onClick={() => {
                        this.props.history.push('/page1');
                    }}
                >
                    Return to Page 1
                </Button>

                <p>Add Page two stuff here.</p>
            </div>
        );
    }
}

export default Page2;
