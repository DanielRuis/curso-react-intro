import { useState, useEffect } from 'react';

function useLS(itemName, defaultItem) {
  const [status, setStatus] = useState({
    loading: true,
    error: false,
    empty: true,
    message: ""
  });

  const getItem = () => {
    try {
      const savedItems = localStorage.getItem(itemName);
      const parsedItems = savedItems ? JSON.parse(savedItems) : defaultItem;
      setStatus({
        loading: false,
        error: false,
        empty: parsedItems.length === 0,
        message: "Successfully loaded"
      });
      return parsedItems;
    } catch (e) {
      console.error(e);
      setStatus({
        loading: false,
        error: true,
        empty: defaultItem.length === 0,
        message: "Error al obtener los datos"
      });
      return defaultItem;
    }
  };

  const [item, setItem] = useState([]);

  const saveItems = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
      console.log("->: " + localStorage.getItem(itemName));
      setStatus({
        loading: false,
        error: false,
        empty: newItem.length === 0,
        message: "Saved successfully"
      });
    } catch (e) {
      console.error(e);
      setStatus({
        loading: false,
        error: true,
        empty: newItem.length === 0,
        message: "Error al guardar los datos"
      });
    }
  };

  useEffect(() => {
    setStatus(prev => ({ ...prev, loading: true }));
    setTimeout(() => {
      const items = getItem();
      setItem(items);
    }, 2000); // Simular un retraso de 2 segundos
  }, [itemName]);

  return [item, saveItems, status];
}

export default useLS;
