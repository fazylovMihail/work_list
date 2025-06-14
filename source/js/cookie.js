export function set_cookie(name, value, data){
    const new_date = new Date();
    new_date.setTime(new_date.getTime() + (data*1000*60*60*24));

    document.cookie = `${name}=${encodeURI(value)}; expires=${new_date.toUTCString()}; path=/`;
}
export function get_cookie(name){
    if(document.cookie){
        const cookies = decodeURI(document.cookie).split(';');
        let i, key, total;
        for(i=0;i<cookies.length;i++){
            key = (cookies[i].split('=')[0]).trim();
            if(name==key) total = cookies[i].split('=')[1];
        }
        return total;
    }
}
export function delete_cookie(name){document.cookie = `${name}=; Max-Age=-1; path=/;`}