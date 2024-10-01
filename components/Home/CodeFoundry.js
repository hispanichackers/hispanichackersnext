import ArrowLink from "./Links/arrowlink";

export default function CodeFoundry() {
    return (
        <section className="flex flex-col lg:flex-row  w-full md:h-fit lg:h-[600px] items-center font-inter text-white">
            <div className="flex flex-col w-full lg: h-full justify-center items-center p-[20px] bg-gradient-to-br from-[#000] to-[#2BFEFF]">
                <div className="flex flex-col gap-[5px] md:gap-[15px] py-[15px] md:py-[50px]">
                    <div>
                        <p className="text-xl md:text-3xl">Introducing</p>
                        <h1 className="text-6xl md:text-8xl">Code Foundry</h1>
                    </div>
                    <div>
                        <p className="text-xl md:text-3xl font-bold">A FREE Bootcamp for Founders and Engineers</p>
                        <p className="text-xl md:text-3xl">Fall 2024 Cohort Starting October 21!</p>
                    </div>
                    <img className="w-[300px] md:w-[350px] self-end" src="/static/images/foundry_logo_white_full.png" alt="Hispanic Hackers Code Foundry Logo"/>
                </div>
            </div>
            <div className="flex flex-col w-full h-full text-xl md:text-2xl justify-center items-center bg-[url('/static/images/social_meeting_1.webp')] bg-cover bg-center">
                <div className="flex flex-col h-full gap-[15px] p-[25px] md:pb-[100px] lg:pb-[25px] bg-orange/90 justify-center">
                    <p className="text-xl md:text-2xl">"We get founders and engineers collaborating on projects in the same room together. Founders are provided their founding development team and the engineers receive hands on product-to-market experience."</p>
                    <p className="text-lg md:text-xl">Code Foundry is a free, hands-on tech bootcamp created for startup founders and engineers looking to bridge the gap between concept and market-ready product. Sponsored by Capital Factory, Hispanic Hackers, and CircleSquare Labs, this program offers comprehensive education on brand design, website creation, and app development. The aim is to bring together aspiring entrepreneurs and developers, providing them with the skills to collaborate on real-world projects and turn their ideas into functional products.</p>
                    <div>
                        <p className="text-xl md:text-2xl"><b>Learn More & Register: </b></p>
                        <ArrowLink
                            details={{ link: "All About Code Foundry", url: "https://hispanichackers.fillout.com/codefoundry", target: "", color: "#fff" } }
                        ></ArrowLink>
                    </div>
                </div>
            </div>
        </section>
    );
}