import React, { useState } from 'react';

const MOBILE_PHONES = 'mobile phones';
const FOOTWEAR = 'footwear';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    {
      category: FOOTWEAR,
      name: 'White Nike Shoes',
      cost: 10,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_qewunqodWpqmWahIia_XxyVtuFM5mUu4_Q&usqp=CAU',
      //'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIWFhUSFRoVFRgYGBIWFxIXFRcXGBcXFhgZHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NFRAQFS0dFR0rKzcrLSsrKystLSsrOC0tLS0tLS0tLTctNy0tLS0tLS0tKy8tLS03Kys3Kzc3Ky0rK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xABLEAABAwICBgYGBQcJCQAAAAABAAIDBBESIQUGMUFRYQcTInGBkTJCUqGxwRRyktHwI1NVYoKy4QgVFyQzNJOi00NEY3SDhKPCw//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABkRAQEBAQEBAAAAAAAAAAAAAAARATEhEv/aAAwDAQACEQMRAD8AnFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBF8e4AEkgAZknIBQh0ndJjp/6ro90gY15E0rRbrRsDY3DMMvftZYrZZbQk7Tmu1FSOLJZu2NrGNc8jfY4RZp7yFlNCaVjq4I6iEkxytxNuLEZ2II3EEEeC5Mike6zWtLnSODWAXu9zsgBzufMhdV6p6I+h0cFNe5ijAceLzm8jvcSgyyIiAiIgt9IVYhjdI65DBewtdx3NF95NgO9WMVXOydkcwjLJmOLCwOBjezCTG4ucesBBJDgG+gcs8rDpArOqpmE7HVVM09xnjPyV/LMH1rIxn1ELpX/AKpldgi8wyo+yEGWREQEREBERAREQEREBERAREQEREBERAREQEREBERAWJ01rNSUmVRURxuw4w0uGNzb2u1gzOfALH9IWszKCjkf1gbM9pZA3IuMjuyHBpObW3xE7gPA8waXa50hkxuMhsXEuLi48XG5ufvQZ7TOt1TWmQSVMjsL3PbGThAaNlmts3Jvz43WBfVOJvlst4ALHfTXchYg5C1yOPFXTQ61yLC2/mqqTegzVn6RVvrJBeOjs2O+x0zht/Ybn3vadyn9RZ/J9ro3UU8LbCSOoc943lsjW4H93ZI/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/wCSyLowdoB8AqEmj4nelEw/stQYV9VTg/3iMd5+Spy6TpgRhqIjfL0gDdZGbVqkd6VPGfC3wVhPqHo9+2mHg6QfBytFy1x/Ga+4ljYejyjj/sjURX/N1E7R5YrL1U6kB5BFfXsIFhhnaPMFna7zdWjI4kxKjRauSRNwitnktvlED3dxLWNuq79EzEECpaDbI9UDbnm6yVHxfFrkWoFU2odVN0vPjdkQ6ON0ZHs9XfCBluAWdGiKu397i7zTnPwEqVVZfFj59Xq9zrt0m1g9kUkJb5ueXe9e5tA1zgQK+NpO8UouOYvKR7ko1fpdrDHo5zQ63XyMi22Lmklzmg82scO66g8UEXs/5ypv1g6K6qtwio0u94jN2g08YAJFr2a8Am28rDHoHf8ApIEf8uP9RKIsFHGPUHi8qszANgYPJSP/AEByXuNJD/AP+qvv9A836SH+CR/9FKtRz1zeLPL+K9tqOBHg0qQx0ETfpBneYCT59Yqf9Akv6QZ/hP8A9RCtAdU2zL7fstXl1Q0Wu52ezINvbbYqTNH9CVRDI2WLSDGvYbtcIZCWniLy7Vm6ro5r5sP0jScc2A3Z1lLHJgJ24cbjbYEog+Sqi3m/e8lZqn1Zq3QieOglfEWhwc1pOJp2FrfScDyBUyaL1Fq4HOdHWwtc+xcW0cALsIsL57gtgp9GV49KvY7/ALdg+DkqIN0TqhpKYjBRysafWeGQgd+M4vIKYtQtSW0AMshD53twuIuQwXJwtJzO65y9EZcdip4Jx6czXf8ASt/7q8aDvN/C3zUHpERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q==',
    },
    {
        category: FOOTWEAR,
        name: 'Nike Sneakers',
        cost: 8.9,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8htuAQ_8pzDxTkMQXbHAHgZRBTjKuoLMQKQ&usqp=CAU',
      },
      {
        category: FOOTWEAR,
        name: 'Nike React Element 87 Mens Shoe',
        cost: 12,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQb-zeMIo_GnpcQVLSmawkq2jPA0ePDu-gVQ&usqp=CAU',
      },
      {
        category: FOOTWEAR,
        name: 'Mens Running Shoes',
        cost: 15,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfT9_XwbFsQwfGnvglyOojKPQu1Hpytwi4LA&usqp=CAU',
      },
      
    {
      category: MOBILE_PHONES,
      name: 'Apple iPhone 11 (256GB)',
      cost: 1066,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuXdwIkMW0UfKcbVSfgYWnXdlvE7jz2ZPE__4EYt3BYjR2nUK0ftjKX1lO_nlxMQisCDZqKRP6&usqp=CAc',
       // 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSpwdYDmUL_ZEqhLV7ZWRdQAU7DGcGaxtCt7SrTlL9umrQs2Un7rj9Nbb9Vq01RtEfA0eAVmdt-&usqp=CAc',
    },
    {
        category: MOBILE_PHONES,
        name: 'OnePlus 8 Pro (6GB RAM)',
        cost: 800,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFYtE7jN37qLqI6g32-HoScZ1DsAra9Q8z25A1XOC9n_xMcQ4CLxXmZhuZl8g&usqp=CAc',
      },
      {
        category: MOBILE_PHONES,
        name: 'OnePlus 8 Pro (8GB RAM)',
        cost: 850,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQipELjrhlbG35wftkdBcoJl-pFhf-ZxHgHOh92GSenhUOclGSkrZu_vRqnKuQ&usqp=CAc  ',
      },
      {
        category: MOBILE_PHONES,
        name: 'Apple iPhone 11 (128GB)',
        cost: 1000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRogsYJr3A7p0WSEW_sUh3FBxwx80jQiv2HAXrNfPopaykk5mR8HQmbtMH_Lm-i867U9pAT5UQm&usqp=CAc',
      },
   
     
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(MOBILE_PHONES);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
      <h1>Products</h1>
      <b>Select a category </b>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value={MOBILE_PHONES}>{MOBILE_PHONES}</option>
        <option value={FOOTWEAR}>{FOOTWEAR}</option>
      </select>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}