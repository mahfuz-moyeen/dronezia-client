import { useEffect, useState } from "react"

const useInventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return [items, setItems];
}

export default useInventory;