import { Carousel } from "@material-tailwind/react";
 
export function CarouselImg({imgs}) {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl bg-black h-[500px]">
      {
        imgs.map((img,i)=>{
          return <img
          src={img}
          alt="image 1"
          className="h-full w-full object-cover"
          style={{
            backgroundSize:"cover"
          }}
        />
        })
      }
      
    </Carousel>
  );
}