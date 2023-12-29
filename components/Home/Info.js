import ArrowLink from "./Links/arrowlink";

export default function Info() {
    return (
        <section className="flex flex-col py-16 px-25 mb-20 w-full items-center gap-y-12 font-inter lg:py-16 lg:mb-24">
            <div className="flex flex-col px-8 gap-y-8 gap-x-10 md:px-16 md:flex-row-reverse items-center max-w-[1200px]">
                <img className="h-auto w-full md:w-1/2" src="/static/images/social_meeting_2-nologo.webp"/>
                <div className="flex flex-col gap-y-2">
                    <h3 className="text-yellow font-bold text-2xl lg:text-3xl">Find Your Tech Familia.</h3>
                    <p className="text-lg lg:text-xl">Hispanic Hackers unites Latino developers and entrepreneurs, fostering collaboration and growth. Through workshops, presentations, and partnerships, we empower our community to thrive in the tech industry</p>
                    <span className="text-black text-lg ml-8 font-bold lg:text-xl"><ArrowLink
                        details={{ link: "Join Hispanic Hackers", url: "/join", target: "", color: "#267e7e" } }
                    ></ArrowLink></span>
                </div>
            </div>
            <div className="flex flex-col px-8 gap-y-10 gap-x-8 md:px-16 items-center max-w-[1200px]">
                <img className="w-full h-[150px] md:h-[31vw] object-cover" src="/static/images/1-edited-cropped.webp"/>
                <div className="grid md:grid-cols-3 md:grid-rows-1 gap-y-6 gap-x-10">
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-cyan font-bold text-xl lg:text-2xl">No Membership Dues</h3>
                        <p className="text-lg lg:text-xl">Hispanic Hackers is free to join! We operate off of sponsors and donations in order to bring you free resources and events. If you are interested in becoming a sponsor, <a href="/contact" className="text-yellow hover:underline">send us a message</a>.</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-cyan font-bold text-xl lg:text-2xl">Over 2,500 Professional Members</h3>
                        <p className="text-lg lg:text-xl">We are more than a professional network - we’re a community. Hispanic Hackers is a great place to find familia and break through new ideas.</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h3 className="text-cyan font-bold text-xl lg:text-2xl">100+ Tech Resources</h3>
                        <p className="text-lg lg:text-xl">New to Austin? New to tech? How can we help? We offer resources, events, and volunteer opportunities. Join us, find your community, and explore the next steps in your career.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}