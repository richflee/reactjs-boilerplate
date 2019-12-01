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
        let explanatoryText; 
        if (this.state.revealExplanatoryInfo) {
            explanatoryText = `Welcome to my cool React boilerplate. As you can see I'm trying to jam as many useful tools into it, such as: Styled Components, Jest, Typescript and more.`;
        } else {
            explanatoryText = ``;
        }
        return <p>{explanatoryText}</p>;
    }

    _toggleMessageButtonText() {
        if (this.state.revealExplanatoryInfo) {
            return `Hide welcome message`;
        } else {
            return `Show welcome message`;
        }
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <Button onclick={this._onToggleTextDisplay}>{this._toggleMessageButtonText()}</Button>
                {this._renderExplanatoryText()}
            </div>
        );
    }
}