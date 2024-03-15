function isPalindrome(x) {
    // Check if x is negative or x is non-zero and ends with 0 (which cannot form a palindrome).
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }
    
    let reversedNum = 0;
    const originalX = x;
    
    // Reverse x
    while (x > 0) {
        reversedNum = reversedNum * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // Check if the original number and the reversed number are the same
    return originalX === reversedNum;
}

// Test cases
console.log(isPalindrome(121));   // Output: true
console.log(isPalindrome(-121));  // Output: false
console.log(isPalindrome(10));    // Output: false
