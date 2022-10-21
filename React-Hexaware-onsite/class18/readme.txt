# useMemo()
- it is used in function component that return a memorized value
- it is a concept in general when we dont need to recompute the function with given argument for the next
time as it return the same cache result
this kind of function remember the result of output for a given set of input

addnumber(10, 20) = 30

in react we use this conceot whenever in react component state and props do not chnage the component
an the component does not re-render as it the same output

useMemo() hook to improve the performance in our react app