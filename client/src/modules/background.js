export default async (app, city) => {
    const res = await fetch(`/images/${city}`);
    const imageOptions = await res.json();
    console.log(imageOptions);
    app.style.backgroundImage = `url('${imageOptions.results[0].urls.full}')`;
}