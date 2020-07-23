This project is a shopping cart system using 'react-router-dom' as tutorial for personal practice.

17/Jul/2020
First commit added.
Simple web page had been made with ReactJS.

22/Jul/2020
Home and Contributor page with background image.
Now, user can select some fruits in the shopping page and save that into App's state. We can see the selected items in the selected item box.
Next time, we will get the total number and price of selected fruits from App's state values.

23/Jul/2020
Fail to save the total price and number of items into App's state, because when a component is changed the calculate function for total_price and item number recalled repeatedly it causes error.
I had choosen another method. Now we get total number of item and price from each value of state(items) and calculate total_number and total_price when the SelectedSummary Component is rendering.

Goals of this project :
1) Using 'react-router-dom' package, make the each large single script to divided into simple scripts.
2) With javascript codes, load selected item when the page reloaded by saving the seleceted item into local storage.
3) When user scrolls down the page, which directory is the homepage('/'), background image will be blurred by CSS.