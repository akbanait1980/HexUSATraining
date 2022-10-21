import React from 'react';


// create context
const UserContext = React.createContext();

// provider
const UserProvider = UserContext.Provider;

// consumer
const UserConsumer = UserContext.Consumer;

export {
    UserProvider,
    UserConsumer
}