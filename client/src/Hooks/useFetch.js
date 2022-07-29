import {useEffect, useState} from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data,setDate] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true)
            try{
                const response = await axios.get(url)
                setDate(response.data)

            }catch (err){
            setError(err)

            }
            setLoading(false)
        }

        fetchData()
    }, []);


    const reFetch = async () => {
        setLoading(true)
        try{
            const response = await axios.get(url)
            setDate(response.data)

        }catch (err){
            setError(err)
            // next(err)
        }
        setLoading(false)
    }

    return{data,loading,error,reFetch}


}


export default useFetch