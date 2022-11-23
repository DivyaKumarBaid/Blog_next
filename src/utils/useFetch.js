import React from 'react'
export default function useFetch(url) {

    const [data, setData] = React.useState(null)
    const [isPending, setPending] = React.useState(true)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res === 200 || !res === 201) {
                    throw Error('Could not fetch the data form the servre');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setPending(false);
                    setError(err.message);
                }
            })

        return () => abortCont.abort()
    }, [url])

    return { data, isPending, error }
}