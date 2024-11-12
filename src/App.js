import './App.css'
import { useState, useEffect} from 'react';
function App(){
    const [item, setItem] = useState({
        itemName: "",
        itemPrice: "",
        itemImg: ""
    })
    const [allItems,setAllItems] = useState([])
    const [searchInp,setSearchInp] = useState("")
    const [priceInp, setPriceInp] = useState("");
    const takeItem = (e) =>{
        setItem({...item, [e.target.name]: e.target.value})
    }

    const showItem = () =>{
        setAllItems([...allItems, item])
    }

    const orderItemPlus = () =>{
        setAllItems([...allItems.sort((a,b) =>a.itemPrice - b.itemPrice)])
        console.log(allItems);
        
    }
    const orderItemMinus = () =>{
        setAllItems([...allItems.sort((a,b) =>b.itemPrice - a.itemPrice)])
        console.log(allItems);
        
    }
    

    const searchItem = (e) =>{
        setSearchInp(e.target.value)
    }

    const filteredItems = allItems.filter(item =>{
      const matchesName = item.itemName.includes(searchInp);
        const matchesPrice = priceInp ? item.itemPrice.startsWith(priceInp) : true;
        return matchesName && matchesPrice;
    })
        return(
            <div>
                <input onChange={takeItem} type='text' placeholder='item name' name='itemName' />
                <input onChange={takeItem} type='text' placeholder='item price' name='itemPrice' />
                <input onChange={takeItem} type='text' placeholder='item image' name='itemImg' />
                <button onClick={showItem}>Show Items</button>
                <button onClick={orderItemPlus}>Order items(+)</button>
                <button onClick={orderItemMinus}>Order items(-)</button>
                <input onChange={(e) => setSearchInp(e.target.value)} type='text' placeholder='search item by name' value={searchInp} />
                <input onChange={(e) => setPriceInp(e.target.value)} type='text' placeholder='search item by price' value={priceInp}/>

                <br/>
                <div className='cards'>
                    {
                    allItems.length == 0 ? null:
                    filteredItems.length > 0 ?
                    filteredItems.map((oneItem, i ) =>{
                        return (
                            <div className='card' key={i}>
                                <img src={oneItem.itemImg} alt=''/>
                                <h1>{oneItem.itemName}</h1>
                                <h3>{oneItem.itemPrice}</h3>

                            </div>
                        )
                    }) : "hec bir melumat yoxdur......"
                    }
                </div>
            </div>
        )
        
}

export default App;
