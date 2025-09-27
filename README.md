1. What is JSX, and why is it used?

JSX stands for JavaScript XML, it is a syntax extension for JS that allows to
write HTML like code in the JS.

2. What is the difference between State and Props?

State is used within a component, Props are data passed from parent component to
child component.

In State, component can changed the data, Props is Read-only, child component
can't change the data

3. What is the useState hook, and how does it work?

The useState hook is a build-in React function that allows to add changeable
data state to functional component.

Syntax=> const [stateValue, setStateValue] = useState(initialValue);

Here, InitialValue is a initial value returns when the component first renders.

stateValue is the current state of the value

setStateValue is the setter function that allows to update the stateValue

4. How can you share state between components in React?

State Lifting or Lifting State Up is the way to share state between components
in React.

We can pass the state as props in a component, then receive the props as
destructuring in a component function.

5. How is event handling done in React?

Event handling in React is similar to how it's done in plain HTML, but with a
few key differences based on React's philosophy.

Here, tells React to run handleClick() when the button is clicked.

The function is not called immediately.
