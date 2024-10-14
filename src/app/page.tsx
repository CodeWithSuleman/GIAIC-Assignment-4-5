import Image from "next/image";
import firstImage from '@/app/images/image-1.jpg';
import Link from "next/link";
 export type blogData ={
  title: string,
  details: string,
 
 };
export const dataItems:blogData[]=[
  {
    title:"Blog",
    details:"Lorem ipsum dolor sit amet consectetur adipisicing elit,Enim distinctio eum dignissimos culpa laborum et cumque natus ad qui!",
  },
  {
    title:"Blog2",
    details:"Lorem ipsum dolor sit amet consectetur adipisicing elit,Enim distinctio eum dignissimos culpa laborum et cumque natus ad qui!",
    
  },
  {
    title:"Blog3",
    details:"Lorem ipsum dolor sit amet consectetur adipisicing elit,Enim distinctio eum dignissimos culpa laborum et cumque natus ad qui!",

  },
  {
    title:"Blog4",
    details:"Lorem ipsum dolor sit amet consectetur adipisicing elit,Enim distinctio eum dignissimos culpa laborum et cumque natus ad qui!",

  },
  {
    title:"Blog5",
    details:"Lorem ipsum dolor sit amet consectetur adipisicing elit,Enim distinctio eum dignissimos culpa laborum et cumque natus ad qui!",

  },
  {
    title:"Blog6",
    details:"Lorem ipsum dolor sit amet consectetur adipisicing elit,Enim distinctio eum dignissimos culpa laborum et cumque natus ad qui!",
  },
]; 

export default function Home() {
  return (
    <div className="bg-slate-900 h-screen font-mono text-white sm:flex flex-wrap items-center justify-center ">
      {dataItems.map((dataItems,index)=>(
      <div key={index} className="shadow-lg shadow-green-950 hover:shadow-xl sm:w-[300px] m-4 bg-slate-600 border-solid border-2 border-sky-500 rounded sm:p-4"> 
        <div className="sm:pt-1.5">
          <Image
            src={firstImage}
            alt="My-Blog"
            layout="intrinsic"
            objectFit="contain"
            className="rounded-tl rounded-tr"
          />
        </div>
        <div className="w-full sm:mt-8">
          <p className="font-bold italic font-mono text-3xl sm:ml-[0.5vw]">{dataItems.title}</p>
        </div>
        <div className="w-full sm:mt-1">
          <p className="text-sm">
          {dataItems.details}
          </p>
        </div>
        <div className="w-full sm:mt-4">
          <Link href="/blog-details" >
          <button className="bg-transparent text-white border border-solid border-white w-full font-bold py-2 px-4 rounded hover:bg-sky-500 hover:border-sky-500 transition-colors duration-300">
            Read More
          </button></Link>
        </div>
      </div>
      ))}
    </div>
  );
}
