import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-4 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-4xl text-left w-full capitalize">
            Tech Renaissance Professional
          </h2>
          <p className="font-light  text-sm sm:text-md md:text-lg ">
            In a realm where technology and magic intertwine,
            I am a seeker of knowledge and a weaver of intricate spells that bridge the
            mundane and the extraordinary. Gifted with the ability to craft full-stack enchantments,
            summon algorithms from the depths of machine learning, and shape ethereal data into meaningful insights,
            I roam the digital landscapes as a technomancer. My arsenal includes the ancient tomes of Python, the elemental
            forces of HTML5, CSS, and JavaScript, and the powerful artifacts of MongoDB, React.js, and Node.js. Guided by curiosity
            and a relentless drive to innovate, I aspire to ascend as a master architect of technological marvels
          </p>
        </ItemLayout>

        <ItemLayout
            className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-md sm:text-2xl">
            Education
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-8 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-md sm:text-2xl">
            Bachelor Of Technology - Artificial Intelligence and Data Science <br/> <sub className="font-semibold text-base">Easa College Of Engineering , CGPA : 80% <br/> 2021 - 2025 </sub>
          </p>
        </ItemLayout>

        <ItemLayout
            className={" col-span-full xs:col-span-8 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-md sm:text-2xl">
            Continuous Capacity Building Program (CCBP) 4.0 <br/> <sub className="font-semibold text-base"> Nxtwave Disruptive Technologies <br/> 2021 - 2025 </sub>
          </p>
        </ItemLayout>

        <br/>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=KarthiKeyanZz&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="KarthiKeyan Github Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=KarthiKeyanZz&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="KarthiKeyan Github Lang"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <h2 className="text-md sm:text-xs md:text-lg lg:text-3xl text-left w-full capitalize" > Skills and Tools i Use </h2>
          <br/>
          <img
              className="w-full h-auto"
              src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,express,figma,firebase,gatsby,git,github,graphql,html,js,jquery,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,python,react,tailwind,threejs,vercel,vite,vscode,yarn`}
              alt="KarthiKeyanZz Skills"
              loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=KarthiKeyanZz&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="KarthiKeyanZ"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/KarthiKeyanZz/Photography-Portfolio-Website"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=KarthiKeyanZz&repo=Photography-Portfolio-Website&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="KarthiKeyanZ Streak"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
