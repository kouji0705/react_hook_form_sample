import SearchForm from "./SearchForm"
import { SearchResult } from "./SearchResult"

export const JsonPlaceHolder = () => {
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