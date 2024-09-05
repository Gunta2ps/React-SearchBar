

export default function SearchBar({onSearch}) {
  return (
    <div>
        <input type="text" placeholder="Type here..." onChange={(e) => onSearch(e.target.value)} className="input input-bordered w-full max-w-xs"  />
    </div>
  )
}
