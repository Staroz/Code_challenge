// Date: 7/27/2023

var shortener = function(message) {
    // insert code here
    if (message.length > 160) {
        let ans ;
        let messageArray = message.split('');
        for (let i = messageArray.length ; i >= 0; i--) {
            if (messageArray.length===160 || i === 0) {
                ans = messageArray.join('');
                return ans;
            }else if (messageArray[i] === ' ') {
                messageArray.splice(i, 1);
                messageArray.splice(i, 1, messageArray[i].toUpperCase());
            }
        }
    }
    else {
        return message;
    }
}

console.log(shortener('SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long. SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.'));

/* SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.

Your task is to shorten the message to 160 characters, starting from end, by replacing spaces with camelCase, as much as necessary.

If all the spaces are replaced but the resulting message is still longer than 160 characters, just return that resulting message.

Example 1:

Original message (169 chars):
example 1
No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.
*/
