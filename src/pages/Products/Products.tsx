import React, { FC } from 'react'
import "./Product.scss"

const Products: FC = () => {
    const datas = [
        {
          title: "Los Angels",
          description: "You can see Hollywood mountain",
          imageUrl:
            "https://img.freepik.com/free-vector/browsing-online-concept-illustration_114360-4684.jpg?size=626&ext=jpg",
          price: 100,
        },
        
        {
          title: "New York",
          description: "Full of skyscrapers",
          imageUrl:
            "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg",
          price: 150,
        },
        {
          title: "Los Angels",
          description: "You can see Hollywood mountain",
          imageUrl:
            "https://img.freepik.com/free-vector/browsing-online-concept-illustration_114360-4684.jpg?size=626&ext=jpg",
          price: 100,
        },
        {
          title: "Las Vegas",
          description: "Mountain with snow",
          imageUrl:
            "https://img.freepik.com/free-vector/share-link-concept-illustration_114360-5438.jpg?size=626&ext=jpg",
          price: 120,
        },
        {
          title: "New York",
          description: "Full of skyscrapers",
          imageUrl:
            "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg",
          price: 150,
        },
        {
          title: "Los Angels",
          description: "You can see Hollywood mountain",
          imageUrl:
            "https://img.freepik.com/free-vector/browsing-online-concept-illustration_114360-4684.jpg?size=626&ext=jpg",
          price: 100,
        },
        {
          title: "Las Vegas",
          description: "Mountain with snow",
          imageUrl:
            "https://img.freepik.com/free-vector/share-link-concept-illustration_114360-5438.jpg?size=626&ext=jpg",
          price: 120,
        },
        {
          title: "New York",
          description: "Full of skyscrapers",
          imageUrl:
            "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg",
          price: 150,
        },
      ];
      const datas2 = [
        {
          title: "Los Angels",
          description: "You can see Hollywood mountain",
          imageUrl:
            "https://img.freepik.com/free-vector/browsing-online-concept-illustration_114360-4684.jpg?size=626&ext=jpg",
          price: 100,
        },
        
        {
          title: "New York",
          description: "Full of skyscrapers",
          imageUrl:
            "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg",
          price: 150,
        },
        {
          title: "Los Angels",
          description: "You can see Hollywood mountain",
          imageUrl:
            "https://img.freepik.com/free-vector/browsing-online-concept-illustration_114360-4684.jpg?size=626&ext=jpg",
          price: 100,
        },
        {
          title: "Las Vegas",
          description: "Mountain with snow",
          imageUrl:
            "https://img.freepik.com/free-vector/share-link-concept-illustration_114360-5438.jpg?size=626&ext=jpg",
          price: 120,
        },
        {
            title: "Los Angels",
            description: "You can see Hollywood mountain",
            imageUrl:
              "https://img.freepik.com/free-vector/browsing-online-concept-illustration_114360-4684.jpg?size=626&ext=jpg",
            price: 100,
          },
          
          {
            title: "New York",
            description: "Full of skyscrapers",
            imageUrl:
              "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg",
            price: 150,
          },
          {
            title: "Los Angels",
            description: "You can see Hollywood mountain",
            imageUrl:
              "https://img.freepik.com/free-vector/browsing-online-concept-illustration_114360-4684.jpg?size=626&ext=jpg",
            price: 100,
          },
          {
            title: "Las Vegas",
            description: "Mountain with snow",
            imageUrl:
              "https://img.freepik.com/free-vector/share-link-concept-illustration_114360-5438.jpg?size=626&ext=jpg",
            price: 120,
          },
        {
          title: "New York",
          description: "Full of skyscrapers",
          imageUrl:
            "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg",
          price: 150,
        },
        {
          title: "Los Angels",
          description: "You can see Hollywood mountain",
          imageUrl:
            "https://img.freepik.com/free-vector/browsing-online-concept-illustration_114360-4684.jpg?size=626&ext=jpg",
          price: 100,
        },
        {
          title: "Las Vegas",
          description: "Mountain with snow",
          imageUrl:
            "https://img.freepik.com/free-vector/share-link-concept-illustration_114360-5438.jpg?size=626&ext=jpg",
          price: 120,
        },
        {
          title: "New York",
          description: "Full of skyscrapers",
          imageUrl:
            "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg",
          price: 150,
        },
      ];
      const datas1 = [
        {
          title: "Los Angels",
          description: "You can see Hollywood mountain",
          imageUrl:
            "https://img.freepik.com/free-vector/browsing-online-concept-illustration_114360-4684.jpg?size=626&ext=jpg",
          price: 100,
        },
        
        {
          title: "New York",
          description: "Full of skyscrapers",
          imageUrl:
            "https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=626&ext=jpg",
          price: 150,
        }
      ];
      const mainData = [
        { type: "plants", datas:datas1 },
        { type: "furniture", datas:datas2 },
        { type: "fruits", datas },
      ];

    return (
        <div className='product'>
            <h1>Products</h1>
            <div className="product-cat">
                {
                    mainData.map((data,key)=>(
                        <div className="product-list" key={key}>
                            <h3 className='product-type'>{data.type}</h3>
                            {
                                data.datas.map((item,key)=>(
                                    <p key={key}>{item.title}</p>
                                )
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products