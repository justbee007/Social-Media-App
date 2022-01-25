export async function postData(myJSON)  //Function to post Signup data into database
 {  
     //url to get signup data
    const url = 'http://localhost:3002/signup';
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'

        },
        body: myJSON
    };
    const response = await fetch(url, options);
    return response.json();
}