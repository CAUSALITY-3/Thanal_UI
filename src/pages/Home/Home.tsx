import { FC } from "react";
import { ProductCard, Carousel } from "../../components";
import "./Home.scss";

const Home: FC = () => {
  // const mainData = [{type:"plants",data}]
  const datas = [
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
  const mainData = [
    { type: "plants", datas },
    { type: "furniture", datas },
    { type: "fruits", datas },
  ];
  return (
    <div className="home">
      <div className="first-page">Home</div>
      <div className="sections">
        {mainData.map((data, key) => (
          <Carousel key={key} type={data.type}>
            {data.datas.map((item, key) => (
              <div className="margin-provider" key={key}>
                <ProductCard props={item} />
              </div>
            ))}
          </Carousel>
        ))}
      </div>
    </div>
  );
};

export default Home;
