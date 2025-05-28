export function set_cookie(name, value){document.cookie = `${name}=${encodeURI(value)}`}
export function get_cookie(name){
    if(document.cookie){
        const cookie = decodeURI(document.cookie).split(';');
        let i, key, value;
        for(i=0;i<cookie.length;i++){
            key = (cookie[i].split('=')[0]).trim();
            if(name===key) value = cookie[i].split('=')[1];
        }
        return value;
    }
}
export function delete_cookie(name){document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`}