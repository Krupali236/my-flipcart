import { connect } from "react-redux";
import { AddtoCart, RemovetoCart } from "../services/Actions/actions";
import Cart from "../components/cart";

const mapStateToProps = (state) => {
  console.log("Redux State in CartContainer:", state); // Debugging log
  console.log("Cart Items from Redux:", state.CardItems.items); // 🔍 Log the cart items
  return {
    data: state.CardItems.items, // Access `items` correctly

    // data: state.CardItems.items || [], // Ensure we are getting the right data
  };
};


const mapDispatchToProps = (dispatch) => ({
  AddtoCartHandler: (data) => dispatch(AddtoCart(data)),
  RemovetoCartHandler: (data) => dispatch(RemovetoCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
