import React, { useEffect, useState } from "react";

const getScore =() =>{
    const [Score, setScore] = useState([]);
    
    useEffect(() => {
        try{
            fetch(`https://fir-web-9dd79-default-rtdb.firebaseio.com/AAA/.json`)
          .then(response => response.json())
          .then((responseData) => {
            setScore(responseData);
          });
        console.log(Score)
        }catch(e){
            console.error(e)
        };
      }, []);

      return Score.data
}

export default getScore;