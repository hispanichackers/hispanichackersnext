export default function ImageTileSection() {
    return (
      <section className="bg-cyan flex flex-col pt-20 lg:grid lg:grid-cols-2">
        <div className="lg:col-span-2 lg:text-center lg:mt-20 container mx-auto pb-8 px-4 md:px-0">
        <figure class="grid isolate group">
          <img
              className="col-span-full row-span-full w-full max-h-[500px] mb-5 rounded-2xl object-cover object-[0_90%]"
              src="/static/images/capitalFactoryGroupPic.jpg"
              alt="Group pic"
            />
            <figcaption className="col-span-full row-span-full mt-auto bg-red bg-opacity-50 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Lorem ipsum</figcaption>
        </figure>
        </div>
        <div className="">
        <img
              className="mx-20 rounded-2xl"
              src="/static/images/nathanAndAndres.png"
              alt="Nathan and Andres"
            />
        </div>
        <div className="">
        <img
              className="mx-2 rounded-2xl"
              src="/static/images/socialMeetup.png"
              alt="Meetup"
            />

        </div>
      </section>
    );
  }
