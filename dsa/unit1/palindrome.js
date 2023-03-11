function checkpalindrome(n, str) {
    let bag = "";
    let count = 0;
    for (let i = n - 1; i >= 0; i--) {
        bag += str[i];
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < bag.length; j++) {
            if (str[i] == bag[j]) {
                count++;
            }
        }
    }
    if (count == n) {
        return "palindrome";
    } else {
        return "not palindrome";
    }
}
checkpalindrome(6, "kayak");