import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import {Button} from "@material-ui/core";
import {observable, observe, action, computed} from "mobx"
import NetInfo from "@react-native-community/netinfo";

interface DataStore {
    name: string
}

class Page1 extends React.Component<RouteComponentProps, DataStore> {
    state = {
     name: ''
    };

    person = observable(
        {
            // observable properties:
            name: "John",
            age: 42,
            online: navigator.onLine,
            // computed property:
            get labelText() {
                return navigator.onLine ? `${this.name} (age: ${this.age})` : this.name
            },

            setName(name: string) {
                this.name = name;
            },

            setAge(age: number) {
                this.age = age
            }
        },
        {
            setName: action,
            setAge: action
        }
    )

    @computed get data() {
        if ( navigator.onLine) {
            return this.person.name  + " :Online"
        } else {
            return "Offline: " + this.person.name
        }
    }



    unsubscribe = NetInfo.addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        if (state.isConnected) {
            this.person.name = "online now";
            this.setState({name: `${this.person.name}`})
            console.log("nbame: " + this.person.name)
        } else {
            this.person.setName("Offline now");
            this.setState({name: `${this.person.name}`})
            console.log("nbame: " + this.person.name)
        }
    });

    isChanged = observe(this.person, change => {
        console.log("Changed:" + `${change.type} ` )
        return this.person.name
    });


    render() {

        return (
            <div className="Page1">
                <h1>Wecome to Home Page #1</h1>
                <h2>{this.person.labelText}</h2>
                <h1>Online:({this.state.name})</h1>
                <Button
                    variant="contained"
                    style={{color: 'green'}}
                    onClick={() => {
                        this.props.history.push('/');
                    }}
                >
                    Go To Home Page
                </Button>
                <p>Add Home Page Stuff Here</p>
                <Button
                    variant="contained"
                    style={{color: 'green'}}
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
