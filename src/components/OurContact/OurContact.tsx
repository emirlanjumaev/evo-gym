import STitle from "../STitle/STitle";
import Img from "@/assets/ContactUsPageGraphic.png";
import MyMotion from "../mymotion/MyMotion";

export default function OurContact() {
  return (
    <section id="our-contact" className="bg-white py-11">
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <MyMotion
              initial={{ opacity: 0, x: -20 }}
              visible={{ opacity: 1, x: 0 }}
            >
              <STitle>
                <span className="text-primary-500">Join Now </span> to Get in
                Shape
              </STitle>
              <p className="my-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
                laboriosam deserunt. Fuga sit corrupti, doloremque nostrum error
                repellendus dolorem facilis aliquam sint maiores, dicta nam,
                quos repudiandae harum! Error, eos!
              </p>

              <div className="form-box">
                <form className="max-w-[768px]">
                  <div className="flex gap-3 flex-col sm:flex-row">
                    <div className="form-item flex-1">
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        className="bg-primary-300 text-white placeholder:text-white px-3 py-2 outline-none border-2 rounded-md max-w-[450px] w-full border-black/50 focus:bg-primary-500"
                      />
                    </div>
                    <div className="form-item flex-1">
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="bg-primary-300 focus:bg-primary-500 text-white placeholder:text-white px-3 py-2 outline-none border-2 rounded-md max-w-[450px] w-full border-black/50"
                      />{" "}
                    </div>
                  </div>
                  <div className="form-item mt-3">
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="p-3 resize-none border-2 border-black/60 w-full rounded-md outline-none bg-primary-300 focus:bg-primary-500 text-white placeholder:text-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-secondary-500 px-8 py-2 rounded-md mt-3 border-2 border-primary-500 hover:bg-secondary-400"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </MyMotion>
          </div>
          <div className="flex-1">
            <MyMotion
              initial={{ opacity: 0, x: 20 }}
              visible={{ opacity: 1, x: 0 }}
            >
              <div className="imgs flex items-center justify-center ">
                <img src={Img} alt="s" />
              </div>
            </MyMotion>
          </div>
        </div>
      </div>
    </section>
  );
}
