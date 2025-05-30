import { useEffect, useState } from "react"
import { apiClient } from "../apiClient"
import type { Post } from "../types/post"

const usePost = (postId: string):[Post | null, unknown] => {
    const [ error, setError ] = useState<unknown>(null);
    const [ response, setResponse ] = useState<Post | null>(null);
    useEffect(() => {
        (async () => {
            try{
                const response = await apiClient.get(`/post/${postId}`)
                setResponse(response.data)
            }catch(err){
                setError(err)
            }
        })()
    }, [postId])

    return [ response, error ]
}

export default usePost