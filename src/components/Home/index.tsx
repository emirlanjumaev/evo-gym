import { useLinkContext } from "@/context/LinkContext";
import ActionButton from "../buttons/ActionButton";
import { LinksEnum } from "@/shared";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import useeMediaQuery from "@/hooks/useeMediaQuery";
import { sponsorsList } from "@/services/sponsorsList";
import { motion } from "framer-motion";

export default function Home() {
  const { setSelectedPage } = useLinkContext();
  const isAboveMediumScreen = useeMediaQuery("(min-width: 960px)");

  return (
    <section id="home" className="mt-[8rem]">
      {/* IMAGE AND MAIN HEADER */}
      <div className="container">
        <div className="sm:flex items-center justify-center mt-8">
          {/* MAIN HEADER */}
          <div>
            {/* HEADINGS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5, once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: {
                  opacity: 0,
                  x: -50,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              className="max-w-[560px]"
            >
              <h1 className="home-title text-[35px] sm:text-[65px] font-rubik text-[#ff6b66] relative z-[5] sm:before:content-['EVOLVE']">
                EVOGYM
              </h1>
              <h3 className="text-[20px] sm:text-[28px] text-gray-500">
                Evolutionary fitness.
              </h3>
              <p className="text-[13px] sm:text-[16px] text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                nam amet dolore corrupti quisquam incidunt iusto odio enim ut
                assumenda!
              </p>
              <div className="mt-4 flex gap-3 items-center text-[13px] sm:16px">
                <ActionButton
                  setSelectedPage={setSelectedPage}
                  href={LinksEnum.OurContact}
                  className="bg-secondary-500"
                >
                  Join Now
                </ActionButton>
                <ActionButton
                  setSelectedPage={setSelectedPage}
                  href={LinksEnum.OurClasses}
                  className="underline !text-primary-300"
                >
                  Learn More
                </ActionButton>
              </div>
            </motion.div>
          </div>

          <div className="md:h-[650px]">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5, once: true }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: {
                  opacity: 0,
                  x: 50,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              src={HomePageGraphic}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* SPONSORS */}
      {isAboveMediumScreen && (
        <div className="mt-12">
          <div className="flex gap-5 items-center">
            {sponsorsList.map((sponsor) => {
              return (
                <div className="w-[350px] h-[150px]">
                  <img
                    src={sponsor}
                    alt="sponsor"
                    className="object-scale-down w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div></div>
    </section>
  );
}
