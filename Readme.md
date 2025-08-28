### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById returns only one element with a certain id on the other hand getElementsByClassName returns a html collection of all the elements with certain class name. There is also some difference between querySelector and querySelectorAll. querySelector only returns the first element on the other hand querySelectorAll returns all the similar elements as a nodelist.
<br>
<br>


### 2. How do you create and insert a new element into the DOM?
Ans: First I need to select the parent after that I need to create a new tag and if needed I have to set innerText or innerHTML after that I have to append the element to the parent. Thus I can create and insert a new element to the DOM.
<br>
<br>

### 3. What is Event Bubbling and how does it work?
Ans: Event bubbling is a method how browsers react to an event. When an event happens in an element all the event handelers of it's parent element also triggered.
<br>
<br>

### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is a way where event listener is applied to one element instead of multiple elements. It is useful when we need to add event listener to all it's child. Using delegation concept we can minimize the use of event listener by applying event listener to only the parent.
<br>
<br>


### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() is a method to stop reloading when clicking a button inside a from tag. stopPropagation() is a method to stop bubbling in a certain level of DOM.
