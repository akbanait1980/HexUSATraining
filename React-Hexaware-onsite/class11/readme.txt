# React forms
- forms are esential part of any appp as it allows user to interact with our app
- forms can be use to take information from the user
- forms can contain different type of elements to take different type of data
- forms can execute multiple task depending upon the nature of the app
- forms can containm textbox, dropbox, radio, checkbox etc

# creating forms
- react provide a statefull and fairly reactive approach to create, design and build a form
- instead of a DOM elements its component that handle the react forms
- there are primarly two kind of forms input in react
1. controlled components - state
2. uncontrolled component - ref

# controlled component
- the input form element is handled by the component itself with mutable state beign kept in the
state property and is only updated using setState() method
- function mediate the data passing into them on every onChange event instead of having the data 
only once 
- this passed data is saved to the state and update using setState() method enabling the component
to gain better control over form element
-form element like input in html generally maintain their own state