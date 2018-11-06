// Button.tsx
import * as React from 'react';


const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

interface ButtonComponentState {
    class: string
}

interface ButtonComponentProps {
}

export default class Button extends React.Component<ButtonComponentProps, ButtonComponentState> {
    constructor(props: ButtonComponentProps) {
        super(props);

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);

        this.state = {
            class: STATUS.NORMAL,
        } as ButtonComponentState;
    }

    _onMouseEnter() {
        this.setState({ class: STATUS.HOVERED });
    }

    _onMouseLeave() {
        this.setState({ class: STATUS.NORMAL });
    }

    render() {
        return (
            <button type="button"
                className={this.state.class}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}>
                {this.props.children}
            </button>
        );
    }
}