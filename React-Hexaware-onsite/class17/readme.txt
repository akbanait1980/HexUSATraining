# HOC - High Order Components
It is an advance technique in react for reusing component logic
HOC are not part of React API
they are a pattern that emrges from react compositional nature

high order componnt is a function that takes a component and return a new component

syntax
-------
const EnhancedComponent = hightOrderComponent(wrappedComponent)

# Reason to use HOC
- easy to handle
- get rid of copying the same logic in every component
- make the code more readable