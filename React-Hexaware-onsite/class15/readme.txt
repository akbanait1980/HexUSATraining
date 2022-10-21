# MIddleware
Redux thunk is middleware that allows you to return a function rather the just action within Reux
this allow for dlayed action including workig with promise

one of the main use case for this middleware if for handling action that return mightr not be
synchornous for example axios to send a get request
redux thunk allows us to dispatch those action asynchornously and resolve eah promise that gets
returned

> npm i redux-thunk

once redux thunk has neen installed and included in you project
applyMiddleware(thunk)

we can stay dispatching acxtion asynchornonus