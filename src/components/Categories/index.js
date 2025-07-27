import { useEffect, useState } from "react";
import { useMyContext } from '../../context/Mycontexts';


export default function Categories( ) {
    const { categoriesData, setCategoriesData } = useMyContext();

useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
        .then(response => response.json())
        .then(data => setCategoriesData(data.trivia_categories))
        .catch(error => console.error(error));
}, []);
console.log(categoriesData);


     return(<div>
     </div>);

}