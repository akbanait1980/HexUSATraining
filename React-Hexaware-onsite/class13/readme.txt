# REdux

# intercommunication between the components
1. props
2. context api
3. state management library - redux, flux


- redux is a javascript based library used for state management
- state = data

- the idea is to maintain data centrally / globlly which can be accessed by any component
irrespective of the position and order of the component otherwise we have to pass data
to each and every component in the component tree

- misconseption : redux is a part of react library which is wrong
redux can be use in any project which is using javascript

# Redux Architecture
it consist of three main components
- store
- action
- reducer

store - a place where an entire state of the app is listed and managing the status of
the app at give point

action - a pure object contained within a store having information about the user event
the action is send from view / component to the reducer

reducer - reducer is a fucntion which is able to read the payload from the action and 
then execute updating the store


# redux with react
Steps

1. install required packages
> npm i redux
> npm i react-redux

2. create a store/index.js

3. create initialState

4. create a reducer

5. create a store

6. configure store with react app

7. consume store in react component


state ----> reducer ----> store ----> component



