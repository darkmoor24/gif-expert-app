export const getGifs = async (category) => {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURIComponent(category) }&api_key=xgpSjUdrL297l2XJH4N9q6F5WDK8iL1R`;
    const request = await fetch(apiUrl);
    const { data } = await request.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
};