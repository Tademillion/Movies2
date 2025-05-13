import { useQuery } from "@tanstack/react-query";
import peopleservices from "../../../services/peopleservices";

 const UsePeoples =(currentPage? :number)=>useQuery({
    queryKey:["peoples",currentPage],
    queryFn:()=> peopleservices.getall({
        params:{
            page:currentPage
    }
    })
})

// so the structure from bootom up
// 2. apiServices.ts // apiclient instance of the axios to handle the api calls
// 3. peopleservices.ts // people services used to handle all people services 
// 4. UsePeoples.ts
// 5. PeopleGrid.tsx
//  const UsePeoples =(currentPage? :number)=> UseGenericMovies<PeopleGridProps>("person/popular",{},{params:{page:currentPage}},[currentPage]);

 export default UsePeoples;
