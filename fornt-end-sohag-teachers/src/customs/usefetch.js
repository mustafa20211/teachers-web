import { useEffect, useState } from "react"

const UseFetch = (uri) => {
    const abortc = new AbortController();
    const [data, setData] = useState(null);
    const [pending, setpending] = useState(true);
    const [error, setError] = useState(null);
    const signal = abortc.signal;
    useEffect(() => {

        fetch(uri, { signal })
            .then(res => {
                if (!res.ok)
                    throw Error('bad connection')
                else {

                    return res.json()
                }
            })
            .then(data => {
                setpending(false)
                setData(data)
                setError(false)
                console.log(data)
                console.log('sucess')

            })
            .catch(err => {
                if (!err.name === "AbortError") {
                    setpending(false);
                    setError(err.message)
                    console.log(err)
                }
            })


        return () => abortc.abort();
    }, [uri])




    return { data, pending, error }





}
export default UseFetch;