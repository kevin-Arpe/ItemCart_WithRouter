This project is a shopping cart system using 'react-router-dom' as tutorial for personal practice.

17/Jul/2020
First commit added.
Simple web page had been made with ReactJS.

22/Jul/2020
Home and Contributor page with background image.
Now, user can select some fruits on the shopping page and save that into App's state. We can see the selected items in the selected item box.
Next time, we will get the total number and price of selected fruits from App's state values.

23/Jul/2020
Fail to save the total price and number of items into App's state, because when a component is changed the calculate function for total_price and item number recalled repeatedly it causes error//Fixed(24/Jul/2020).

I had choosen another method. Now we get total number of item and price from each value of state(items) and calculate total_number and total_price when the SelectedSummary Component is rendering.

24/Jul/2020
Now we can save selected item and total value to local storage when customer do submit on the Shopping page.
On the cart page, customer can see their items and total cost of items submited.

When user select an item and click from list in shopping page, a click event occurs and in handleClick function, the input value and selected item's price calculated and saved into the App's state value(total)
//이전 코드에서는 다른 함수를 정의하여 계산함으로 계산함수와 handleClick 함수 간 충돌로 인해 error가 발생하였던 것으로 생각됩니다.

Now when no items is saved in localstorage as 'items' CartList return nothing.
No list is showed up at list on the Cart page.

-----------------------------------------------------
Goals of this project :
1) Using 'react-router-dom' package, make the each large single script to divided into simple scripts.
2) With javascript codes, load selected item when the page reloaded by saving the seleceted item into local storage.
3) When user scrolls down the page, which directory is the homepage('/'), background image will be blurred by CSS.