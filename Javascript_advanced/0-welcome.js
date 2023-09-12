#!/usr/bin/node
function welcome(firstName, lastName) {
  /**
   * This function takes two arguments, firstName and lastName, and provides a welcome message.
   * It also calls another inner function, displayFullName, to display the welcome message in an alert.
   */
  
  // Concatenating the firstName and lastName to form the fullName
  const fullName = `${firstName} ${lastName}`;

  function displayFullName() {
    /**
     * This inner function displays an alert with a welcome message using the fullName.
     */
    alert(`Welcome ${fullName}!`);
  }

  // Call the inner function to display the alert
  displayFullName();
}


