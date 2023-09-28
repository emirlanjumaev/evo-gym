import STitle from "../STitle/STitle";
import MyMotion from "../mymotion/MyMotion";
import Image1 from "@/assets/image1.png";
import Image2 from "@/assets/image3.png";
import Image3 from "@/assets/image4.png";
import Image4 from "@/assets/image5.png";
import Image5 from "@/assets/image6.png";
import Image6 from "@/assets/image2.png";

export default function OurClasses() {
  return (
    <section id="our-classes">
      <div className="bg-primary-100 py-11">
        <div className="container">
          <div className="inline-block">
            <MyMotion
              initial={{ opacity: 0.6, scale: 0.95 }}
              visible={{ opacity: 1, scale: 1 }}
            >
              <STitle>Our Classes</STitle>
            </MyMotion>
            <MyMotion
              initial={{ opacity: 0.6, scale: 0.95 }}
              visible={{ opacity: 1, scale: 1 }}
            >
              <p className="my-4 max-w-[800px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                aliquid. ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum nam dignissimos blanditiis cumque aut quasi ullam est.
                Aliquid, eveniet hic?
              </p>
            </MyMotion>
          </div>
          <div className="mt-[2rem]">
            <ul className="flex overflow-x-scroll overflow-y-hidden">
              <li className="min-w-[300px] relative">
                <div className="img_box absolute left-0 top-0">
                  <img src={Image1} alt="s" className="img" />
                </div>
                <div className="content relative z-4 bg-primary-500/70 h-full flex items-center justify-center flex-col p-6 opacity-0 hover:opacity-100 duration-200">
                  <h1 className="font-bold text-[18px] text-white">
                    Weight Training Classes
                  </h1>
                  <p className="text-[14px] text-white mt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Distinctio quam rem repudiandae sunt. Neque architecto
                    libero, ab optio suscipit laborum.
                  </p>
                </div>
              </li>
              <li className="min-w-[300px] relative">
                <div className="img_box absolute left-0 top-0">
                  <img src={Image2} alt="s" className="img" />
                </div>
                <div className="content relative z-4 bg-primary-500/70 h-full flex items-center justify-center flex-col p-6 opacity-0 hover:opacity-100 duration-200">
                  <h1 className="font-bold text-[18px] text-white">
                    Weight Training Classes
                  </h1>
                  <p className="text-[14px] text-white mt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Distinctio quam rem repudiandae sunt. Neque architecto
                    libero, ab optio suscipit laborum.
                  </p>
                </div>
              </li>
              <li className="min-w-[300px] relative">
                <div className="img_box absolute left-0 top-0">
                  <img src={Image3} alt="s" className="img" />
                </div>
                <div className="content relative z-4 bg-primary-500/70 h-full flex items-center justify-center flex-col p-6 opacity-0 hover:opacity-100 duration-200">
                  <h1 className="font-bold text-[18px] text-white">
                    Weight Training Classes
                  </h1>
                  <p className="text-[14px] text-white mt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Distinctio quam rem repudiandae sunt. Neque architecto
                    libero, ab optio suscipit laborum.
                  </p>
                </div>
              </li>
              <li className="min-w-[300px] relative">
                <div className="img_box absolute left-0 top-0">
                  <img src={Image4} alt="s" className="img" />
                </div>
                <div className="content relative z-4 bg-primary-500/70 h-full flex items-center justify-center flex-col p-6 opacity-0 hover:opacity-100 duration-200">
                  <h1 className="font-bold text-[18px] text-white">
                    Weight Training Classes
                  </h1>
                  <p className="text-[14px] text-white mt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Distinctio quam rem repudiandae sunt. Neque architecto
                    libero, ab optio suscipit laborum.
                  </p>
                </div>
              </li>
              <li className="min-w-[300px] relative">
                <div className="img_box absolute left-0 top-0">
                  <img src={Image5} alt="s" className="img" />
                </div>
                <div className="content relative z-4 bg-primary-500/70 h-full flex items-center justify-center flex-col p-6 opacity-0 hover:opacity-100 duration-200">
                  <h1 className="font-bold text-[18px] text-white">
                    Weight Training Classes
                  </h1>
                  <p className="text-[14px] text-white mt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Distinctio quam rem repudiandae sunt. Neque architecto
                    libero, ab optio suscipit laborum.
                  </p>
                </div>
              </li>
              <li className="min-w-[300px] relative">
                <div className="img_box absolute left-0 top-0">
                  <img src={Image6} alt="s" className="img" />
                </div>
                <div className="content relative z-4 bg-primary-500/70 h-full flex items-center justify-center flex-col p-6 opacity-0 hover:opacity-100 duration-200">
                  <h1 className="font-bold text-[18px] text-white">
                    Weight Training Classes
                  </h1>
                  <p className="text-[14px] text-white mt-1">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Distinctio quam rem repudiandae sunt. Neque architecto
                    libero, ab optio suscipit laborum.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
