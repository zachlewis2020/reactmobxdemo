import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import { Button } from "@material-ui/core";
import { observable, action, computed } from "mobx"

class DataStore {
    @observable data: any
}

class Page1 extends React.Component<RouteComponentProps, DataStore> {


    @computed get data() {
        alert('works:(' + navigator.onLine + ')')
        return navigator.onLine
    }

    person = observable(
        {
            // observable properties:
            name: "John",
            age: 42,
            // computed property:
            get labelText() {
                return navigator.onLine ? `${this.name} (age: ${this.age})` : this.name
            },

            setAge(age: number) {
                this.age = age
            }
        },
        {
            setAge: action
        }
    )

    render() {

        return (
            <div className="Page1">
                <h1>Wecome to Home Page #1</h1>
                <h2>{this.person.labelText}</h2>
                <h1>Online:({this.data.toString()})</h1>
                <Button
                    variant="contained"
                    style={{ color: 'green' }}
                    onClick={() => {
                        this.props.history.push('/');
                    }}
                >
                    Go To Home Page
                    </Button>
                <p>Add Home Page Stuff Here</p>
                <Button
                    variant="contained"
                    style={{ color: 'green' }}
                    onClick={() => {
                        this.props.history.push('/page2');
                    }}
                >
                    Go To Page #2
                    </Button>
                <p>Add Home Page Stuff Here</p>
            </div>
        );
    }
}

export default Page1;
