// Button.tsx
import * as React from 'react';
import styled from 'styled-components';


const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

interface ButtonComponentState {
    class: string
}

interface ButtonComponentProps {
    onclick?: () => any
}


const StyledButton = styled.button`
    background-color: #6ba8a9;
    border: none;
    border-radius: 0.33em;
    color: #fff;
    font-size: 1em;
    padding: 0.8em;
    &:active {
        background-color: #357376;
    }
`;



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
            <StyledButton type="button"
                className={this.state.class}
                onClick={this.props.onclick}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}>
                {this.props.children}
            </StyledButton>
        );
    }
}