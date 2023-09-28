export default function ImageTileSection() {
    return (
      <section className="bg-cyan flex flex-col pt-20 lg:grid lg:grid-cols-2">
        <div className="h-96 lg:col-span-2 lg:text-center lg:h-96 lg:mt-20">
        <img
              className=" h-80 mb-5 rounded-2xl lg:w-auto "
              src="/static/images/capitalFactoryGroupPic.jpg"
              alt="Group pic"
            />
        </div>
        <div className="h-80">
        <img
              className="h-72 mx-20 rounded-2xl"
              src="/static/images/nathanAndAndres.png"
              alt="Nathan and Andres"
            />
        </div>
        <div className="h-72">
        <img
              className="h-52 mx-2 rounded-2xl"
              src="/static/images/socialMeetup.png"
              alt="Meetup"
            />
        
        </div>
      </section>
    );
  }
  