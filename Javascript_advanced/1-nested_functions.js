#!/usr/bin/node
// Create a variable named globalVariable with value "Welcome"
const globalVariable = "Welcome";

function outer() {
  /**
   * This function alerts the content of the variable globalVariable and contains another function inner.
   * The inner function also contains another function inception. All these functions display alerts
   * with specific variables.
   */

  // Alert the content of the variable globalVariable
  alert(globalVariable);

  // Create a variable named course with value "Holberton"
  const course = "Holberton";

  function inner() {
    /**
     * This inner function alerts the content of the variables globalVariable and course (concatenated).
     * It also contains another function inception that alerts the content of specific variables.
     */

    // Alert the content of the variables globalVariable and course (concatenated)
    alert(`${globalVariable} ${course}`);

    // Create a variable named exclamation with value "!"
    const exclamation = "!";

    function inception() {
      /**
       * This function alerts the content of the variables globalVariable, course, and exclamation (concatenated).
       */
      alert(`${globalVariable} ${course}${exclamation}`);
    }

    // Call the function inception
    inception();
  }

  // Call the function inner
  inner();
}

// Call the function outer in the main code
outer();


