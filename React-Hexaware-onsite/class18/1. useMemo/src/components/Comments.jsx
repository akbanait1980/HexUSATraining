import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';

const Comments =() => {
    const [ data, setData ] = useState([])
    const [ toggle, setToggle ] = useState(false)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
             setData(response.data)
             console.log('data fetched')

        })
        .catch(error => console.log(error))
    }, [])


    const findLongestName = (comments) => {
        if(!comments) return null

        let longestName = ""
        for(let i=0;i<comments.length; i++){
            let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName
            }
        }
        console.log('calcultion done')
        return longestName;
    }

    // const getLongestName = findLongestName(data)
    const getLongestName = useMemo(() => findLongestName(data), [ data ])


    return(
        <div>
            <h1>{ getLongestName }</h1>
            <button onClick={ () => setToggle(!toggle) }>
                Toggle
            </button>
            { toggle && <h1>Toggle</h1> }
        </div>        
    )
}
export default Comments;