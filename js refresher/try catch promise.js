function waitForTimeout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random(); // Generate a random number between 0 and 1
      if (randomNumber < 0.5) {
        resolve("data fetched successfully");
      } else {
        reject(new Error("something went wrong"));
      }
    }, 1000); // 1000 milliseconds = 1 second
  });
}

setTimeout(()=>{

},2000)

async function main() {
  try {
    // Wait for the setTimeout to complete
    const result = await waitForTimeout();
    
    // Log the result after the setTimeout
    console.log(result);
  } catch (error) {
    // Handle any errors thrown during the await
    console.error("Caught error:", error);
  }

  // Log something immediately
  console.log("This is logged immediately");
}

// Call the main function
main();
