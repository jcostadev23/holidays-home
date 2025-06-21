import Image from "next/image";

const MainHouse = () => {
  return (
    <div className="flex flex-col w-full">
      <Image
        aria-hidden
        src="/main-house.jpg"
        alt="main house"
        width={600}
        height={500}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="flex flex-col md:flex-row gap-4 m-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          incidunt provident mollitia unde rerum itaque ex suscipit sunt odit,
          delectus odio omnis consectetur impedit voluptatem enim, deleniti, eum
          harum repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Architecto incidunt provident mollitia unde rerum itaque ex
          suscipit sunt odit, delectus odio omnis consectetur impedit voluptatem
          enim, deleniti, eum harum repudiandae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Architecto incidunt provident mollitia
          unde rerum itaque ex suscipit sunt odit, delectus odio omnis
          consectetur impedit voluptatem enim, deleniti, eum harum repudiandae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          incidunt provident mollitia unde rerum itaque ex suscipit sunt odit,
          delectus odio omnis consectetur impedit voluptatem enim, deleniti, eum
          harum repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Architecto incidunt provident mollitia unde rerum itaque ex
          suscipit sunt odit, delectus odio omnis consectetur impedit voluptatem
          enim, deleniti, eum harum repudiandae.
        </p>
        <div className="bg-amber-100 py-2 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          sapiente tempore voluptas, minima voluptatum asperiores. Voluptatum
          itaque esse harum odio minima quia, tempore repudiandae odit ea
          dignissimos omnis fuga corrupti!
        </div>
      </div>
    </div>
  );
};
export default MainHouse;
