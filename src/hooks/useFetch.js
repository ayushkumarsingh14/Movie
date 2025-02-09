import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endPoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchData = async() => {
        try {
            const response = await axios.get(endPoint)
            setData(response.data.results);
            setLoading(false)
        } catch (error) {
            console.log(error)            
        }
    }

    useEffect(() => {
        fetchData()
    },[endPoint])

    return { data, loading}
}

export default useFetch;