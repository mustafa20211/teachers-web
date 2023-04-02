import { useEffect, useState } from "react"

const usePost = (uri, postData,posting) => {
    const abortc = new AbortController();
    const [data, setData] = useState(null);
    const [pending, setpending] = useState(true);
    const [error, setError] = useState(null);
    const signal = abortc.signal;
    useEffect(() => {
        console.log(posting)
        if (posting){
            setpending(1)
        fetch(uri, {
                signal,
                method: "POST",
                body: JSON.stringify(postData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
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
            })}


        return () => abortc.abort();
    }, [uri,posting])




    return { data, pending, error }





}
export default usePost;