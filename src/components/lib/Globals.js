export const GlobalAPI = (api, method, body, header, success_callback, error_callback) => {
    // console.log('head', header)   
    let obj = { method: method }
    let headers = {};
    let value;
    body != null ? obj["body"] = body : null;
    value != null ? headers["access_token"] = value : null
    value != null ? obj["headers"] = headers : null
    fetch(
        api,
        obj)
        .then((response) => response.json())
        .then(response => {
            success_callback(response)
        })
        .catch(error => {
            error_callback(error)
        })

}