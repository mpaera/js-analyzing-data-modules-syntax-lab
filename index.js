// Import datejs (required for Date.today())
require('datejs');

function combineUsers(...args) {
  // Initialize return object
  const combinedObject = {
    users: []
  };

  // Loop through each array in args
  for (let arr of args) {
    combinedObject.users.push(...arr);
  }

  // Add today's date in required format
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  // Return the object
  return combinedObject;
}

// Export function
module.exports = {
  combineUsers
};


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};