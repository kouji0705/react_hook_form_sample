import { useLocation } from "react-router-dom"
import SearchForm from "./SearchForm"
import { SearchResult } from "./SearchResult"
import { useState } from "react"
import queryString from "query-string"
import axios from "axios"

export const JsonPlaceHolder = () => {
    const query = useQueryParams();
    // const location = useLocation();
  
    // クエリパラメータの変更を検知
    // クエリパラメータが変更された場合、クエリパラメータの更新している値を再設定
    // クエリパラメータを変更後、APIを叩いてデータを取得

    return (
        <div>
            <h1>JsonPlaceHolder</h1>
            <SearchForm />
            <SearchResult />
        </div>
    )
}

const useQueryParams = () => {
    const [query, setQuery] = useState<string>('')
    const location = useLocation();
    const params = queryString.parse(location.search);
    const queryParam = params.query as string;

    if (queryParam) {
        setQuery(queryParam)
    }

    return query
}

// API通信を実施する
const useFetchData = async (query: string) => {
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    setLoading(true);
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: { q: query }
        });
        setResults(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        setResults([]);
    } finally {
        setLoading(false);
    }

    return { results, loading}
}