/* 
    API rick and morti 
    https://rickandmortyapi.com/api/character

*/
/*  <ol>
        {characters.map((character, index) => (
            <li key={index}>{character.name}</li>
        ))}
    </ol> 
*/
/*
//llama la api
fetch('https://rickandmortyapi.com/api/character')
    //la respuesta la convierte en formato json con el metodo .json()
    .then(response => response.json())
    //le crea una variable para poder utilizarlo
    .then(data => {
        //data es la variable del json
        //data.results es ver las propiedades
        //Iterar sobre los resultados y mostrar los nombres
        //recorre solo en las propiedades de 'character'
        //busca dentro de 'character' las propiedades 'name'
        data.results.forEach((character) => {
            console.log(character.name);
        });
    })
    //si algo sale mal, me muesra 'Error'
    .catch(error => console.error('Error:', error));
*/
const PrimerComponente = () => {
    return (
        <>
            <h1>Hola</h1>
        </>
    );
};

export default PrimerComponente;
