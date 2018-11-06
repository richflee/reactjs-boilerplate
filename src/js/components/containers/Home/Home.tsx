import * as React from 'react';
import Button from '../../components/Button/Button';


interface HomeComponentState {
    revealExplanatoryInfo: boolean
}

export default class Home extends React.Component<any, HomeComponentState> {
    constructor(props: any) {
        super(props);

        this.state = {
            revealExplanatoryInfo: false
        } as HomeComponentState;

        this._onToggleTextDisplay = this._onToggleTextDisplay.bind(this);
    }

    _onToggleTextDisplay() {
        const reveal = !this.state.revealExplanatoryInfo;
        this.setState({
            revealExplanatoryInfo: reveal
        });
    }

    _renderExplanatoryText() {
        if (this.state.revealExplanatoryInfo) {
            return <p>Welcome to my cool React boilerplate. As you can see I'm trying to jam as many useful tools into it, such as: Styled Components, Jest, Typescript and more.</p>;
        }
        return;
    } 

    render() {
        return (
            <div>
                <h2>Home</h2>
                <Button onclick={this._onToggleTextDisplay}>Styled button 1</Button>
                {this._renderExplanatoryText()}
            </div>
        );
    }
}