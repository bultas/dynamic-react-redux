# dynamic-react-redux

```
const Connector = connect((state, { selector }) => {
    return selector(state);
})(function Connector({ children, ...rest }) {
    return children(rest);
});
```
