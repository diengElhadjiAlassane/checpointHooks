import React, { Component } from 'react';
import Header from './components/Header';
import Movies from './components/Movie/Movies';
import MyFunction from './components/Movie/MyFunction';


export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'Movie App'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <div className="mt-5">
                    <div>
                    <MyFunction/>
                    </div>
                    <Movies />
                   
                </div>
            </div>
        );
    }
}
