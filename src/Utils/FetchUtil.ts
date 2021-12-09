export module FetchUtil {
    /**
     * Returns JSON of fetch
     * body = {X: Y}
     * @param url
     * @param body
     * @returns response.json()
     */
    export const fetchGet = async (url: string) => {
        const response = await fetch(url);
        return response.json();
    };

    /**
     * Returns JSON of fetch
     * body = {X: Y}
     * @param url
     * @param body
     * @returns response.json()
     */
    export const fetchPost = async (url: string, body: string) => {
        const data = { body };
        const headers = { "Content-Type": "application/json; charset=utf-8" };

        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        });

        return response.json();
    };
}
