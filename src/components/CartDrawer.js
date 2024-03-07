"use client"
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {clearCart,addQuantity,removeQuantity} from "../store/CartSlice"
export default function CartDrawer() {
  const cartLength = useSelector((state) => state.cart.cartArray.length)
  const cartArray = useSelector((state) => state.cart.cartArray)

  console.log("length",cartLength)
  const [state, setState] = React.useState({
    right: false,
  });
  const increaseQuantity = () => {
    dispatch(addQuantity())
    // setQuantity(quantity+1);
  }
  const decreaseQuantity = () => {

    dispatch(removeQuantity())
    // setQuantity(quantity-1);
  }
  const calculateTotal = () => {
    return cartArray.reduce((total, product) => total + product.price * product.quantity, 0);
  };
  
  React.useEffect(()=>{

  },[])
  const toggleDrawer = (anchor, open) => (event) => {
    if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
    setState({ ...state, [anchor]: open });
  };
  const dispatch=useDispatch()
  const handleClick = () => {};
  const handleClear = () => {
    setState({ ...state, ["right"]: false });
    dispatch(clearCart())
  }

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Badge
              badgeContent={cartLength}
              className="text-pink-500"
              color="secondary"
              style={{ color: "pink" }}
            >
              <ShoppingCartOutlinedIcon style={{color:"rgb(236 69 153)",zIndex:1}}  />
            </Badge>
          </Button>




          <Drawer
          style={{minWidth:600}}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div style={{minWidth:"500px"}} className="bg-pink-400 h-full">
            <h2 className="text-center font-bold text-3xl">Cart</h2>
              <img
                width={"50px"}
                height={"50px"}
                style={{borderRadius:"50%"}}
                className="m-auto"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/1/o/m-db1024-42-3bros-original-imagz8zkvwjtayrs.jpeg?q=70"
                alt="test"
              />

              {cartArray.map((product)=>{
                return <div className="info m-3 flex align-middle  justify-between" style={{alignItems:"center"}}>
                <Badge
                badgeContent={product?.quantity}
                className="text-pink-500"
                color="secondary"
                style={{ color: "pink" }}
              >
                  <img
                    width={"50px"}
                    height={"50px"}
                    className="mr-4"
                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/1/o/m-db1024-42-3bros-original-imagz8zkvwjtayrs.jpeg?q=70"
                    alt="test"
                  />
              </Badge>
                
                  <p className="font-bold text-2xl ml-1">
                    {product?.title}
                  </p>
                  <div className="flex justify-between gap-4 ml-8" style={{width:"80px"}}>
                    <button
                      onClick={decreaseQuantity}
                      className="font-bold ml-1 cursor-pointer shadow-xl text-xl"
                    >
                      -
                    </button>
                    <button
                      onClick={handleClick}
                      className="font-bold ml-1 cursor-pointer shadow-xl text-xl"
                    >
                      {product?.quantity}
                    </button>
                    <button
                      onClick={increaseQuantity}
                      className="font-bold ml-1 cursor-pointer shadow-xl text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>
              })}

              <div>
                <h3 className="font-bold ml-3">subtotal :{calculateTotal()}</h3>
              </div>
              <div>
                {cartArray.length >0 
                  ? <Link href={"/checkout"} onClick={() => setState({ ...state, ["right"]: false })} className="p-2 bg-pink-500 text-white font-bold hover:bg-pink-400 m-1">
                    Checkout
                  </Link>: <button disabled={true} className="p-1 rounded  text-white font-bold hover:bg-slate-300 m-1">
                    Checkout
                  </button>}
                <Button disabled={cartArray.length ? false :true} onClick={handleClear} className="bg-pink-500 text-white font-bold hover:bg-black m-1">
                  Clear
                </Button>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
