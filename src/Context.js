import React, { Component } from "react";
import { details } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    detail: details,
    shortlist: [],
    search: "",
    filteredDetails: details,
  };

  componentDidMount() {
    this.setProducts();
    // this.setFilteredDetails();
    // this.setSearch();
  }

//   setFilteredDetails = () => {
//     //   console.log('searching',this.search);
//     console.log("from setFilterd", this.state.search);
//     const fdetail = details.filter((detail1) =>
//       detail1.District.includes(this.state)
//     );
//     return this.setState(() => {
//       return {
//         filteredDetails: fdetail,
//       };
//     });
//   };
  //   setfilteredDetails = () => {};

  setProducts = () => {
    let tempProducts = [];
    details.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { filteredDetails: tempProducts};
    });
  };

  getItem = (id) => {
    const detail1 = this.state.filteredDetails.find((item) => item.id === id);
    return detail1;
  };

  setSearch = (e) => {
    this.setState(
      () => {
        return {
          search: e,
        };
      },
      () => {
        const { search,filteredDetails } = this.state;
        console.log("search from setsearch",filteredDetails);
        const fdetail = details.filter(
          (detail1) =>
            detail1.City.toLowerCase().includes(search) ||
            detail1.State.toLowerCase().includes(search) ||
            detail1.District.toLowerCase().includes(search)
        );
        this.setState(
          () => {
            return {
              filteredDetails: fdetail,
            };
          },
          () => {
            console.log("from setsearch", this.state);
          }
        );
      }
    );
  };
  handleDelete = (id) => {
    let tempProducts = [...this.state.filteredDetails];
    let tempCart = [...this.state.shortlist];

    tempCart = tempCart.filter((item) => item.id !== id);
    tempProducts = tempProducts.filter((item) => item.id !== id);

    // const index = tempProducts.indexOf(this.getItem(id));
    // let removedProduct = tempProducts[index];
    // removedProduct.isSltd = false;
    // removedProduct.count=0;
    // removedProduct.total=0;

    this.setState(
      () => {
        return {
          shortlist: [...tempCart],
          filteredDetails: [...tempProducts],
        };
      },
      () => {
        console.log("removed");
      }
    );
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.filteredDetails];
    let tempCart = [...this.state.shortlist];

    tempCart = tempCart.filter((item) => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.isSltd = false;
    // removedProduct.count=0;
    // removedProduct.total=0;

    this.setState(
      () => {
        return {
          shortlist: [...tempCart],
          filteredDetails: [...tempProducts],
        };
      },
      () => {
        console.log("removed");
      }
    );
  };
  handleShortList = (id) => {
    let tempProducts = [...this.state.filteredDetails];
    const index = tempProducts.indexOf(this.getItem(id));
    const detail1 = tempProducts[index];

    detail1.isSltd = true;
    
    this.setState(
      () => {
        return {
            filteredDetails: tempProducts,

          shortlist: [...this.state.shortlist, detail1],
        };
      },
      () => {
        console.log("from handle shortlist");
      }
    );
    // console.log('from handle shortlist')
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDelete: this.handleDelete,
          handleShortList: this.handleShortList,
          removeItem: this.removeItem,
          setSearch: this.setSearch,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const DetailConsumer = ProductContext.Consumer;

export { ProductProvider, DetailConsumer };
