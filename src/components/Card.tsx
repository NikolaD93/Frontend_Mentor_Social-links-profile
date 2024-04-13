import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/NikolaD93",
  },
  {
    name: "Frontend Mentor",
    href: "https://www.frontendmentor.io/profile/NikolaD93",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/nikoladojcinovic93",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
  },
];

export function Card() {
  return (
    <>
      <CardContainer className="inter-var w-[320px] sm:w-[300px] z-[9999]">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-darkGrey h-auto rounded-xl p-6 md:p-8 w-full">
          <CardItem translateZ="50" className="mx-auto">
            <Image
              src="/avatar-jessica.jpeg"
              width={66}
              height={66}
              alt="Picture of the author"
              className="rounded-full"
            />
          </CardItem>
          <CardItem
            as="h1"
            translateZ="60"
            className="mt-4 text-white font-[600] text-center mx-auto"
          >
            Jessica Randall
          </CardItem>
          <CardItem
            as="p"
            translateZ="100"
            className="mx-auto text-[10px] text-green font-[600] mt-1"
          >
            London, United Kingdom
          </CardItem>
          <CardItem
            as="p"
            translateZ="100"
            className="mx-auto text-[10px] text-white my-4"
          >
            "Front-end developer and avid reader."
          </CardItem>
          <div className="flex flex-col gap-3">
            {socials.map((item, id) => {
              return (
                <CardItem
                  key={id}
                  translateZ={20}
                  as={Link}
                  href={item.href}
                  target="__blank"
                  className="rounded-md text-[10px] font-[600] text-white bg-grey w-full py-[10px] text-center  hover:bg-green hover:text-black focus:bg-green focus:text-black"
                >
                  {item.name}
                </CardItem>
              );
            })}
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
