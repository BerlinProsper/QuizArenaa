import { useEffect, useState } from "react";
import { useMyContext } from '../../context/Mycontexts';
import { Sports } from "@mui/icons-material";


export default function Categories( ) {
    const { categoriesData, setCategoriesData } = useMyContext([{"id":Sports, "name":"Sports"  }, {"id":"MovieShows", "name":"Movies & Shows" }, {"id":"GK", "name":"General Knowledge" }, {"id":"Science", "name":"Science" }, {"id":"History", "name":"History" }, {"id":"Geography", "name":"Geography" }, {"id":"Cars", "name":"Cars" }, {"id":"Animals", "name":"Animals" }, {"id":"Music", "name":"Music" }, {"id":"Politics", "name":"Politics" }, {"id":"Technology", "name":"Technology" }]);

// useEffect(() => {
//     fetch("https://opentdb.com/api_category.php")
//         .then(response => response.json())
//         .then(data => setCategoriesData(data.trivia_categories))
//         .catch(error => console.error(error));
// }, []);
console.log("categoriesData", categoriesData);
console.log(categoriesData);


     return(<div>
     </div>);

}

