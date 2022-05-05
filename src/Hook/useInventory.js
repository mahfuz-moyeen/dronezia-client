import { useEffect, useState } from "react"

const useInventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://dronezia-server.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return [items, setItems];
}

export default useInventory;