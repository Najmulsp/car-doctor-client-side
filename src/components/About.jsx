import person from "../../public/assets/images/about_us/person.jpg";
import parts from "../../public/assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className="hero min-h-full mt-10 lg:pb-20 border">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
        <img src={person} alt="" className="max-w-sm rounded-lg myChoice"/>
        <img src={parts} alt="" className="max-w-sm lg:border-t-8 lg:border-l-8 rounded-lg border-white lg:absolute top-32 left-48 mt-6 lg:mt-0 myChoice"/>
    </div>
    <div className="lg:w-1/2">
        <a className="text-orange-600 font-bold mb-8" href="#">About Us</a>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.  <br />the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
      <button className="btn btn-primary bg-orange-600">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;