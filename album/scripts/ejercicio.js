// const ejecutarCodigo = () => {
//     alert('Hola, mundo');
// };

// ejecutarCodigo();

document.getElementById('titulo1').textContent = 'Album de fotos';

const elms = document.getElementsByClassName('text-muted')
for (const elements of elms) {
    elements.innerHTML = `<span>
    En este sitio encontrarás un album de fotos inspirado en el snippet de 
    <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>
    </span>`;
}
const para = document.getElementsByTagName('p');
for (const paragraf of para) {

    paragraf.classList = ['d-none'];
    paragraf.getAttribute
}

const images = [{
    url: "https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "camino"
}, {
    url: "https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "energia"
}, {
    url: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: "papá"
},{
    url: "https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653936999234-6574484abc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653559260129-d4347e4c8df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1578255321055-d9ed6a976af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1654006018654-9f03ad2a02b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1654002300319-6c882ad161ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653938245506-3203e63338b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1654041563290-2d6118dba2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653965188866-e544c043a2f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1654045851484-d9aea271acda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1654046491755-20ef230f0add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1654083843429-146101352678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653971858341-865fca7c6d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1654032693719-ada7186b1ae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1648737966282-b193f74a1503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653971858526-97f2ba1914c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1654041562793-1bd2430585cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1654023316132-3665072d427b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1648737153811-69a6d8c528bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653934004892-1399fb4444c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1654049547920-7aa6763c2efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1654026633377-d8d55a494481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653578705644-3672f965f009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653242816429-fd9393b49bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653874403269-f4f0dba02f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653904780118-96d8b4b1eced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653917215257-40db75a62dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653919523364-1e7e221d2917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653908836785-b519864cca16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653883094445-9a53d0e9ac2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653865507270-731da1afface?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}, {
    url: "https://images.unsplash.com/photo-1653896775515-ae85244f58a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    alt: ""
}]

let i = 0;
document.querySelectorAll('div.album svg').forEach( /** @param {SVGSVGElement} svg*/svg => {
    const image = document.createElement('img')
    const { url, alt} = images[i++]
    image.src = url
    image.alt = alt
    svg.replaceWith(image)
    console.log('a')
})