import { Component } from 'react';

export default class PropsWithClassComp extends Component {
    render() {
        return (
            <div>{this.props.message}</div>
        );
    }
}
