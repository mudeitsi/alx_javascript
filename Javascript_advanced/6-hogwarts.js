#!/usr/bin/node
const studentHogwarts = (function () {
  /**
   * This module is designed to manage Hogwarts students.
   * It has private methods and variables that are only accessible within the module
   * and public methods that are accessible from outside the module.
   */

  // Private variables
  let privateScore = 0;
  let name = null;

  // Private method
  function changeScoreBy(points) {
    /**
     * Private method to change the score by a given number of points.
     * @param {number} points - The number of points to change the score by.
     */
    privateScore += points;
  }

  // Public methods
  return {
    setName(newName) {
      /**
       * Sets the name of the student.
       * @param {string} newName - The new name of the student.
       */
      name = newName;
    },
    rewardStudent() {
      /**
       * Rewards the student by adding 1 to their score.
       */
      changeScoreBy(1);
    },
    penalizeStudent() {
      /**
       * Penalizes the student by subtracting 1 from their score.
       */
      changeScoreBy(-1);
    },
    getScore() {
      /**
       * Gets the current score of the student.
       * @return {string} - The name and score of the student.
       */
      return `${name}: ${privateScore}`;
    },
  };
});

// Create an instance for Harry
const harry = studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());  // Should display "Harry: 4"

// Create an instance for Draco
const draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());  // Should display "Draco: -2"

