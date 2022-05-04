import { useEffect, useState } from "react"

const useInventoryDetails = (inventoryId, update) => {

    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${inventoryId}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [inventoryId, update])

    return [item, setItem];
}

export default useInventoryDetails;