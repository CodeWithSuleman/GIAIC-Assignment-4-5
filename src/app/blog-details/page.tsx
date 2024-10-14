import Image from "next/image";
import firstImage from "@/app/images/image-1.jpg";

export default function FirstBlog() {
  return (
    <div className="bg-slate-900 min-h-screen w-full font-mono text-white flex flex-col items-start">
      <div className="sm:p-5">
        <div className="w-full mt-4 flex justify-center">
          <h1 className="text-4xl font-bold text-sky-600">Hey There</h1>
        </div>
        <div className="sm:w-full px-4 mt-8 flex justify-center">
          <Image
            src={firstImage}
            width={900}
            height={100}
            alt="My-Blog"
            layout="intrinsic"
            objectFit="contain"
            className="rounded-tl rounded-tr"
          />
        </div>
        <div className="w-full mt-4">
          <h1 className="text-6xl font-bold italic mt-4 px-5">BLOG DETAILS:</h1>
          <p className="px-10 text-lg">
            Lorem ipsum dolor Lorem ipsum Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Sit neque dolorum dolor? Possimus
            sequi assumenda, iste perferendis accusamus, quisquam corrupti quod
            nam nisi pariatur nemo iure optio aut ullam reprehenderit voluptate.
            Soluta dolore non molestias reprehenderit! Omnis voluptatem laborum
            id aspernatur illo fuga, excepturi ab aut. In magnam minima ipsam
            consequatur, dolorem earum quisquam, accusamus cum distinctio vero,
            nesciunt voluptas aspernatur et asperiores tenetur aut corporis!
            Distinctio itaque quas architecto atque iure earum dicta odit
            excepturi, voluptatem magnam molestiae vel corrupti. Eveniet
            placeat, deserunt dolorem at, distinctio itaque repellendus et neque
            tenetur adipisci nobis nostrum in facere exercitationem, ea officia
            qui dicta atque impedit nulla expedita? Dolore asperiores voluptas
            earum unde delectus officia possimus quam? Aspernatur odio, quae
            nesciunt deleniti omnis quis excepturi est. Cum rem rerum delectus
            quod, dolores possimus doloribus laudantium temporibus, modi
            molestiae at commodi praesentium dolorum iure quia nulla optio
            distinctio voluptatibus porro natus veniam alias eveniet
            consequuntur a. Praesentium, mollitia! Iusto officia rerum dolores,
            recusandae ea aut quaerat quae quod, nobis nemo possimus dolorum
            molestiae vero tenetur fuga pariatur id? Rem, non recusandae! Ad
            neque assumenda natus alias quas delectus qui molestias voluptate
            laborum, vero, obcaecati deserunt minima sit sapiente quasi eaque
            animi eius ducimus culpa voluptatum nulla architecto iusto quos eos?
            Aspernatur hic perferendis nesciunt a, dolores, fuga quia ex
            officiis vero similique natus accusantium. Aperiam iure totam hic
            laboriosam quo quam dolore architecto, eos et quibusdam. Et eum quae
            sequi quos. Facilis, expedita. Facilis ea corrupti necessitatibus,
            possimus quaerat eligendi similique ullam aliquam? Cupiditate nihil
            explicabo ipsam! Officia pariatur error voluptatem velit aliquid
            neque laborum minus ullam placeat fugiat mollitia accusantium
            laboriosam iusto cumque quo aut itaque, esse sit ratione voluptates
            incidunt eius perspiciatis animi. In delectus doloremque dolorem ab
            maxime iure consequatur sapiente praesentium aspernatur sit quam
            adipisci earum similique commodi reprehenderit voluptatibus id, eum
            voluptate maiores impedit odit sunt quos? Cumque beatae,
            reprehenderit aspernatur nulla ullam eius inventore quod quis ea
            natus, aperiam distinctio dolorum earum ratione animi officia. Optio
            omnis earum dolores, corrupti quas modi sint cupiditate odit!
            Impedit voluptate earum eum minus error reprehenderit corporis
            nihil, distinctio ipsum labore iste repudiandae? Quia, nesciunt
            consectetur reprehenderit nemo dolores asperiores culpa itaque,
            pariatur eius vero aperiam, nulla nostrum eligendi ea modi
            doloremque quisquam. Deserunt culpa eaque illum unde cum assumenda
            aspernatur ipsa veritatis ad rem est excepturi inventore aliquam
            vitae, quia perferendis obcaecati blanditiis eligendi consequuntur
            eius dicta cumque! Necessitatibus delectus consectetur libero minima
            rem laboriosam voluptatem. Distinctio quos, veritatis deserunt
            fugiat ullam nulla nemo cumque eveniet quibusdam iure sit voluptatum
            rem consectetur atque, laudantium officia dolorem dolore cupiditate
            modi facere tempore! Necessitatibus vitae corrupti, tempore maxime
            doloremque cumque unde repudiandae fugit sunt inventore dicta est
            iure? Totam, asperiores quisquam. Aperiam, ullam eius quam aut saepe
            ea numquam. Saepe cum, dolores ullam neque quos nesciunt error eius
            iure consequuntur et assumenda quis quod libero debitis, voluptates
            nihil tenetur tempora? Necessitatibus iste minus odit, dicta
            obcaecati neque voluptatem sapiente quos fugiat minima nisi
            reiciendis debitis! Illum, placeat! Saepe a assumenda consequuntur
            expedita?dolor sit amet consectetur adipisicing elit...
          </p>
        </div>
      </div>
    </div>
  );
}
