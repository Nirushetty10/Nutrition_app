import { useState , useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
       const fetchData = async()=> {
        setLoading(true);
        try {
            let res = await axios(url);
            setData(res.data);
        } catch (error) {
            setError(error)
        }
        setLoading(false);
       }    
       fetchData();
    }, []);

    const refetch = async()=> {
        setLoading(true);
        try {
            let res = await axios(url);
            setData(res.data);
        } catch (error) {
            setError(error)
        }
        setLoading(false);
       }  
       
       return {data,error, loading, refetch};
}

export default useFetch;