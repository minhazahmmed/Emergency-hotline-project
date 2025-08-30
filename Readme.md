1. getElementById / getElementsByClassName / querySelector / querySelectorAll:

getElementById selects one element by ID, getElementsByClassName selects multiple elements by class (live HTMLCollection), querySelector selects the first matching CSS selector, querySelectorAll selects all matching elements (static NodeList).

2. Create and insert element:

Use document.createElement() to create, set content/attributes, and appendChild() or prepend() to insert into DOM.

3. Event Bubbling:

Event starts from the target element and bubbles up to parent elements.

4. Event Delegation:

Attach a single event listener to a parent to handle events on its children; works via event bubbling.

6. preventDefault() vs stopPropagation():

preventDefault() stops default browser action, stopPropagation() stops the event from bubbling up.