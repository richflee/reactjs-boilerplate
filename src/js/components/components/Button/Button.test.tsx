// Link.react.test.js
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from './Button';

test('Button changes the class when hovered', () => {
    const component = renderer.create(
        <Button>Foo</Button>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});