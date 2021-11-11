const cookieHandler = {
    getAll() {
        const cookieNameValuePairs = document.cookie.split('; ');
        const cookieObject = {};
        for (let value of cookieNameValuePairs) {
            const nameAndValueArray = value.split('=');
            cookieObject[nameAndValueArray[0]] = nameAndValueArray[1];
        }
        return cookieObject;
    },
    toSessionStorage() {
        const cookieNameValuePairs = document.cookie.split('; ');
        console.log(cookieNameValuePairs);
        cookieNameValuePairs.forEach(element => {
            const nameAndValueArray = element.split('=');
            sessionStorage.setItem(nameAndValueArray[0], nameAndValueArray[1]);
        });
    },
    flush() {
        const cookieNameValuePairs = document.cookie.split('; ');
        cookieNameValuePairs.forEach(element => {
            const nameAndValueArray = element.split('=');
            document.cookie =
                `${nameAndValueArray[0]}=;expires = Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
        });
    }
}

export {
    cookieHandler
};