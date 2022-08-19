import React, {useState,useEffect} from 'react'
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translate, setTranslated] = useState('')

    useEffect(()=> {
        axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params:{
                qa: text,
                format: 'plain-text',
                prettyPrint: true,
                target:language.value,
                key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',

            }
        }).then((result)=>console.log("printing result")).catch((e)=>console.log('printing error',e))

        // axios('https://jsonplaceholder.typicode.com/todos/1').then((result)=>{
        //     console.log("printing result",result.data.title);
        // })
    
        console.log('printing language, text',language,text);
    },[language,text])

    return (
        <div>
            <h1>{translate}</h1>
        </div>
    )

}

export default Convert;